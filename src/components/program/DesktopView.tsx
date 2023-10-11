"use client";

import { CandidateProgramme, Programme } from "@/gql/graphql";
import { useEffect, useState } from "react";

interface Props {
  programme: Programme;
}

export default function DesktopView(props: Props) {
  const { programme } = props;

  const [resultedCandidates, setResultedCandidates] = useState<
    CandidateProgramme[]
  >([]);
  const [dateTime, setDateTime] = useState<Date>();

  useEffect(() => {
    let candidateResults: CandidateProgramme[] = [];
    programme?.candidateProgramme?.map((candidate) => {
      console.log(candidate);
      (candidate?.position?.name !== null || candidate?.grade?.name !== null) &&
        candidateResults.push(candidate);
    });
    setResultedCandidates(candidateResults);
    console.log(candidateResults);
  }, []);

  useEffect(() => {
    if (programme?.date) {
      setDateTime(new Date(programme?.date));
    }
    console.log(dateTime);
  }, []);

  function timeFormat12Hour() {
    let h: any = dateTime?.getHours();
    let m: any = dateTime?.getMinutes();
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

  const specialButton = {
    div: "rounded-xl text-sm h-6 bg-primary border border-primary flex items-center",
    button: "px-2 text-white text-sm",
  };
  const commonButton = {
    div: "rounded-xl text-sm h-6 border border-primary flex items-center",
    button: "px-2 text-primary text-sm",
  };
  const [allOrSingleTeam, setAllOrSingleTeam] = useState("all");
  const allCandidates = programme?.candidateProgramme;
  const chronicleCandidates = allCandidates?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Chronicle";
  });
  const gazetteCandidates = allCandidates?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Gazatte";
  });
  const heraldCandidates = allCandidates?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Herald";
  });
  const tribuneCandidates = allCandidates?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Tribune";
  });

  const [allOrSingleTeamResult, setAllOrSingleTeamResult] = useState("all");

  const allCandidatesResult = resultedCandidates;
  const chronicleCandidatesResult = allCandidatesResult?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Chronicle";
  });
  const gazetteCandidatesResult = allCandidatesResult?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Gazatte";
  });
  const heraldCandidatesResult = allCandidatesResult?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Herald";
  });
  const tribuneCandidatesResult = allCandidatesResult?.filter((candidate) => {
    return candidate?.candidate?.team?.name === "Tribune";
  });
  return (
    <div className="2xl:flex h-full w-full hidden">
      {/* sidebar */}
      <div className="flex flex-col h-full w-[30rem] min-w-[18rem] bg-primary justify-center items-start gap-3 pl-5">
        <h1 className="text-white text-4xl px-3 leading-tight font-bold">
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
              placeholder={`${programme?.mode?.replace('_', ' ')}`}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <label className="text-accent text-sm pl-2">Item</label>
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
      <div className="flex flex-col h-full w-full justify-center px-10 pt-20">
        <h1 className="text-5xl font-semibold pl-5">Detailed View</h1>
        {/* Card */}
        <div className="flex h-full w-full gap-10 overflow-hidden">
          {/* Candidates Card */}
          <div className="flex h-full w-1/2 overflow-y-auto">
            <div className="flex flex-col w-full h-5/6 bg-white rounded-big  pb-10 pt-4">
              {/* sliders */}
              <div className="flex h-16 justify-start items-center gap-5 px-8">
                <p className="px-3 text-primary font-bold text-4xl">
                  Candidates
                </p>
              </div>
              <hr className="border" />
              {/* sort buttons */}
              <div className="flex h-10 items-center px-10 gap-3">
                <div
                  className={`${
                    allOrSingleTeam === "all"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeam("all");
                    }}
                    className={`${
                      allOrSingleTeam === "all"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    All
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeam === "chronicle"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeam("chronicle");
                    }}
                    className={`${
                      allOrSingleTeam === "chronicle"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Chronicle
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeam === "tribune"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeam("tribune");
                    }}
                    className={`${
                      allOrSingleTeam === "tribune"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Tribune
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeam === "gazette"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeam("gazette");
                    }}
                    className={`${
                      allOrSingleTeam === "gazette"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Gazette
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeam === "herald"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeam("herald");
                    }}
                    className={`${
                      allOrSingleTeam === "herald"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Herald
                  </button>
                </div>
              </div>
              <hr className="border" />
              {/* table */}
              <div className="flex flex-col h-5/6 items-center pt-5 gap-5 overflow-y-auto">
                {allOrSingleTeam === "all"
                  ? allCandidates?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-3/4 text-md items-center pl-2 gap-3 justify-start">
                          <img
                            src={`${
                              `https://drive.google.com/uc?id=${candidate?.candidate?.imageId}` ||
                              "https://banner2.cleanpng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                            }`}
                            className="rounded-full h-10 border"
                            alt=""
                          />
                          <p>{candidate?.candidate?.chestNO}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/4 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                        </div>
                      </div>
                    ))
                  : allOrSingleTeam === "chronicle"
                  ? chronicleCandidates?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-3/4 text-md items-center pl-2 gap-3 justify-start">
                          <img
                            src={`${
                              `https://drive.google.com/uc?id=${candidate?.candidate?.imageId}` ||
                              "https://banner2.cleanpng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                            }`}
                            className="rounded-full h-10 border"
                            alt=""
                          />
                          <p>{candidate?.candidate?.chestNO}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/4 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                        </div>
                      </div>
                    ))
                  : allOrSingleTeam === "gazette"
                  ? gazetteCandidates?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-3/4 text-md items-center pl-2 gap-3 justify-start">
                          <img
                            src={`${
                              `https://drive.google.com/uc?id=${candidate?.candidate?.imageId}` ||
                              "https://banner2.cleanpng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                            }`}
                            className="rounded-full h-10 border"
                            alt=""
                          />
                          <p>{candidate?.candidate?.chestNO}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/4 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                        </div>
                      </div>
                    ))
                  : allOrSingleTeam === "herald"
                  ? heraldCandidates?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-3/4 text-md items-center pl-2 gap-3 justify-start">
                          <img
                            src={`${
                              `https://drive.google.com/uc?id=${candidate?.candidate?.imageId}` ||
                              "https://banner2.cleanpng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                            }`}
                            className="rounded-full h-10 border"
                            alt=""
                          />
                          <p>{candidate?.candidate?.chestNO}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/4 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                        </div>
                      </div>
                    ))
                  : allOrSingleTeam === "tribune"
                  ? tribuneCandidates?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-3/4 text-md items-center pl-2 gap-3 justify-start">
                          <img
                            src={`${
                              `https://drive.google.com/uc?id=${candidate?.candidate?.imageId}` ||
                              "https://banner2.cleanpng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                            }`}
                            className="rounded-full h-10 border"
                            alt=""
                          />
                          <p>{candidate?.candidate?.chestNO}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/4 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
          {/* Results Card */}
          <div className="flex h-full w-1/2 overflow-y-auto">
            <div className="flex flex-col w-full h-5/6 bg-white rounded-big pb-10 pt-4">
              {/* sliders */}
              <div className="flex h-16 justify-start items-center gap-5 px-8">
                <p className="px-3 text-primary font-bold text-4xl">Results</p>
              </div>
              <hr className="border" />
              {/* sort buttons */}
              <div className="flex h-10 items-center px-10 gap-3">
                <div
                  className={`${
                    allOrSingleTeamResult === "all"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeamResult("all");
                    }}
                    className={`${
                      allOrSingleTeamResult === "all"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    All
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeamResult === "chronicle"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeamResult("chronicle");
                    }}
                    className={`${
                      allOrSingleTeamResult === "chronicle"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Chronicle
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeamResult === "tribune"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeamResult("tribune");
                    }}
                    className={`${
                      allOrSingleTeamResult === "tribune"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Tribune
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeamResult === "gazette"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeamResult("gazette");
                    }}
                    className={`${
                      allOrSingleTeamResult === "gazette"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Gazette
                  </button>
                </div>
                <div
                  className={`${
                    allOrSingleTeamResult === "herald"
                      ? specialButton.div
                      : commonButton.div
                  }`}
                >
                  <button
                    onClick={() => {
                      setAllOrSingleTeamResult("herald");
                    }}
                    className={`${
                      allOrSingleTeamResult === "herald"
                        ? specialButton.button
                        : commonButton.button
                    }`}
                  >
                    Herald
                  </button>
                </div>
              </div>
              <hr className="border" />
              {/* table */}
              <div className="flex flex-col h-5/6 items-center pt-5 gap-5 overflow-y-auto">
                {/* result List */}
                {resultedCandidates.length > 0 ? (
                  allOrSingleTeam === "all" ? (
                    allCandidatesResult?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-1/2 text-md items-center pl-2 gap-3 justify-start">
                          <p>{candidate?.position?.name ? candidate?.position?.name : 'Nil'}</p>
                          <p>{candidate?.programme?.programCode}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/2 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                          <p>{candidate?.grade?.name ? candidate?.grade?.name : `Nil`}</p>
                          <p>{candidate?.point}pts</p>
                        </div>
                      </div>
                    ))
                  ) : allOrSingleTeam === "chronicle" ? (
                    chronicleCandidatesResult?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-1/2 text-md items-center pl-2 gap-3 justify-start">
                          <p>{candidate?.position?.name ? candidate?.position?.name : 'Nil'}</p>
                          <p>{candidate?.programme?.programCode}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/2 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                          <p>{candidate?.grade?.name ? candidate?.grade?.name : `Nil`}</p>
                          <p>{candidate?.point}pts</p>
                        </div>
                      </div>
                    ))
                  ) : allOrSingleTeam === "gazette" ? (
                    gazetteCandidatesResult?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-1/2 text-md items-center pl-2 gap-3 justify-start">
                          <p>{candidate?.position?.name ? candidate?.position?.name : 'Nil'}</p>
                          <p>{candidate?.programme?.programCode}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/2 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                          <p>{candidate?.grade?.name ? candidate?.grade?.name : `Nil`}</p>
                          <p>{candidate?.point}pts</p>
                        </div>
                      </div>
                    ))
                  ) : allOrSingleTeam === "herald" ? (
                    heraldCandidatesResult?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-1/2 text-md items-center pl-2 gap-3 justify-start">
                          <p>{candidate?.position?.name ? candidate?.position?.name : 'Nil'}</p>
                          <p>{candidate?.programme?.programCode}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/2 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                          <p>{candidate?.grade?.name ? candidate?.grade?.name : `Nil`}</p>
                          <p>{candidate?.point}pts</p>
                        </div>
                      </div>
                    ))
                  ) : allOrSingleTeam === "tribune" ? (
                    tribuneCandidatesResult?.map((candidate) => (
                      <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                        <div className="flex h-8 w-1/2 text-md items-center pl-2 gap-3 justify-start">
                          <p>{candidate?.position?.name ? candidate?.position?.name : 'Nil'}</p>
                          <p>{candidate?.programme?.programCode}</p>
                          <p>{candidate?.candidate?.name}</p>
                        </div>
                        <div className="flex h-8 w-1/2 text-md items-center pr-2 gap-3 justify-end">
                          <p>{candidate?.candidate?.team?.name}</p>
                          <p>{candidate?.grade?.name ? candidate?.grade?.name : `Nil`}</p>
                          <p>{candidate?.point}pts</p>
                        </div>
                      </div>
                    ))
                  ) : null
                ) : (
                  <p>No Results Found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
