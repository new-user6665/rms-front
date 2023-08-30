"use client";
import InfoBar from "@/components/admin/InfoBar";
import RightSideBar from "@/components/admin/RightSideBar";
import { SERVER_URL } from "@/lib/urql";
import { withUrqlClient } from "next-urql";
import React, { useEffect, useState } from "react";
import { cacheExchange, fetchExchange } from "urql";
import { Candidate, Category, Team } from "@/gql/graphql";
import OneCandidate from "./SingleCandidate";
import { parseJwt } from "@/lib/cryptr";

interface Props {
  data: {
    title: string;
    icon: any;
  }[];
  result: Candidate[];
  categories: Category[];
  teams: Team[];
}

const Candidate = (props: Props) => {
  const [allData, setAllData] = useState<Candidate[]>(props.result);
  const [IsRightSideBarOpen, setIsRightSideBarOpen] = useState(false);
  const [SelectedCandidate, setSelectedCandidate] = useState<Candidate>();
  const [isExcelUpload, setExcel] = useState<boolean>(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<Candidate[]>(props.result);
  const [currentPage, setCurrentPage] = useState(1);
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);

  const itemsPerPage = IsRightSideBarOpen ? 12 : 16;

  useEffect(() => {
    const cookie = document.cookie;
    if (cookie) {
      const token = cookie.split("=")[1];
      const cv = parseJwt(token);
      setData(
        props.result.filter((item: any) =>
          cv.categories?.includes(item.category.name)
        ) as Candidate[]
      );
      setAllData(
        props.result.filter((item: any) =>
          cv.categories?.includes(item.category.name)
        ) as Candidate[]
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
          className={`${
            currentPage === page ? "bg-[#3F127A] text-white" : "bg-[#ECE1FC]"
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
    a.download = "Candidate.csv";
    document.body.appendChild(a);
    a.click();
  }

  return (
    <>
      <div className="w-full h-full">
        <InfoBar data={props.data} />

        <div className="flex mt-[3%]">
          <div className="flex-1">
            <div className="h-10 cursor-pointer flex justify-between mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-1/4 rounded-full bg-[#EEEEEE] px-5 text-xl"
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
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="inline-flex bg-[#3F127A] text-white rounded-full px-5 py-2 font-bold"
                  >
                    Add
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 font-bold"
                  >
                    <button
                      className="bg-grey-700 block px-2 py-1 text-md rounded-md hover:bg-[#3F127A] hover:text-white"
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
                      className="bg-grey-700 block px-2 py-1 text-md rounded-md hover:bg-[#3F127A] hover:text-white"
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
                      className="bg-grey-700 block px-2 py-1 text-md rounded-md hover:bg-[#3F127A] hover:text-white"
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
                <button
                  className="ml-1 bg-[#3F127A] text-white rounded-full px-5 py-2 font-bold"
                  onClick={downloadExcel}
                >
                  Export
                </button>
              </div>
            </div>
            <div
              className={`grid gap-4 w-full transition-all ${
                IsRightSideBarOpen ? "grid-cols-3" : "grid-cols-4"
              }`}
            >
              {currentData?.map((item: Candidate, index: number) => {
                return (
                  <div
                    key={index}
                    className="transition-all bg-[#EEEEEE] rounded-xl mt-[1%] cursor-pointer flex p-5 gap-3 content-center items-center h-20"
                    onClick={() => {
                      setIsRightSideBarOpen(true);
                      setSelectedCandidate(item);
                      setIsEdit(false);
                      setIsCreate(false);
                      setExcel(false);
                      setIsImageUpload(false);
                    }}
                  >
                    <div className="text-white font-bold bg-[#3F127A] px-3 py-1 text-xl rounded-xl flex justify-center content-center items-center">
                      <p> {item.chestNO}</p>
                    </div>

                    <p className="text-black leading-5 pr-[10%]">
                      {item.name} Muhammed P
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <RightSideBar
            key={1}
            isOpen={IsRightSideBarOpen}
            setIsOpen={setIsRightSideBarOpen}
          >
            <OneCandidate
              isExcelUpload={isExcelUpload}
              setIsExcelUpload={setExcel}
              isImageUpload={isImageUpload}
              setIsImageUpload={setIsImageUpload}
              isOpen={IsRightSideBarOpen}
              setIsOpen={setIsRightSideBarOpen}
              key={3}
              name={SelectedCandidate?.name as string}
              id={SelectedCandidate?.id as number}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              isCreate={isCreate}
              setIsCreate={setIsCreate}
              data={allData}
              setData={setAllData}
              category={SelectedCandidate?.category?.name as string}
              categories={props.categories as Category[]}
              teams={props.teams as Team[]}
            />
          </RightSideBar>
        </div>
        <div className="w-full flex items-center justify-center">
          {renderPaginationControls()}
        </div>
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
}))(Candidate);
