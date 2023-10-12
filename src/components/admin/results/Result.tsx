"use client";
import ResultBar from "../ResultBar";
import {
  Programme,
  Category,
  Team,
  Skill,
  Model,
  PublishResultsMutation,
  PublishResultsMutationVariables,
  PublishResultsDocument,
  GoLiveDocument,
  GoLiveMutation,
  GoLiveMutationVariables,
  CandidateProgramme,
  Types,
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
import { styled } from "styled-components";
import { PageChevronLeft, PageChevronRight } from "@/icons/pagination";
import Modal from "@/components/Modal";
import { toast } from "react-toastify";
import { DownLoadIcon, FilterIcon } from "@/icons/action";

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

interface ToDownLoadData {
  sl: number | string;
  programCode: string;
  programmeName: string;
  category: string;
  position: number;
  grade: string;
  candidateChestNo: string;
  candidateName: string;
  class: string;
  candidateTeam: string;
  gradePoint: number;
  positionPoint: number;
  totalPoint: number;
  checkCode: string;
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
  const [toDownloadList, setToDownloadList] = useState<any>();
  const [sertedData, setSertedData] = useState<Programme[]>([]);
  const [toDownLoadData, setToDownLoadData] = useState<ToDownLoadData[]>([]);

  const ProgrammeRef = useRef<HTMLDivElement>(null);

  const [state, PublishResultExicute] = useMutation(PublishResultsDocument);

  const [_, GoLiveResiltExicute] = useMutation(GoLiveDocument);

  const PublishResults = async () => {
    const datas: OperationResult<
      PublishResultsMutation,
      PublishResultsMutationVariables
    > = await PublishResultExicute({
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

  const GoLiveResults = async () => {
    const datas: OperationResult<GoLiveMutation, GoLiveMutationVariables> =
      await GoLiveResiltExicute({
        programCodes: SelectedProgrammes,
        timeInSec: timeInSec,
      });

    console.log(datas);

    if (datas.data) {
      console.log(datas.data);
      setIsOrderedToPublish(false);
      toast.success("Results Are Live");
    } else {
      toast.error("Results not Live");
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


  useEffect(() => {
    // change the program data to download data format

    let downloadData: ToDownLoadData[] = [];

    props.result?.forEach((programme, index) => {
      if (programme.resultPublished) {
        return;
      }
      programme.candidateProgramme?.sort(
        (a, b) => (b.point as number) - (a.point as number)
      );

      programme.candidateProgramme?.forEach((candidate, i) => {
        let sl = i == 0 ? index + 1 : "";
        let programName = i == 0 ? programme.name : "";
        let programCode = i == 0 ? programme.programCode : "";
        let category = i == 0 ? programme.category?.name : "";
        let gradePoint =
          programme.type == Types.Single
            ? candidate.grade?.pointSingle
            : programme.type == Types.Group
            ? candidate.grade?.pointGroup
            : programme.type == Types.House
            ? candidate.grade?.pointHouse
            : 0;
        let positionPoint =
          programme.type == Types.Single
            ? candidate.position?.pointSingle
            : programme.type == Types.Group
            ? candidate.position?.pointGroup
            : programme.type == Types.House
            ? candidate.position?.pointHouse
            : 0;
        let chestNo =  programme.type == Types.House ? candidate.candidate?.chestNO?.slice(0,-2) +'00' : candidate.candidate?.chestNO
        let candidateClass =   programme.type == Types.Single ? candidate.candidate?.class : '-'
        let candidateName  =  programme.type == Types.Single ? candidate.candidate?.name : programme.type == Types.Group ? candidate.candidate?.name + " & Team"  : programme.type == Types.House ? candidate.candidate?.team?.name : null
        // if there no position or grade then not push

        if (candidate.position || candidate.grade) {
          downloadData.push({
            sl: sl,
            programCode: programCode as string,
            programmeName: programName as string,
            category: category as string,
            position: candidate.position?.value ? candidate.position?.value : '' as any,
            grade: candidate.grade?.name
              ? candidate.grade?.name
              : ("" as string),
            candidateChestNo: chestNo as string,
            candidateName: candidateName as string,
            class: candidateClass as string,
            candidateTeam: candidate.candidate?.team?.name as string,
            gradePoint: gradePoint ? gradePoint : ('' as any),
            positionPoint: positionPoint? positionPoint: '' as any,
            totalPoint: candidate.point as number,
            checkCode: programme.programCode as string,
          });
        }
      });
    });
    // do the above code by sorted data

    console.log(downloadData);
    setToDownLoadData(downloadData as ToDownLoadData[]);
  }, []);

  // const worksheet = api()
  // console.log(worksheet);

  // const generateExcelFile = async (data: any) => {
  //   const workbook = new ExcelJS.Workbook();
  //   console.log(workbook);
    
  //   const worksheet = workbook.addWorksheet("Results");
    
  //   const makeCenter = (cellLetters: any) => {
  //     cellLetters.forEach((letter: any) => {
  //       for (let i = 1; i < 4; i++) {
  //         worksheet.getCell(letter + i).alignment = {
  //           vertical: "middle",
  //           horizontal: "center",
  //         };
  //         worksheet.getCell(letter + i).border = {
  //           top: { style: "thick" },
  //           left: { style: "thick" },
  //           bottom: { style: "thick" },
  //           right: { style: "thick" },
  //         };
  //         worksheet.getCell(letter + i).font= {
  //           bold: true
  //         }
  //       }
  //     });
  //   };


  //   worksheet.mergeCells("A1:M1");
  //   worksheet.mergeCells("A2:M2");
  //   worksheet.mergeCells("B3:D3");
  //   worksheet.mergeCells("E3:F3");
  //   worksheet.mergeCells("G3:J3");
  //   worksheet.mergeCells("K3:M3");
  //   const mainTitle = worksheet.getCell("A1");
  //   mainTitle.value = "REALIA'23";
  //   const resultTitle = worksheet.getCell("A2");
  //   resultTitle.value = "RESULTS";
  //   worksheet.getCell("B3").value = "Programs";
  //   worksheet.getCell("E3").value = "Results";
  //   worksheet.getCell("G3").value = "Candidate";
  //   worksheet.getCell("K3").value = "Score";
  //   makeCenter(["A", "B", "E", "G", "K"]);

  //   mainTitle.font = {
  //     size: 48,
  //     bold:true,
  //   };
  //   resultTitle.font = {
  //     size: 14,
  //     bold:true,
  //   };

  //   // Define the columns in the Excel sheet
  //   const headers = [
  //     "SL. NO",
  //     "Code",
  //     "Program",
  //     "Category",
  //     "Position",
  //     "Grade",
  //     "Chest No",
  //     "Name",
  //     "Class",
  //     "Team",
  //     "Grade",
  //     "Position",
  //     "Total",
  //   ];
  //   const widths: any = {
  //     A: 6,
  //     B: 13,
  //     C: 30,
  //     D: 16,
  //     E: 8,
  //     F: 6,
  //     G: 9,
  //     H: 30,
  //     I: 6,
  //     J: 9,
  //     K: 11,
  //     L: 13,
  //     M: 10,
  //   };

  //   Object.keys(widths).forEach((cell: any) => {
  //     const column = worksheet.getColumn(cell);
  //     column.width = widths[cell];
  //   });

  //   const headerRow = worksheet.addRow(headers);
  //   headerRow.eachCell((cell:any) => {
  //     cell.border = {
  //       top: { style: "thick" },
  //       left: { style: "thick" },
  //       bottom: { style: "thick" },
  //       right: { style: "thick" },
  //     };
  //     cell.font = {
  //       bold: true,
  //     };
  //   });

  //   //////////////////////   For adding image in excel  ///////////////////////////////////////
  //   // const image = workbook.addImage({
  //   //   filename: 'image.png',
  //   //   extension: 'png',
  //   // });
    
  //   // // Define the dimensions of the image
  //   // const imageWidth = 200; // Width in pixels
  //   // const imageHeight = 150; // Height in pixels
    
  //   // // Get the dimensions of the worksheet
  //   // const worksheetWidth = (worksheet.pageSetup as any).pageWidth;
  //   // const worksheetHeight = (worksheet.pageSetup as any).pageHeight;
    
  //   // // Calculate the position to center the image
  //   // const x = (worksheetWidth - imageWidth) / 2;
  //   // const y = (worksheetHeight - imageHeight) / 2;
    
  //   // // Add the image to the worksheet
  //   // worksheet.addImage(image, {
  //   //   tl: { col: 1, row: 1 }, // Position of the top-left corner of the image
  //   //   ext: { width: imageWidth, height: imageHeight }, // Dimensions of the image
  //   // });
  //   ////////////////////////////////////////////////////////////////////////////////////////

  //   function setBlackBackground(
  //     worksheet: any,
  //     startCell: any,
  //     endCell: any,
  //     cellNumber: any
  //   ) {
  //     for (let i = startCell.charCodeAt(0); i <= endCell.charCodeAt(0); i++) {
  //       const columnLetter = String.fromCharCode(i);
  //       const cellAddress = `${columnLetter}${cellNumber}`;
  //       const cell = worksheet.getCell(cellAddress);

  //       // Set a black background for the cell
  //       cell.fill = {
  //         type: "pattern",
  //         pattern: "solid",
  //         fgColor: { argb: "000000" }, // Black background
  //       };
  //       cell.font = {
  //         color: { argb: "FFFFFF" }, // White text
  //       };
  //     }
  //   }

  //   var slno = 1
  //   data.forEach((item: any) => {
  //     // console.log(item);
  //     if (SelectedProgrammes.includes(item.checkCode)) {
  //       const subRow = worksheet.addRow(Object.values(item));
  //       subRow.eachCell((cell:any, num:any) => {
  //         cell.border = {
  //           top: { style: "thin" },
  //           left: { style: "thin" },
  //           bottom: { style: "thin" },
  //           right: { style: "thin" },
  //         };
  //         if (num == 1 && cell.value){
  //           cell.value = slno++;
  //         }
  //         if (num == 2 && cell.value) {
  //           console.log(cell.row);
  //           setBlackBackground(worksheet, "A", "M", cell.row);
  //         }
  //         if (num == 14) {
  //           cell.value = "";
  //           cell.border = {};
  //         }
  //       });
  //     }
  //   });

  

  //   // Generate the Excel file
  //   const buffer = await workbook.xlsx.writeBuffer();

  //   // Create a Blob containing the Excel file data
  //   const blob = new Blob([buffer], {
  //     type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   });

  //   // Create a URL for the Blob
  //   const blobURL = URL.createObjectURL(blob);

  //   // Create a link to trigger the download
  //   const a = document.createElement("a");
  //   a.href = blobURL;
  //   a.download = "Results.xlsx";
  //   a.style.display = "none";

  //   // Trigger the click event to start the download
  //   document.body.appendChild(a);
  //   a.click();

  //   // Clean up resources
  //   URL.revokeObjectURL(blobURL);
  //   document.body.removeChild(a);
  // };

  // const handleDownload = () => {
  //   generateExcelFile(toDownLoadData);
  // };
  const handleDownload = async () => {
    try {
      // Make a GET request to the Excel API route
      const response = await fetch(`/api/excel?data=${JSON.stringify(data)}&SelectedProgrammes=${JSON.stringify(SelectedProgrammes)}`)
      if (response.ok) {
        // Convert the response to a Blob and create a URL for downloading
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
  
        // Create a download link and trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.xlsx';
        a.click();
  
        // Clean up by revoking the URL
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to generate Excel file.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <div className="w-full h-full">
        <ResultBar data={barData} />

        <DetailedDiv
          height={`${
            (itemsPerPage / (IsRightSideBarOpen ? 3 : 4)) * 6 + 4.5
          }rem`}
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
                <div className="dropdown dropdown-end mr-1">
                    <label
                      tabIndex={0}
                      className="hidden md:inline-flex bg-secondary ml-1  text-white rounded-full px-5 py-2 font-bold"
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

                    <label
                      tabIndex={0}
                      className="md:hidden inline-flex bg-secondary ml-1  text-white rounded-full px-5 py-2 font-bold"
                    >
                      <FilterIcon className="w-7 h-7 fill-white cursor-pointer" />
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
                      {props.categories?.map(
                        (item: Category, index: number) => {
                          return (
                            <button
                              className=" block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                              onClick={() => {
                                setCurrentPage(1);
                                setData(
                                  allData.filter(
                                    (itm: Programme) =>
                                      itm?.category?.name?.toLocaleLowerCase() ===
                                      item?.name?.toLocaleLowerCase()
                                  )
                                );
                              }}
                            >
                              {item.name}
                            </button>
                          );
                        }
                      )}
                    </ul>
                  </div>

                <button
                  className="hidden md:inline-flex ml-1 bg-secondary text-white rounded-full px-5 py-2 font-bold"
                  onClick={handleDownload}
                >
                  Export
                </button>
                <button
                  className="ml-1 bg-secondary text-white rounded-full px-6 py-[8px] font-bold md:hidden"
                  onClick={handleDownload}
                >
                  <DownLoadIcon className="w-6 h-6 cursor-pointer fill-white  transition-all" />
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
          <button
            onClick={async () => {
              await GoLiveResults();
            }}
            className="btn btn-secondary"
          >
            Confirm
          </button>
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
