"use client";
import ResultBar from "../ResultBar";
import InfoBar from "@/components/admin/InfoBar";
import RightSideBar from "@/components/admin/RightSideBar";
import {
  Programme,
  Category,
  Team,
  Skill,
  Model,
  PublishResultsMutation,
  PublishResultsMutationVariables,
  PublishResultsDocument,
  CandidateProgramme,
} from "@/gql/graphql";
import { parseJwt } from "@/lib/cryptr";
import { SERVER_URL } from "@/lib/urql";
import { withUrqlClient } from "next-urql";
import { useEffect, useRef, useState } from "react";
import {
  OperationResult,
  cacheExchange,
  fetchExchange,
  useMutation,
} from "urql";
import OneResult from "./SingleResult";
import { styled } from "styled-components";
import { ChevronLeft } from "@/icons/arrows";
import { PageChevronLeft, PageChevronRight } from "@/icons/pagination";
import { it } from "node:test";
import Modal from "@/components/Modal";
import { toast } from "react-toastify";
import { DownLoadIcon } from "@/icons/action";


interface Props {
  result: Programme[];
  categories: Category[];
  skills: Skill[];
  teams: Team[];
}

interface BarData {
  name: string;
  totalPoint: number;
  currentPoint: number;
  totalSports: number;
  currentSports: number;
}

// styled components

const ComponentsDiv: any = styled.div<{ height: string }>`
  width: 100%;
  overflow: auto;
  height: 75%;

  @media (min-width: 1024px) {
    width: 100%;
    height: ${(props) => (props.height ? props.height : "100%")};
  }
`;

