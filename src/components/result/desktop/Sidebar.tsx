export default function DesktopSidebar(){
    return(
        <div className="h-full 2xl:w-80 2xl:min-w-[20rem] w-80 min-w-[21rem] bg-primary flex flex-col justify-center gap-3 pl-8">
          {/* title */}
          <h1 className="text-white text-3xl font-semibold leading-none">
            Results <br />
            Page
          </h1>
          {/* heading */}
          <div className="flex justify-start gap-5">
            <h2 className="text-white font-semibold">Live Results</h2>
            <button className="h-6 bg-white border rounded-xl flex items-center">
              <p className="px-2 font-medium">All</p>
            </button>
            <button className="h-6 border rounded-xl flex items-center">
              <p className="px-2 text-sm text-white">Filter by</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
                height={24}
                viewBox="0 -960 960 960"
                width={24}
              >
                <path d="M480-360 280-560h400L480-360Z" />
              </svg>
            </button>
          </div>
          {/* result */}
          <div className="w-full h-[40rem]">
            {/* #01 */}
            <div className="flex justfy-between h-1/4 w-full">
              <div className="h-full w-3/5 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-2xl">#01</h1>
                <h1 className="text-5xl">6217</h1>
                <div className="h-8 bg-green-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white">Team Tribune</h1>
                </div>
              </div>
              <div className="h-full w-2/5 flex flex-col items-start justify-center px-3">
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-green-400 rounded-full" />
                  <p className="text-xs text-white">Arts : 320</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-blue-400 rounded-full" />
                  <p className="text-xs text-white">Sports : 320</p>
                </div>
              </div>
            </div>
            {/* #02 */}
            <div className="flex justfy-between h-1/4 w-full">
              <div className="h-full w-3/5 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-2xl">#01</h1>
                <h1 className="text-5xl">6217</h1>
                <div className="h-8 bg-red-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white">Team Chronicle</h1>
                </div>
              </div>
              <div className="h-full w-2/5 flex flex-col items-start justify-center px-3">
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-green-400 rounded-full" />
                  <p className="text-xs text-white">Arts : 320</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-blue-400 rounded-full" />
                  <p className="text-xs text-white">Sports : 320</p>
                </div>
              </div>
            </div>
            {/* #03 */}
            <div className="flex justfy-between h-1/4 w-full">
              <div className="h-full w-3/5 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-2xl">#01</h1>
                <h1 className="text-5xl">6217</h1>
                <div className="h-8 bg-blue-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white">Team Gazette</h1>
                </div>
              </div>
              <div className="h-full w-2/5 flex flex-col items-start justify-center px-3">
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-green-400 rounded-full" />
                  <p className="text-xs text-white">Arts : 320</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-blue-400 rounded-full" />
                  <p className="text-xs text-white">Sports : 320</p>
                </div>
              </div>
            </div>
            {/* #04 */}
            <div className="flex justfy-between h-1/4 w-full">
              <div className="h-full w-3/5 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-2xl">#01</h1>
                <h1 className="text-5xl">6217</h1>
                <div className="h-8 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white">Team Herald</h1>
                </div>
              </div>
              <div className="h-full w-2/5 flex flex-col items-start justify-center px-3">
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-green-400 rounded-full" />
                  <p className="text-xs text-white">Arts : 320</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-blue-400 rounded-full" />
                  <p className="text-xs text-white">Sports : 320</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}