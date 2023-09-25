"use client";
import InfoBar from "@/components/admin/InfoBar";
import RightSideBar from "@/components/admin/RightSideBar";
import { Programme, Category, Team, Skill } from "@/gql/graphql";
import { parseJwt } from "@/lib/cryptr";
import { SERVER_URL } from "@/lib/urql";
import { withUrqlClient } from "next-urql";
import { useEffect, useRef, useState } from "react";
import { cacheExchange, fetchExchange } from "urql";
import OneJudges from "./SingleJudge";
import { styled } from "styled-components";
import { ChevronLeft } from "@/icons/arrows";
import { PageChevronLeft, PageChevronRight } from "@/icons/pagination";
import { compile } from "handlebars";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
// import launch from "puppeteer-extra"
// const puppeteer = require('puppeteer-extra')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())

// import * as puppeteer from 'puppeteer-extra'

interface Props {
  data: {
    title: string;
    icon: any;
  }[];
  result: Programme[];
  categories: Category[];
  skills: Skill[];
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

const Judges = (props: Props) => {
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
  const [judgeList, setJudgeList] = useState<string[]>([]);
  const [isEditJudge, setIsEditJudge] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const ProgrammeRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const cookie = document.cookie;
    if (cookie) {
      const token = cookie.split("=")[1];
      const cv = parseJwt(token);
      setData(
        props.result.filter((item: any) =>
          cv.categories?.includes(item.category.name)
        ) as Programme[]
      );
      setAllData(
        props.result.filter((item: any) =>
          cv.categories?.includes(item.category.name)
        ) as Programme[]
      );
    }

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
  const currentData = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

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


  async function generatePdf() {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.setFontSize(40);
    doc.text("Octonyan loves jsPDF", 35, 25);
    doc.addImage("examples/images/Octonyan.jpg", "JPEG", 15, 40, 180, 180);
    doc.save("a4.pdf");
  }
  // //   generatePdf();

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

  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "px", "a4");

    // Load Montserrat font
    doc.addFont(
      "https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
      "Montserrat",
      "normal"
    );

    const backgroundImageUrl = "/a4.jpg"; // Update the path to your background image

    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();

    console.log("pdf", pdfWidth, pdfHeight);

    fetch(backgroundImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const imgData = URL.createObjectURL(blob);

        currentData.forEach((a) => {
          doc.addPage("a4");

          // Add the background image
          doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

          // Set the font to Montserrat
          doc.setFont("Montserrat");

          // Add text and other content on top of the background image
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0); // Set text color to black

          doc.text(`${a.programCode}`, 125, 205);
          doc.text(`${a.name}`, 125, 218);
          var aa = 265;
          a.candidateProgramme?.map((item, i) => {
            aa = aa + 13.2;
            console.log(aa);
            doc.text(`${item.candidate?.chestNO}`, 67, aa);
            doc.text(`${item.candidate?.name}`, 112, aa);
          });
        });

