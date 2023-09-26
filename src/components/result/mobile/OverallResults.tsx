export default function OverallResults() {
  return (
    <div className="h-full">
      <div className="w-full flex justify-start items-center flex-col pt-2">
        <h1 className="text-xl bigphone:text-4xl font-bold text-primary">
          Live Results
        </h1>
        <div className="flex items-center gap-5">
          <button className="h-6 bigphone:h-8 bg-primary border rounded-xl flex items-center">
            <h1 className="text-xs bigphone:text-base px-2 text-white font-bold">
              All
            </h1>
          </button>
          <button className="h-6 bigphone:h-8 border rounded-xl flex items-center">
            <div className="flex justify-center px-2 items-center">
              <h1 className="text-xs bigphone:text-base text-primary font-bold">
                Filter by
              </h1>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary"
                  height={24}
                  viewBox="0 -960 960 960"
                  width={24}
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full h-[80%] flex flex-col mt-5">
        <div className="flex h-1/2 w-full">
          <div className="h-full w-1/2">
            <div className="w-full h-1/4 flex">
              <div className="h-full w-1/3 px-2 flex">
                <h1 className="text-3xl font-bold">#01</h1>
              </div>
              <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                <div className="flex items-center gap-2">
                  <span className="bg-green-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-3/4 px-2 pt-3">
              <h1 className="text-7xl font-bold">6271</h1>
              <div className="bg-red-500 h-1/4 rounded-lg flex justify-center items-center">
                <h1 className="text-white font-semibold text-2xl">Chronicle</h1>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2">
            <div className="w-full h-1/4 flex">
              <div className="h-full w-1/3 px-2 flex">
                <h1 className="text-3xl font-bold">#01</h1>
              </div>
              <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                <div className="flex items-center gap-2">
                  <span className="bg-green-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-3/4 px-2 pt-3">
              <h1 className="text-7xl font-bold">6271</h1>
              <div className="bg-blue-500 h-1/4 rounded-lg flex justify-center items-center">
                <h1 className="text-white font-semibold text-2xl">Gazette</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-1/2">
          <div className="h-full w-1/2">
            <div className="w-full h-1/4 flex">
              <div className="h-full w-1/3 px-2 flex">
                <h1 className="text-3xl font-bold">#01</h1>
              </div>
              <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                <div className="flex items-center gap-2">
                  <span className="bg-green-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-3/4 px-2 pt-3">
              <h1 className="text-7xl font-bold">6271</h1>
              <div className="bg-yellow-500 h-1/4 rounded-lg flex justify-center items-center">
                <h1 className="text-white font-semibold text-2xl">Herald</h1>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2">
            <div className="w-full h-1/4 flex">
              <div className="h-full w-1/3 px-2 flex">
                <h1 className="text-3xl font-bold">#01</h1>
              </div>
              <div className="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center">
                <div className="flex items-center gap-2">
                  <span className="bg-green-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-400 h-1 w-1 rounded-full" />
                  <h1 className="text-xs">Arts : 1234</h1>
                </div>
              </div>
            </div>
            <div className="w-full h-3/4 px-2 pt-3">
              <h1 className="text-7xl font-bold">6271</h1>
              <div className="bg-green-500 h-1/4 rounded-lg flex justify-center items-center">
                <h1 className="text-white font-semibold text-2xl">Tribune</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