const DetailedDiv: any = styled.div<{ height: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 3%;

  @media (min-width: 1024px) {
    height: ${(props) => (props.height ? props.height : "75vh")};
  }
`;

const Result = (props: Props) => {
  const [allData, setAllData] = useState<Programme[]>(props.result);
  const [IsRightSideBarOpen, setIsRightSideBarOpen] = useState(false);
  const [SelectedProgramme, setSelectedProgramme] = useState<Programme>();
  const [isExcelUpload, setExcel] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<Programme[]>(props.result);
  const [currentPage, setCurrentPage] = useState(1);
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(7);
  const [screenHeigh, setScreenHeight] = useState<number>(400);
  const [SelectedProgrammes, setSelectedProgrammes] = useState<string[]>([]);
  const [isOrderedToPublish, setIsOrderedToPublish] = useState(false);
  const [isOrderedToGoLive, setIsOrderedToGoLive] = useState(false);
  const [barData, setBarData] = useState<BarData[]>([]);
  const [timeInSec, setTimeInSec] = useState<number>(3);

  const ProgrammeRef = useRef<HTMLDivElement>(null);

  const [state, UploadManyProgrammeExicute] = useMutation(
    PublishResultsDocument
  );

  const PublishResults = async () => {
    const datas: OperationResult<
      PublishResultsMutation,
      PublishResultsMutationVariables
    > = await UploadManyProgrammeExicute({
      programCodes: SelectedProgrammes,
    });

    console.log(datas);
    

    if (datas.data?.publishResults) {
      console.log(datas.data?.publishResults);
      setIsOrderedToPublish(false);
      toast.success("Results Published");
    } else {
      toast.error("Results not Published");
    }
  };

  useEffect(() => {
    const cookie = document.cookie;
    if (cookie) {
      const token = cookie.split("=")[1];
      const cv = parseJwt(token);
      setData(
        props.result?.filter(
          (item: any) =>
            cv.categories?.includes(item.category.name) &&
            !item.resultPublished &&
            !item.anyIssue
        ) as Programme[]
      );
      setAllData(
        props.result?.filter(
          (item: Programme) =>
            cv.categories?.includes(item?.category?.name) &&
            !item.resultPublished &&
            !item.anyIssue
        ) as Programme[]
      );
    }

    console.log(props.result);

    // Bar data

    let teamData: BarData[] = props.teams.map((data, i) => {
      console.log(data);

      return {
        name: data.name as string,
        totalPoint: (data.totalPoint as number) || (0 as number),
        totalSports: (data.totalSportsPoint as number) || (0 as number),
        currentPoint: 0 as number,
        currentSports: 0 as number,
      };
    });

    setBarData(teamData);

    // window height settings
    const windowWidth = window.innerWidth;

    setItemsPerPage(calculateBreakPoint(window.innerHeight));

    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);

    if (IsRightSideBarOpen) {
      setItemsPerPage((calculateBreakPoint(window.innerHeight) / 4) * 3);
    } else {
      setItemsPerPage(calculateBreakPoint(window.innerHeight));
      setCurrentPage(1);
    }
  }, [IsRightSideBarOpen]);

  useEffect(() => {
    // when screen height changes

    console.log(screenHeigh);
    setIsRightSideBarOpen(false);

    const shh = calculateBreakPoint(window.innerHeight);

    setItemsPerPage(shh);
    console.log(shh);
  }, [screenHeigh]);

  const calculateBreakPoint = (sh: number) => {
    return Math.floor((sh + 30 - 300) / 100) * 4;
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const currentData = data?.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  // Go to a specific page number
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Render the pagination controls
  const renderPaginationControls = () => {
    const controls = [];
    for (let page = 1; page <= totalPages; page++) {
      controls.push(
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={`${
            currentPage === page ? "bg-secondary text-white" : "bg-[#ECE1FC]"
          }  py-2 px-4 rounded-xl font-bold mx-1 my-5`}
        >
          {page}
        </button>
      );
    }
    return controls;
  };

  function downloadExcel() {
    const data = props.result;
    const replacer = (key: any, value: any) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map((row: any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    let csvArray = csv.join("\r\n");

    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvArray;
    a.target = "_Blank";
    a.download = "Programme.csv";
    document.body.appendChild(a);
    a.click();
  }

  return (
    <>
      <div className="w-full h-full">
        <ResultBar data={barData} />

        <DetailedDiv
          height={`${(itemsPerPage / (IsRightSideBarOpen ? 3 : 4)) * 6 + 8}rem`}
        >
          <div className="flex-1 h-full">
            <div className="h-10 cursor-pointer flex justify-between mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-1/3 lg:w-1/4 rounded-full bg-[#EEEEEE] px-5 text-xl border-secondary"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                  setData(
                    allData.filter(
                      (item: any) =>
                        item.name
                          ?.toLocaleLowerCase()
                          .includes(e.target.value.toLocaleLowerCase()) ||
                        item.programCode
                          ?.toLocaleLowerCase()
                          .includes(e.target.value.toLocaleLowerCase())
                    )
                  );
                }}
              />


              <div>
                <div className="dropdown dropdown-end mr-1">
                  <label
                    tabIndex={0}
                    className="inline-flex bg-secondary ml-1  text-white rounded-full px-5 py-2 font-bold cursor-pointer"
                  >
                    {SelectedProgrammes.length} Selected
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 font-bold"
                  >
                    <button
                      className=" block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                      onClick={() => {
                        setIsOrderedToPublish(true);
                      }}
                    >
                      Publish
                    </button>
                    <button
                      className=" block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                      onClick={() => {
                        setIsOrderedToGoLive(true);
                      }}
                    >
                      Go Live
                    </button>
                  </ul>
                </div>

                <button
                  className="hidden md:inline-flex ml-1 bg-secondary text-white rounded-full px-5 py-2 font-bold"
                  onClick={downloadExcel}
                >
                  Export
                </button>
                <button
                  className="ml-1 bg-secondary text-white rounded-full px-6 py-[8px] font-bold md:hidden"
                  onClick={downloadExcel}
                >
                  <DownLoadIcon className="w-6 h-6 cursor-pointer fill-white  transition-all"/>
                </button> 
              </div>
            </div>
            <div className="flex flex-col items-center lg:justify-center w-full h-full">
              <ComponentsDiv
                height={`${
                  (itemsPerPage / (IsRightSideBarOpen ? 3 : 4)) * 6
                }rem`}
              >
                <div
                  ref={ProgrammeRef}
                  className={`grid gap-4 w-full transition-all grid-cols-1 ${
                    IsRightSideBarOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
                  }`}
                >
                  {currentData?.map((item: Programme, index: number) => {
                    return (
                      <div
                        key={index}
                        className={`transition-all bg-[#EEEEEE] rounded-xl mt-[1%] cursor-pointer flex p-5 gap-3 content-center items-center h-20 relative ${
                          SelectedProgrammes.includes(
                            item.programCode as string
                          )
                            ? "bg-[#e1c7f9]"
                            : "inherit"
                        }`}
                        onClick={() => {
                          // setIsRightSideBarOpen(true);
                          setSelectedProgramme(item);
                          setIsEdit(false);
                          setIsCreate(false);
                          setExcel(false);
                          setIsImageUpload(false);

                          if (
                            SelectedProgrammes.includes(
                              item.programCode as string
                            )
                          ) {
                            const deletedPrpgrammesData: string[] =
                              SelectedProgrammes.filter(
                                (programCode: string) => {
                                  return programCode != item.programCode;
                                }
                              );

                            setSelectedProgrammes(
                              deletedPrpgrammesData as string[]
                            );
                          } else {
                            setSelectedProgrammes([
                              ...(SelectedProgrammes as string[]),
                              item.programCode as string,
                            ]);
                          }

                          // setting point

                          // for (let index = 0; index < (item.candidateProgramme?.length as number); index++) {
                          //   const itm = (item.candidateProgramme as CandidateProgramme[])[index];

                          // }
                          let point = barData;

                          item.candidateProgramme?.forEach((itm) => {
                            console.log(itm);

                            let editedData = point.map((bar, i) => {
                              if (bar.name == itm.candidate?.team?.name) {
                                let Arts = 0;
                                let Sports = 0;
                                // bar.currentPoint = itm.point as number

                                if (item.model == Model.Arts) {
                                  Arts = (itm.point as number) || 0;
                                } else {
                                  Sports = (itm.point as number) || 0;
                                }

                                if (
                                  SelectedProgrammes.includes(
                                    item.programCode as string
                                  )
                                ) {
                                  return {
                                    ...bar,
                                    currentPoint: bar.currentPoint - Arts,
                                    totalPoint: bar.totalPoint - Arts,
                                    totalSports: bar.totalSports - Sports,
                                    currentSports: bar.currentSports - Sports,
                                    // itm.point
                                  };
                                } else {
                                  return {
                                    ...bar,
                                    currentPoint: bar.currentPoint + Arts,
                                    totalPoint: bar.totalPoint + Arts,
                                    totalSports: bar.totalSports + Sports,
                                    currentSports: bar.currentSports + Sports,
                                    // itm.point
                                  };
                                }
                              }
                              return bar;
                            });

                            point = editedData;
                          });

                          setBarData(point);
                        }}
                      >
                        <div className="text-white font-bold bg-secondary px-3 py-1 text-xl rounded-xl flex justify-center content-center items-center">
                          <p> {item.programCode}</p>
                        </div>

                        <p className="text-black leading-5 pr-[10%]">
                          {item.name}
                        </p>
                        <div
                          className={`${
                            item.anyIssue
                              ? "bg-error"
                              : item.resultPublished
                              ? "bg-success"
                              : item.resultEntered
                              ? "bg-info"
                              : "bg-warning"
                          }  absolute w-3 h-3 rounded-full right-3`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </ComponentsDiv>
              <div className="w-full flex items-center justify-center">
                <button
                  key={1}
                  onClick={() => {
                    currentPage != 1 && goToPage(currentPage - 1);
                  }}
                  className={`${"bg-[#ECE1FC]"}  py-2 px-2  rounded-xl font-bold mx-1 my-5`}
                >
                  {<PageChevronLeft className="w-6 h-6 fill-secondary" />}
                </button>
                <button
                  key={1}
                  className={`${"bg-secondary text-white"}  py-2 px-4 rounded-xl font-bold mx-1 my-5`}
                >
                  {currentPage}
                </button>
                <button
                  key={1}
                  onClick={() =>
                    totalPages > currentPage && goToPage(currentPage + 1)
                  }
                  className={`${"bg-[#ECE1FC]"}  py-2 px-2  rounded-xl font-bold mx-1 my-5`}
                >
                  <PageChevronRight className="w-6 h-6 fill-secondary" />
                </button>
              </div>
            </div>
          </div>
        </DetailedDiv>
      </div>

      <Modal
        modalOpen={isOrderedToPublish}
        setModalOpen={setIsOrderedToPublish}
      >
        Are you sure, Do you want to{" "}
        <span className="font-bold">Publish results</span>?
        <p className="mt-4">Selected programs :</p>
        <div className="w-full flex flex-wrap gap-2 mt-1">
          {SelectedProgrammes.map((pr, i) => {
            return (
              <p key={i} className="text-primary font-bold">
                {" "}
                {pr}{" "}
              </p>
            );
          })}
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={async () => {
              await PublishResults();
            }}
            className="btn btn-secondary"
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setIsOrderedToPublish(false);
            }}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </Modal>

      <Modal modalOpen={isOrderedToGoLive} setModalOpen={setIsOrderedToGoLive}>
        Are you sure, Do you want to do{" "}
        <span className="font-bold">Live results</span>?
        <div className="mt-1 flex justify-start gap-5 items-center">
          <p>Enter the Delay time</p>
          <input
            type="number"
            id="small-input"
            value={timeInSec}
            onChange={(e) => {
              setTimeInSec(+e.target.value);
            }}
            className="block w-10 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <p className="mt-4">Selected programs :</p>
        <div className="w-full flex flex-wrap gap-2 mt-1">
          {SelectedProgrammes.map((pr, i) => {
            return (
              <p key={i} className="text-primary font-bold">
                {" "}
                {pr}{" "}
              </p>
            );
          })}
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button className="btn btn-secondary">Confirm</button>
          <button
            onClick={() => {
              setIsOrderedToGoLive(false);
            }}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default withUrqlClient(() => ({
  url: SERVER_URL,
  exchanges: [fetchExchange, cacheExchange],
  fetchOptions: {
    cache: "no-cache",
    credentials: "include",
  },
}))(Result);
