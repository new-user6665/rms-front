"use client";

import { CandidateProgramme, Programme } from "@/gql/graphql";
import { useEffect, useState } from "react";
import TabCandidates from "./TabCandidates";
import TabResults from "./TabResults";

interface Props {
  programme: Programme;
}

export default function TabView(props: Props) {
  const { programme } = props;

  const [candidatesOrResults, setCandidatesOrResults] = useState("candidates");
  const [dateTime, setDateTime] = useState<Date>();

  const active = {
    div: "rounded-xl text-sm h-8 bg-primary border border-primary flex items-center",
    button: "px-3 text-white text-lg",
  };
  const inactive = {
    div: "rounded-xl text-sm h-8 border border-primary flex items-center",
    button: "px-3 text-primary text-lg",
  };

  useEffect(() => {
    if (programme?.date) {
      setDateTime(new Date(programme?.date));
    }
    console.log(dateTime);
  }, []);

  function timeFormat12Hour() {
    let h: any = dateTime?.getUTCHours();
    let m: any = dateTime?.getUTCMinutes();
    let ampm = h >= 12 ? "pm" : "am";

    h = h % 12;
    h = h ? h : 12;

    m = m?.toString().padStart(2, "0");
    const formatedTimeString = h + ":" + m + " " + ampm;
    return formatedTimeString;
  }

  function timeFormatDate() {
    console.log(dateTime?.getUTCMonth());
    let day: any = dateTime?.getUTCDate();
    let month: any = dateTime?.getUTCMonth();
    let year: any = dateTime?.getUTCFullYear();

    const formatedTimeString = day + "-" + month + "-" + year;
    return formatedTimeString;
  }


  return (
    <div className="xl:flex h-full w-full hidden 2xl:hidden">
      {/* sidebar */}
      <div className="flex flex-col h-full w-72 min-w-[18rem] bg-primary justify-center items-center gap-3">
        <h1 className="text-white text-5xl px-3 leading-tight font-bold">
          Program Details
        </h1>
        <div className="flex flex-col w-full pl-4">
          <label className="text-accent text-sm pl-2">Name</label>
          <input
            type="text"
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder={`${programme?.name}`}
          />
        </div>
        <div className="flex w-full px-4">
          <div className="flex flex-col w-1/3">
            <label className="text-accent text-sm pl-2">Code</label>
            <input
              type="text"
              disabled
              className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
              placeholder={`${programme?.programCode}`}
            />
          </div>
          <div className="flex flex-col w-2/3">
            <label className="text-accent text-sm pl-2">Candidate Count</label>
            <input
              type="text"
              disabled
              className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
              placeholder={`0${programme?.candidateCount}`}
            />
          </div>
        </div>
        <div className="flex flex-col w-full pl-4">
          <label className="text-accent text-sm pl-2">Category</label>
          <input
            type="text"
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder={`${programme?.category?.name}`}
          />
        </div>
        <div className="flex flex-col w-full pl-4">
          <label className="text-accent text-sm pl-2">Duration</label>
          <input
            type="text"
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder={`${programme?.duration}`}
          />
        </div>
        <div className="flex flex-col w-full pl-4">
          <label className="text-accent text-sm pl-2">Date and Time</label>
          <input
            type="text"
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            // placeholder={`${timeFormat12Hour()}, ${timeFormatDate()}`}
          />
        </div>
        <div className="flex w-full px-4">
          <div className="flex flex-col w-1/3">
            <label className="text-accent text-sm pl-2">Mode</label>
            <input
              type="text"
              disabled
              className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
              placeholder={`${programme?.mode}`}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label className="text-accent text-sm pl-2">Model</label>
            <input
              type="text"
              disabled
              className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
              placeholder={`${programme?.model?.toUpperCase()}`}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label className="text-accent text-sm pl-2">Type</label>
            <input
              type="text"
              disabled
              className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
              placeholder={`${programme?.type}`}
            />
          </div>
        </div>
      </div>
      {/* main */}
      <div className="flex flex-col h-full w-full justify-center px-5">
        <h1 className="text-5xl font-semibold pl-5">Detailed View</h1>
        {/* Card */}
        <div className="flex flex-col w-10/11 h-5/6 bg-white rounded-big overflow-hidden pb-10 pt-4">
          {/* sliders */}
          <div className="flex h-16 justify-center items-center gap-5">
            <div
              onClick={() => setCandidatesOrResults("candidates")}
              className={
                candidatesOrResults === "candidates" ? active.div : inactive.div
              }
            >
              <button
                className={
                  candidatesOrResults === "candidates"
                    ? active.button
                    : inactive.button
                }
              >
                Candidates
              </button>
            </div>
            <div
              onClick={() => setCandidatesOrResults("results")}
              className={
                candidatesOrResults !== "candidates" ? active.div : inactive.div
              }
            >
              <button
                className={
                  candidatesOrResults !== "candidates"
                    ? active.button
                    : inactive.button
                }
              >
                Results
              </button>
            </div>
          </div>
          <hr className="border" />
          {/* sort buttons */}
          {candidatesOrResults === "candidates" ? (
            <TabCandidates programme={programme} />
          ) : (
            <TabResults programme={programme} />
          )}
        </div>
      </div>
    </div>
  );
}
