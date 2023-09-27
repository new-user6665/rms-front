export default function FirstRowFirstCard(){
    return(
        <div className="h-full w-[36%] 2xl:w-[50%] rounded-3xl bg-[#F7F7F7]">
              {/* heading */}
              <div className="h-12">
                <h1 className="text-3xl font-semibold px-5">Programs</h1>
                <hr className="border" />
              </div>
              {/* sort buttons */}
              <div className="flex items-center gap-4 px-5 h-8">
                {/* All */}
                <button className="bg-primary h-6 w-16 border border-primary rounded-xl flex items-center justify-center">
                  <p className="text-white font-medium text-sm">All</p>
                </button>
                {/* Filter by */}
                <button className="h-6 w-36 justify-center border border-primary rounded-xl flex items-center">
                  <p className="text-sm text-primary">Filter by</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-primary"
                    height={24}
                    viewBox="0 -960 960 960"
                    width={24}
                  >
                    <path d="M480-360 280-560h400L480-360Z" />
                  </svg>
                </button>
                {/* Search */}
                <form className="w-full rounded-xl overflow-hidden h-6 border border-primary flex">
                  <div className="relative flex items-center w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-2 h-2 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full h-6 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for programs..."
                      required
                    />
                  </div>
                </form>
              </div>
              <hr className="border" />
              {/* List of programs */}
              <div className="h-[75%] min-h-[75%] overflow-y-auto flex flex-col gap-2 items-center px-3 mt-3">
                {/* list 1 */}
                <div className="flex items-center h-14 min-h-[3.5rem] w-full text-xs bg-[#F6DEFF] rounded-xl justify-around px-3">
                  <p className="font-bold">S12JKH</p>
                  <p>Balloon Breaking MLM Urdu</p>
                  <p className="font-bold">Thanawiyya Urdu</p>
                </div>
                {/* list 2 */}
                <div className="flex items-center h-14 min-h-[3.5rem] w-full text-xs bg-[#F6DEFF] rounded-xl justify-around px-3">
                  <p className="font-bold">S12JKH</p>
                  <p>Balloon Breaking MLM Urdu</p>
                  <p className="font-bold">Thanawiyya Urdu</p>
                </div>
              </div>
              {/* end of lists */}
            </div>
    )
}