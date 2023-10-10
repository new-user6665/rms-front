"use client";
import { Team } from "@/gql/graphql";
import { useEffect, useState } from "react";

interface SidebarProps {
  teams: Team[]
}
export default function OverallResults(props: SidebarProps) {
  const [sortedTeams, setSortedTeams] = useState<Team[]>(props.teams)
  const [chunks, setChunks] = useState<Team[][]>([])

  // change the array to chunks of 2 * 2

  useEffect(() => {
    console.log(props.teams);
    // sort )

    const sorted = props.teams.sort((a, b) => {
      return (b?.totalPoint as number - (a?.totalPoint as number))
    })
    setSortedTeams(sorted)

    // delete the forth element from the array
    sorted.splice(3, 1)

    // change the sorted to chunks of 2 * 2
    const chunked = []
    for (let i = 0; i < sorted.length; i += 2) {
      chunked.push(sorted.slice(i, i + 2))
    }
    setChunks(chunked)

  }, [])
  return (
    <div className="h-full">
      <div className="w-full flex justify-start items-center flex-col pt-2">
        <h1 className="text-xl bigphone:text-4xl font-bold text-primary">
          Overall Results
        </h1>
      </div>
      <div className="w-full h-[80%] flex flex-col mt-5">
        {
          chunks.length > 0 ?
            chunks.map((chunk, index) => {
              return (
                <div className="flex h-1/2 w-full">
                  <div className="h-full w-1/2">
                    <div className="w-full h-1/4 flex">
                      <div className="h-full w-1/3 px-2 flex">
                        <h1 className="text-3xl font-bold">#0{index == 0 ? index + 1 : index + 2}</h1>
                      </div>
                      <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                        <div className="flex items-center gap-2">
                          <span className="bg-green-400 h-1 w-1 rounded-full" />
                          <h1 className="text-xs">Arts : {chunk[0].totalPoint}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-400 h-1 w-1 rounded-full" />
                          <h1 className="text-xs">Sports : {chunk[0].totalSportsPoint}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-3/4 px-2 pt-3">
                      <h1 className="text-7xl font-bold">{chunk[0].totalPoint}</h1>
                      <div style={{ background: `${chunk[0].color}` }} className="bg-black h-1/4 rounded-lg flex justify-center items-center">
                        <h1 className="text-white font-semibold text-2xl">{chunk[0].name}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-1/2">
                    <div className="w-full h-1/4 flex">
                      <div className="h-full w-1/3 px-2 flex">
                        <h1 className="text-3xl font-bold">#0{index == 0 ? index + 2 : index + 3}</h1>
                      </div>
                      <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                        <div className="flex items-center gap-2">
                          <span className="bg-green-400 h-1 w-1 rounded-full" />
                          <h1 className="text-xs">Arts : {chunk[0].totalPoint}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-blue-400 h-1 w-1 rounded-full" />
                          <h1 className="text-xs">Sports : {chunk[0].totalSportsPoint}</h1>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-3/4 px-2 pt-3">
                      <h1 className="text-7xl font-bold">{chunk[1]?.totalPoint}</h1>
                      <div style={{ background: `${chunk[1]?.color}` }} className=" bg-black h-1/4 rounded-lg flex justify-center items-center">
                        <h1 className="text-white font-semibold text-2xl">{chunk[1]?.name}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            :
            (<> <div className="flex h-1/2 w-full">
              <div className="h-full w-1/2">
                <div className="w-full h-1/4 flex">
                  <div className="h-full w-1/3 px-2 flex">
                    <h1 className="text-3xl font-bold">#01</h1>
                  </div>
                  <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Arts : ###</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Sports : ###</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/4 px-2 pt-3">
                  <h1 className="text-7xl font-bold">###</h1>
                  <div className="bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                    <h1 className="text-white font-semibold text-2xl">###</h1>
                  </div>
                </div>
              </div>
              <div className="h-full w-1/2">
                <div className="w-full h-1/4 flex">
                  <div className="h-full w-1/3 px-2 flex">
                    <h1 className="text-3xl font-bold">#02</h1>
                  </div>
                  <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Arts : ###</h1>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-400 h-1 w-1 rounded-full" />
                      <h1 className="text-xs">Sports : ###</h1>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/4 px-2 pt-3">
                  <h1 className="text-7xl font-bold">###</h1>
                  <div className=" bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                    <h1 className="text-white font-semibold text-2xl">###</h1>
                  </div>
                </div>
              </div>
            </div>
              <div className="flex h-1/2 w-full">
                <div className="h-full w-1/2">
                  <div className="w-full h-1/4 flex">
                    <div className="h-full w-1/3 px-2 flex">
                      <h1 className="text-3xl font-bold">#03</h1>
                    </div>
                    <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                      <div className="flex items-center gap-2">
                        <span className="bg-green-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">Arts : ###</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">Sports : ###</h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-3/4 px-2 pt-3">
                    <h1 className="text-7xl font-bold">###</h1>
                    <div className="bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                      <h1 className="text-white font-semibold text-2xl">###</h1>
                    </div>
                  </div>
                </div>
                <div className="h-full w-1/2">
                  <div className="w-full h-1/4 flex">
                    <div className="h-full w-1/3 px-2 flex">
                      <h1 className="text-3xl font-bold">#04</h1>
                    </div>
                    <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                      <div className="flex items-center gap-2">
                        <span className="bg-green-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">Arts : ###</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-400 h-1 w-1 rounded-full" />
                        <h1 className="text-xs">Sports : ###</h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-3/4 px-2 pt-3">
                    <h1 className="text-7xl font-bold">###</h1>
                    <div className=" bg-blue-400 h-1/4 rounded-lg flex justify-center items-center">
                      <h1 className="text-white font-semibold text-2xl">###</h1>
                    </div>
                  </div>
                </div>
              </div> </>)
        }

      </div>
    </div>
  );
}
