"use client";
import InfoBar from "@/components/admin/InfoBar";
import RightSideBar from "@/components/admin/RightSideBar";
import { SERVER_URL } from "@/lib/urql";
import { withUrqlClient } from "next-urql";
import React, { useEffect, useRef, useState } from "react";
import { cacheExchange, fetchExchange } from "urql";
import { Candidate, Category, Programme, Skill } from "@/gql/graphql";
import OneTeamList from "./SingleTeamList";
import { parseJwt } from "@/lib/cryptr";
import BulkUploadTeamList from "./BulkUploadTeamList";
import NormalUploadTeamList from "./NormalUploadTeamList";
import styled from "styled-components";
import { PageChevronLeft, PageChevronRight } from "@/icons/pagination";

interface Props {
  data: {
    title: string;
    icon: any;
  }[];
  result: Programme[];
  categories: Category[];
  skills: Skill[];
  candidates: Candidate[];
}
//styled

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

const TeamList = (props: Props) => {
  const [IsRightSideBarOpen, setIsRightSideBarOpen] = useState(false);
  const [SelectedProgramme, setSelectedProgramme] = useState<Programme>();
  const [isExcelUpload, setIsExcelUpload] = useState<boolean>(false);
  const [isExcelGroupUpload, setIsExcelGroupUpload] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<Programme[]>(props.result);
  const [allData, setAllData] = useState<Programme[]>(props.result);
  const [isBulk, setIsBulk] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const TeamListRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = IsRightSideBarOpen ? 12 : 16;

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
  }, []);

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
          className={`${currentPage === page ? "active" : ""
            } w-5 h-5 bg-black mx-1 my-5`}
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
    a.download = "TeamList.csv";
    document.body.appendChild(a);
    a.click();
  }

  return (
    //     <>
    //       <div className="w-full h-full">
    //         <InfoBar data={props.data} />

    //         <div className="w-full h-5/6 bg-base-200 rounded-lg  mt-[3%] ">
    //           <div className="bg-blue-400">
    //             {/* search bar */}
    //             <div className="w-full h-10 bg-base-300 rounded-lg mt-[1%] cursor-pointer">
    //               <div className="w-1/3 h-full float-left">
    //                 <input
    //                   type="text"
    //                   value={search}
    //                   onChange={(e) => {
    //                     setSearch(e.target.value);
    //                     setCurrentPage(1);
    //                     setData(
    //                       allData.filter(
    //                         (item: TeamList) =>
    //                           item.name
    //                             ?.toLocaleLowerCase()
    //                             .includes(e.target.value?.toLocaleLowerCase()) ||
    //                           item.programCode
    //                             ?.toLocaleLowerCase()
    //                             .includes(e.target.value?.toLocaleLowerCase())
    //                       )
    //                     );
    //                   }}
    //                 />
    //               </div>
    //               <div className="m-1 float-left">
    //                 <button
    //                   className="bg-blue-600"
    //                   onClick={() => {
    //                     setIsCreate(false);
    //                     setIsEdit(false);
    //                     setIsRightSideBarOpen(true);
    //                     setIsExcelUpload(true);
    //                     setIsExcelGroupUpload(false)
    //                   }}
    //                 >
    //                   Import
    //                 </button>
    //               </div>
    //               <div className="m-1 float-left">
    //                 <button
    //                   className="bg-blue-600"
    //                   onClick={() => {
    //                     setIsCreate(false);
    //                     setIsEdit(false);
    //                     setIsRightSideBarOpen(true);
    //                     setIsExcelUpload(false);
    //                     setIsExcelGroupUpload(true)
    //                   }}
    //                 >
    //                   Import Group
    //                 </button>
    //               </div>
    //               <div className="m-1 float-left">
    //                 <button className="bg-blue-600" onClick={downloadExcel}>
    //                   Export
    //                 </button>
    //               </div>

    //               <div className="m-1 float-left">
    //                 <input
    //                   type="checkbox"
    //                   className="toggle toggle-md"
    //                   checked={isBulk}
    //                   onChange={(e) => {
    //                     setIsRightSideBarOpen(false)
    //                     setIsBulk(e.target.checked);
    //                   }}
    //                 />
    //               </div>
    //             </div>
    //           </div>

    //           <div>
    //             {isBulk ? (
    //               <BulkUploadTeamList
    //                 IsRightSideBarOpen={IsRightSideBarOpen}
    //                 setIsRightSideBarOpen={setIsRightSideBarOpen}
    //                 currentData={currentData}
    //                 setIsCreate={setIsCreate}
    //                 setIsEdit={setIsEdit}
    //                 setIsExcelUpload={setIsExcelUpload}
    //                 setSelectedTeamList={setSelectedTeamList}
    //                 key={1}
    //                 candidates={props.candidates}
    //               />
    //             ) : (
    //               <NormalUploadTeamList
    //                 IsRightSideBarOpen={IsRightSideBarOpen}
    //                 setIsRightSideBarOpen={setIsRightSideBarOpen}
    //                 currentData={currentData}
    //                 setIsCreate={setIsCreate}
    //                 setIsEdit={setIsEdit}
    //                 setIsExcelUpload={setIsExcelUpload}
    //                 setSelectedTeamList={setSelectedTeamList}
    //                 key={1}
    //               />
    //             )}
    //           </div>
    //           <div className="w-full flex items-center justify-center">
    //             {renderPaginationControls()}
    //           </div>
    //         </div>
    //       </div>

    //       <RightSideBar
    //         isCreate={isCreate}
    //         isEdit={isEdit}
    //         key={1}
    //         isOpen={IsRightSideBarOpen}
    //         setIsOpen={setIsRightSideBarOpen}
    //       >
    //         <OneTeamList
    //           isExcelUpload={isExcelUpload}
    //           setIsExcelUpload={setIsExcelUpload}
    //           isOpen={IsRightSideBarOpen}
    //           setIsOpen={setIsRightSideBarOpen}
    //           key={3}
    //           name={SelectedTeamList?.name as string}
    //           id={SelectedTeamList?.id as number}
    //           isEdit={isEdit}
    //           setIsEdit={setIsEdit}
    //           isCreate={isCreate}
    //           setIsCreate={setIsCreate}
    //           data={allData}
    //           setData={setAllData}
    //           category={SelectedTeamList?.category?.name as string}
    //           skill={SelectedTeamList?.skill?.name as string}
    //           categories={props.categories}
    //           skills={props.skills}
    //           isExcelGroupUpload={isExcelGroupUpload}
    //           setExcelGroupUpload={setIsExcelGroupUpload}
    //         />
    //       </RightSideBar>


    //     </>
    //   );
    // };

    <>
      <div className="w-full h-full">
        <InfoBar data={props.data} />

        <DetailedDiv
          height={`${(itemsPerPage / (IsRightSideBarOpen ? 3 : 4)) * 6 + 8}rem`}
        >
          <div className="flex-1 h-full">
            <div className="h-10 cursor-pointer flex justify-between mb-4">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                  setData(
                    allData.filter(
                      (item: Programme) =>
                        item.name
                          ?.toLocaleLowerCase()
                          .includes(e.target.value?.toLocaleLowerCase()) ||
                        item.programCode
                          ?.toLocaleLowerCase()
                          .includes(e.target.value?.toLocaleLowerCase())
                    )
                  );
                }}
              />
              <div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="inline-flex bg-secondary text-white rounded-full px-5 py-2 font-bold"
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
                        setIsCreate(false);
                        setIsEdit(false);
                        setIsRightSideBarOpen(true);
                        setIsExcelUpload(false);
                        setIsExcelGroupUpload(true)
                      }}
                    >
                      CREATE
                    </button>
                    <button
                      className=" block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                      onClick={() => {
                        setIsCreate(false);
                        setIsEdit(false);
                        setIsRightSideBarOpen(true);
                        setIsExcelUpload(false);
                        setIsExcelGroupUpload(true)
                      }}
                    >
                      Import Group
                    </button>

                    <button
                      className="block px-2 py-1 text-md rounded-md hover:bg-secondary hover:text-white"
                      onClick={() => {
                        setIsCreate(false);
                        setIsEdit(false);
                        setIsRightSideBarOpen(true);
                        setIsExcelUpload(false);
                        setIsExcelGroupUpload(true)
                      }}
                    >
                      IMPORT
                    </button>

                  </ul>
                </div>
                <button
                  className="ml-1 bg-secondary text-white rounded-full px-5 py-2 font-bold"
                  onClick={downloadExcel}
                >
                  Export
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center lg:justify-center w-full h-full">
              <ComponentsDiv
                height={`${(itemsPerPage / (IsRightSideBarOpen ? 3 : 4)) * 6
                  }rem`}
              >
                <div
                  ref={TeamListRef}
                  className={` transition-all grid-cols-1 ${IsRightSideBarOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
                    }`}
                >
                  {isBulk ? (
                    <BulkUploadTeamList
                      IsRightSideBarOpen={IsRightSideBarOpen}
                      setIsRightSideBarOpen={setIsRightSideBarOpen}
                      currentData={currentData}
                      setIsCreate={setIsCreate}
                      setIsEdit={setIsEdit}
                      setIsExcelUpload={setIsExcelUpload}
                      setSelectedProgramme={setSelectedProgramme}
                      key={1}
                      candidates={props.candidates}
                    />
                  ) : (
                    <NormalUploadTeamList
                      IsRightSideBarOpen={IsRightSideBarOpen}
                      setIsRightSideBarOpen={setIsRightSideBarOpen}
                      currentData={currentData}
                      setIsCreate={setIsCreate}
                      setIsEdit={setIsEdit}
                      setIsExcelUpload={setIsExcelUpload}
                      setSelectedProgramme={setSelectedProgramme}
                      key={1}
                    />
                  )}
                </div>
              </ComponentsDiv>
              <div className="w-full flex items-center justify-center">
                <button
                  key={1}
                  onClick={() => {
                    currentPage != 1 && goToPage(currentPage - 1)
                  }}
                  className={`${"bg-[#ECE1FC]"
                    }  py-2 px-2  rounded-xl font-bold mx-1 my-5`}
                >
                  {
                    <PageChevronLeft className="w-6 h-6 fill-secondary" />
                  }
                </button>
                <button
                  key={1}
                  className={`${"bg-secondary text-white"

                    }  py-2 px-4 rounded-xl font-bold mx-1 my-5`}
                >
                  {currentPage}
                </button>
                <button
                  key={1}
                  onClick={() => totalPages > currentPage && goToPage(currentPage + 1)}
                  className={`${"bg-[#ECE1FC]"
                    }  py-2 px-2  rounded-xl font-bold mx-1 my-5`}
                >
                  <PageChevronRight className="w-6 h-6 fill-secondary" />
                </button>
              </div>
            </div>
          </div>
          <RightSideBar
            isCreate={isCreate}
            isEdit={isEdit}
            key={1}
            isOpen={IsRightSideBarOpen}
            setIsOpen={setIsRightSideBarOpen}
          >
            <OneTeamList

              isExcelUpload={isExcelUpload}
              setIsExcelUpload={setIsExcelUpload}
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
              skill={SelectedProgramme?.skill?.name as string}
              categories={props.categories}
              skills={props.skills}
              isExcelGroupUpload={isExcelGroupUpload}
              setExcelGroupUpload={setIsExcelGroupUpload}
            />
          </RightSideBar>
          {/* </div> */}
        </DetailedDiv>
      </div>
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
}))(TeamList);