        const pdfBlob = doc.output("blob");
        saveAs(pdfBlob, `judgeList.pdf`);
      });
  };

  const downloadSingle = (a: Programme) => {
    console.log(a);

    const doc = new jsPDF("portrait", "px", "a4");

    // Load Montserrat font
    doc.addFont(
      "https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
      "Montserrat",
      "normal"
    );

    const backgroundImageUrl = "/a4.jpg"; // Update the path to your background image

    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();
    console.log("pdf", pdfWidth, pdfHeight);

    fetch(backgroundImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const imgData = URL.createObjectURL(blob);

        [a].forEach((a) => {
          // Add the background image
          doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

          // Set the font to Montserrat
          doc.setFont("Montserrat");

          // Add text and other content on top of the background image
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0); // Set text color to black

          doc.text(`${a.programCode}`, 125, 205);
          doc.text(`${a.name}`, 125, 218);
          var aa = 265;
          a.candidateProgramme?.map((item, i) => {
            aa = aa + 13.2;
            console.log(aa);
            doc.text(`${item.candidate?.chestNO}`, 67, aa);
            doc.text(`${item.candidate?.name}`, 112, aa);
          });
        });

        const pdfBlob = doc.output("blob");
        saveAs(pdfBlob, `${a.programCode} ${a.name}.pdf`);
      });
  };
  return (
    <>
      <div className="w-full h-full " id="element-container">
        <InfoBar data={props.data} />

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
                    allData.filter((item: any) =>
                      item.name
                        .toLocaleLowerCase()
                        .includes(e.target.value.toLocaleLowerCase())
                    )
                  );
                }}
              />

              <div>
                <div className="">

                  <div className="dropdown dropdown-end mr-1">
                    <label
                      tabIndex={0}
                      className="inline-flex bg-secondary ml-1  text-white rounded-full px-5 py-2 font-bold"
                    >
                      Filter
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
                      {
                        props.categories.map((item: Category, index: number) => {
                          return (
                            <button
                              className=" block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                              onClick={() => {
                                setCurrentPage(1);
                                setData(
                                  allData.filter((itm: Programme) =>
                                    itm?.category?.name?.toLocaleLowerCase() === item?.name?.toLocaleLowerCase()
                                  )
                                );
                              }}
                            >
                              {item.name}
                            </button>
                          );
                        }
                        )
                      }
                    </ul>
                  </div>


                  <label
                    className="inline-flex bg-secondary text-white  rounded-full px-5 py-2 font-bold cursor-pointer"
                    onClick={async () => {
                      console.log("clicked");

                      // await generatePdf()
                      downloadPDF();
                    }}
                  >
                    Download List
                  </label>

                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="inline-flex bg-secondary ml-1  text-white rounded-full px-5 py-2 font-bold"
                    >
                      Add
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
                          setIsCreate(true);
                          setIsEdit(false);
                          setIsRightSideBarOpen(true);
                          setExcel(false);
                          setIsImageUpload(false);
                        }}
                      >
                        CREATE
                      </button>

                      <button
                        className="block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                        onClick={() => {
                          setIsCreate(false);
                          setIsEdit(false);
                          setExcel(true);
                          setIsRightSideBarOpen(true);
                          setIsImageUpload(false);
                        }}
                      >
                        IMPORT
                      </button>

                      <button
                        className="block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                        onClick={() => {
                          setIsCreate(false);
                          setIsEdit(false);
                          setIsRightSideBarOpen(true);
                          setExcel(false);
                          setIsImageUpload(true);
                        }}
                      >
                        IMAGE UPLOAD
                      </button>
                    </ul>
                  </div>
                </div>

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
                        className="transition-all bg-[#EEEEEE] rounded-xl mt-[1%] cursor-pointer flex p-5 gap-3 content-center items-center h-20"
                        onClick={() => {
                          setIsRightSideBarOpen(true);
                          setSelectedProgramme(item);
                          setIsEdit(false);
                          setIsCreate(false);
                          setExcel(false);
                          setIsImageUpload(false);
                        }}
                      >
                        <div className="text-white font-bold bg-secondary px-3 py-1 text-xl rounded-xl flex justify-center content-center items-center">
                          <p> {item.programCode}</p>
                        </div>

                        <p className="text-black leading-5 pr-[10%]">
                          {item.name}
                        </p>
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
          <RightSideBar
            key={1}
            isOpen={IsRightSideBarOpen}
            setIsOpen={setIsRightSideBarOpen}
            isCreate={isCreate}
            isEdit={isEdit}
          >
            {judgeList.length > 0 ? (
              <p>judges:</p>
            ) : isEditJudge ? (
              <>
                <label htmlFor="">Judge 1</label>
                <input type="text" placeholder="JUDGE 1" className="mb-2" />
                <input type="text" placeholder="judge@123" className="mb-2" />
                <label htmlFor="">Judge 2</label>
                <input type="text" placeholder="JUDGE 2" className="mb-2" />
                <input type="text" placeholder="judge@123" className="mb-2" />
                <label htmlFor="">Judge 3</label>
                <input type="text" placeholder="JUDGE 3" className="mb-2" />
                <input type="text" placeholder="judge@123" className="mb-2" />
                <label htmlFor="">Judge 4</label>
                <input type="text" placeholder="JUDGE 4" className="mb-2" />
                <input type="text" placeholder="judge@123" className="mb-2" />
                <label htmlFor="">Judge 5</label>
                <input type="text" placeholder="JUDGE 5" className="mb-2" />
                <input type="text" placeholder="judge@123" className="mb-2" />
                <label htmlFor="">Judge 6</label>
                <input type="text" placeholder="JUDGE 6" className="mb-2" />
                <input type="text" placeholder="judge@123" className="mb-2" />
                <label htmlFor="">Judge 7</label>
                <input type="text" placeholder="JUDGE 7" className="mb-2" />
                <input type="text" placeholder="judge@123" className="mb-2" />
                <button className="bg-secondary w-1/2 border-2 text-white px-3 flex-1 py-2 border-secondary rounded-xl font-bold">
                  submit
                </button>
                <button
                  className="bg-secondary w-1/2 border-2 text-white px-3 flex-1 py-2 border-secondary rounded-xl font-bold"
                  onClick={() => {
                    setIsEditJudge(false);
                  }}
                >
                  add
                </button>
              </>
            ) : (
              <>
                <h1>{SelectedProgramme?.name}</h1>
                {[...Array(count)].map((_, i) => {
                  console.log(i + 1, count);

                  return (
                    <div key={i}>
                      <label htmlFor="">Judge {i + 1}</label>
                      <input
                        type="text"
                        placeholder={`JUDGE ${i + 1}`}
                        className="mb-2"
                      />
                      <input
                        type="text"
                        placeholder="judge@123"
                        className="mb-2"
                      />
                    </div>
                  );
                })}
                {}
                <button
                  onClick={() => {
                    count < 2 ? null : setCount(count - 1);
                  }}
                >
                  rmv
                </button>
                <button className="bg-secondary w-1/2 border-2 text-white px-3 flex-1 py-2 border-secondary rounded-xl font-bold">
                  submit
                </button>
                <button
                  className="bg-secondary w-1/2 border-2 text-white px-3 flex-1 py-2 border-secondary rounded-xl font-bold"
                  onClick={() => {
                    // setIsEditJudge(true);
                    count < 7 ? setCount(count + 1) : null;
                  }}
                >
                  Add
                </button>
              </>
            )}
            {/* <OneJudges
              isExcelUpload={isExcelUpload}
              setIsExcelUpload={setExcel}
              isOpen={IsRightSideBarOpen}
              setIsOpen={setIsRightSideBarOpen}
              key={3}
              name={SelectedProgramme?.name as string}
              id={SelectedProgramme?.id as number}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              isCreate={isCreate}
              setIsCreate={setIsCreate}
              data={allData}
              setData={setAllData}
              category={SelectedProgramme?.category?.name as string}
              categories={props.categories as Category[]}
              skill= {SelectedProgramme?.skill?.name as string}
              skills={props.skills as Skill[]}
            /> */}

            <button
              className=""
              onClick={() => downloadSingle(SelectedProgramme as Programme)}
            >
              <svg
                fill="#000000"
                height="35px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-3 -3 35.98 35.98"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012 v-8.861H25.462z"></path>
                    <path d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723 c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742 c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193 C15.092,18.979,14.62,18.426,14.62,18.426z"></path>
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>
                    <g> </g> <g> </g> <g> </g>
                  </g>
                </g>
              </svg>
            </button>
          </RightSideBar>
          {/* </div> */}
        </DetailedDiv>
      </div>

      <div id="html-content"></div>
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
}))(Judges);
