"use client";
import React, { useState, useEffect } from "react";
import Judges from "../admin/judges/Judges";

interface Props {
  programme: {
    name: string;
    candidate: {
      chestNo: string;
      name: string;
    }[];
  };
}

const codeletter = [
  {
    value: 1,
    label: "A",
  },
  {
    value: 2,
    label: "B",
  },
  {
    value: 3,
    label: "C",
  },
  {
    value: 4,
    label: "D",
  },
  {
    value: 5,
    label: "E",
  },
  {
    value: 6,
    label: "F",
  },
  {
    value: 7,
    label: "G",
  },
  {
    value: 8,
    label: "H",
  },
  {
    value: 9,
    label: "I",
  },
  {
    value: 10,
    label: "J",
  },
  {
    value: 11,
    label: "K",
  },
  {
    value: 12,
    label: "L",
  },
  {
    value: 13,
    label: "M",
  },
  {
    value: 14,
    label: "N",
  },
  {
    value: 15,
    label: "O",
  },
  {
    value: 16,
    label: "P",
  },
  {
    value: 17,
    label: "Q",
  },
  {
    value: 18,
    label: "R",
  },
  {
    value: 19,
    label: "S",
  },
  {
    value: 20,
    label: "T",
  },
  {
    value: 21,
    label: "U",
  },
  {
    value: 22,
    label: "V",
  },
  {
    value: 23,
    label: "W",
  },
  {
    value: 24,
    label: "X",
  },
  {
    value: 25,
    label: "Y",
  },
  {
    value: 26,
    label: "Z",
  },
];

const Judgement = (props: Props) => {
  
  const [columnsCount , setColumnsCount] = useState<number>(3);
  const [judgeData, setJudgeData] = useState<any>({
    programCode: "BBM",
    candidates: [
      {
        chestNo: "SM123",
        codeletter: "A",
        point1: 10,
        point2: 10,
        point3: 10,
        point4: 10,
      },
    ],
  });

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = JSON.parse(localStorage.getItem("judgeData") as string) || judgeData;
    setJudgeData(value);
  }, []);

  const saveToLocalStorage = (e:any, i:any, value:number) => {
    var candidateIndex = judgeData.candidates[i];
    // console.log(judgeData.candidates[Index].point1, e.target.value);
    
    candidateIndex[`point${value}`] = Number(e.target.value);
    console.log(judgeData.candidates[i]);
    var totalPoints =
      ((candidateIndex.point1 +
      candidateIndex.point2 +
      candidateIndex.point3 +
      candidateIndex.point4) / 40 )* 10 ;
    console.log(totalPoints);
    document.getElementById(`total${i}`)!.innerHTML =
      totalPoints.toString();
    localStorage.setItem("judgeData", JSON.stringify(judgeData));
  };

  return (
    <>
      {/* Mobile View */}
      <div className="h-screen w-screen font-sans overflow-hidden flex flex-col gap-4 md:hidden pt-5 bg-primary">
        {/* Page Name */}
        <div className="h-[8%] w-full flex items-star">
          <h1 className="text-lg font-semibold px-6 text-white">
            Judgment Page
          </h1>
        </div>
        {/* heading */}
        <div className=" w-4/5 flex items-center pt-12">
          <h1 className="text-2xl font-semibold px-6 text-white leading-none">
            Balloon Breaking MLM
          </h1>
        </div>
        {/* judge Card */}
        <div className="bg-white h-5/6 w-full rounded-t-large">
          {/* titlle */}
          <div className="h-[8%] w-full flex justify-center items-center pt-3">
            <h1 className="text-xl font-bold px-6 text-primary leading-none">
              Add Points
            </h1>
            <div className="flex gap-4">
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2">
                  <button className="h-4 w-4 bg-[#00ff73] rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[90%] w-[90%] fill-white"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                  </button>
                  <p className="text-[10px]">Add Column</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-4 w-4 bg-[#ff0000] rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[90%] w-[90%] fill-white"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M200-440v-80h560v80H200Z" />
                    </svg>
                  </button>
                  <p className="text-[10px]">Remove Column</p>
                </div>
                {/* disble button ; color : #D9D9D9  */}
              </div>
            </div>
          </div>
          <hr className="mt-3" />
          {/* list */}
          <div className="flex flex-col items-center gap-2 overflow-y-auto h-5/6 pt-5">
            {/* list 1 */}
            {props.programme.candidate.map((candidate, Index) => {
              useEffect(() => {
                judgeData.candidates[Index] = { chestNo: candidate.chestNo };
                const candidateIndex = judgeData.candidates[Index];
                candidateIndex.codeletter = codeletter[0].label;
                candidateIndex.point1 = 0;
                candidateIndex.point2 = 0;
                candidateIndex.point3 = 0;
                candidateIndex.point4 = 0;
                console.log(judgeData);
              }, []);

              return (
                <div
                  className="h-14 min-h-14 min-w-6/8 w-6/8 flex gap-2"
                  key={Index}
                >
                  {/* first */}
                  <div className="bg-accent rounded-xl h-14 w-1/4 text-[9px] flex flex-col justify-center px-2 text-primary">
                    <div className="flex gap-1 items-center">
                      <select
                        name=""
                        id=""
                        className="w-5 h-5 rounded bg-accent border border-white pl-[3px] text-sm font-bold"
                        onChange={(e) => {
                          // console.log(
                          //   judgeData.candidates[Index].codeletter, codeletter[e.target.value-1].label
                          // );
                          judgeData.candidates[Index].codeletter =
                            codeletter[(e.target.value as any) - 1].label;
                          console.log(judgeData.candidates[Index]);
                          localStorage.setItem("judgeData", JSON.stringify(judgeData));
                        }}
                      >
                        {codeletter.map((letter, index) => {
                          // only return if the index of the candidate is there
                          if (index < props.programme.candidate.length) {
                            return (
                              <option value={letter.value}>
                                {letter.label}
                              </option>
                            );
                          }
                        })}
                      </select>
                      <span className="font-semibold">{candidate.chestNo}</span>
                    </div>
                    <p>{candidate.name}</p>
                  </div>
                  {/* second */}
                  <div className="bg-accent rounded-xl h-14 w-5/6 flex items-center gap-2 justify-between">
                    {/* text */}
                    <div className="h-full flex items-center gap-2 pl-2">
                      <div className="flex flex-col">
                        <p className="text-[10px]">Points</p>
                        <p className="text-[7px]">(MAX.10)</p>
                      </div>
                      <div className="flex gap-2">
                      {/* {
                          [...Array(columnsCount)].map((_, i) => {
                            return (
                              <div className="h-2/3 w-8 rounded text-center text-primary text-xl font-semibold bg-white relative">
                          <select
                            name=""
                            id=""
                            className="h-full w-8 text-center rounded"
                            onChange={(e) => {
                              console.log(judgeData);

                              // var candidateIndex = judgeData.candidates[Index];
                              // // console.log(judgeData.candidates[Index].point1, e.target.value);
                              // candidateIndex.point1 = Number(e.target.value);
                              // console.log(judgeData.candidates[Index]);
                              // var totalPoints =
                              //   candidateIndex.point1 +
                              //   candidateIndex.point2 +
                              //   candidateIndex.point3 +
                              //   candidateIndex.point4;
                              // console.log(totalPoints);
                              // document.getElementById(
                              //   `total${Index}`
                              // )!.innerHTML = totalPoints.toString();
                              saveToLocalStorage(e, Index, 1);
                            }}
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                              (number) => {
                                return <option value={number}>{number}</option>;
                              }
                            )}
                          </select>
                        </div>
                            );
                          })
                        } */}
                    
                      {/* 1 */}
                        <div className="h-2/3 w-8 rounded text-center text-primary text-xl font-semibold bg-white relative">
                          <select
                            name=""
                            id=""
                            className="h-full w-8 text-center rounded"
                            onChange={(e) => {
                              console.log(judgeData);

                              // var candidateIndex = judgeData.candidates[Index];
                              // // console.log(judgeData.candidates[Index].point1, e.target.value);
                              // candidateIndex.point1 = Number(e.target.value);
                              // console.log(judgeData.candidates[Index]);
                              // var totalPoints =
                              //   candidateIndex.point1 +
                              //   candidateIndex.point2 +
                              //   candidateIndex.point3 +
                              //   candidateIndex.point4;
                              // console.log(totalPoints);
                              // document.getElementById(
                              //   `total${Index}`
                              // )!.innerHTML = totalPoints.toString();
                              saveToLocalStorage(e, Index, 1);
                            }}
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                              (number) => {
                                return <option value={number}>{number}</option>;
                              }
                            )}
                          </select>
                        </div>
                        {/* 2 */}
                        {/* <div className="h-2/3 w-8 rounded text-center text-primary text-xl font-semibold bg-white relative">
                        <h1>20</h1>
                      </div> */}
                        <div className="h-2/3 w-8 rounded text-center text-primary text-xl font-semibold bg-white relative">
                          <select
                            name=""
                            id=""
                            className="h-full w-8 text-center rounded"
                            onChange={(e) => {
                              saveToLocalStorage(e, Index, 2);
                            }}
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                              (number) => {
                                return <option value={number}>{number}</option>;
                              }
                            )}
                          </select>
                        </div>
                        {/* 3 */}
                        <div className="h-2/3 w-8 rounded text-center text-primary text-xl font-semibold bg-white relative">
                          <select
                            name=""
                            id=""
                            className="h-full w-8 text-center rounded"
                            onChange={(e) => {
                              saveToLocalStorage(e, Index, 3);
                            }}
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                              (number) => {
                                return <option value={number}>{number}</option>;
                              }
                            )}
                          </select>
                        </div>
                      </div>
                      {/* 2 */}
                    </div>
                    {/* total */}
                    <div className="h-full flex items-center gap-2 pr-2">
                      <label htmlFor="" className="text-[7px]">
                        Total
                      </label>
                      <div
                        className="w-8 rounded text-center text-primary text-xl font-semibold bg-white"
                        id={`total${Index}`}
                      >
                        <h1>0</h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Desktop View */}
      <div className="md:flex hidden h-screen overflow-hidden w-screen">
        {/* sidebar */}
        <div className="bg-primary bigphone:hidden xl:flex md:w-72 md:min-w-[18rem] xl:w-96 xl:min-w-[24rem] h-screen text-white font-semibold text-4xl leading-tight pl-8 flex flex-col pt-48">
          <h1>Judgment</h1>
          <h1>Page</h1>
        </div>
        {/* main */}
        <div className="flex flex-col px-12 w-screen gap-5 bigphone:py-24">
          {/* title */}
          <div className="h-1/5 w-5/6 flex items-end">
            <h1 className="text-5xl font-bold text-primary leading-none">
              Balloon Breaking MLM
            </h1>
          </div>
          {/* list */}
          <div className="flex flex-col bg-white h-3/4 w-full rounded-big py-5 overflow-hidden">
            {/* title */}
            <h1 className="text-3xl font-semibold px-5">Add Point</h1>
            <hr className="border" />
            {/* + and - button */}
            <div className="h-16 flex items-center justify-end pr-5">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <button className="h-4 w-4 bg-[#00ff73] rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[90%] w-[90%] fill-white"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                  </button>
                  <p className="text-[10px]">Add Column</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-4 w-4 bg-[#ff0000] rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[90%] w-[90%] fill-white"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M200-440v-80h560v80H200Z" />
                    </svg>
                  </button>
                  <p className="text-[10px]">Remove Column</p>
                </div>
                {/* disble button ; color : #D9D9D9  */}
              </div>
            </div>
            <hr className="border" />
            {/* Judgement List */}
            <div className="h-full flex flex-col pt-5 gap-2 overflow-y-auto">
              {/* 1 */}
              <div className="flex gap-5 px-5 h-14 w-full">
                {/* first */}
                <div className="flex gap-5 bg-accent h-14 w-1/3 rounded-xl px-5 items-center text-sm justify-between">
                  <div className="flex items-center gap-5">
                    <p>01</p>
                    <div className="bg-primary h-1 w-1 rounded-full" />
                  </div>
                  <p>SM123</p>
                  <p className="text-justify">Muhammed Midlaj</p>
                </div>
                {/* second */}
                <div className="flex gap-5 bg-accent h-14 w-2/3 rounded-xl px-5 items-center text-sm justify-between">
                  <div className="flex flex-col items-center">
                    <p className="font-semibold text-sm">Points</p>
                    <p className="text-lt">MAX(10pts)</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-white h-10 w-10 rounded-lg justify-center flex items-center text-lg font-semibold text-primary">
                      10
                    </div>
                    <div className="bg-white h-10 w-10 rounded-lg justify-center flex items-center text-lg font-semibold text-primary">
                      10
                    </div>
                    <div className="bg-white h-10 w-10 rounded-lg justify-center flex items-center text-lg font-semibold text-primary">
                      10
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <p>total</p>
                    <div className="bg-white h-10 w-10 rounded-lg justify-center flex items-center text-lg font-semibold text-primary">
                      30
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Judgement;
