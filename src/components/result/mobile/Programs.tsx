export default function Programs(){
    return(
        <div className="h-full w-full bg-gray-100 rounded-3xl overflow-hidden">
                <div className="h-1/5 w-full px-5 flex flex-col justify-end leading-tight">
                  <h1 className="text-2xl bigphone:text-4xl font-bold">
                    Programs
                  </h1>
                  <h1 className="text-xs bigphone:text-sm">Tap to view</h1>
                </div>
                <hr className="border-1 border-primary pb-2" />
                <div className="h-6 bigphone:h-10 w-full  flex gap-2 items-center px-2">
                  <button className="bg-primary h-6 bigphone:h-8 w-16 border border-primary rounded-xl flex items-center justify-center">
                    <p className="text-white font-medium text-xs">All</p>
                  </button>
                  <button className="h-6 bigphone:h-8 w-36 justify-center border border-primary rounded-xl flex items-center">
                    <p className="text-xs text-primary">Filter by</p>
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
                  <form className="w-full rounded-xl overflow-hidden h-6 bigphone:h-8 border border-primary flex">
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
                        className="block w-full h-6 bigphone:h-8 pl-10 text-xs text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for programs..."
                      />
                    </div>
                  </form>
                </div>
                <hr className="border-1 border-primary mt-2" />
                <div className="w-full h-[65%]  p-2 overflow-y-auto">
                  <div className="flex h-14 w-full bg-accent rounded-3xl items-center justify-between px-2 mt-2">
                    <div className="flex gap-2">
                      <p className="font-semibold text-xs bigphone:text-sm">
                        S12JKH
                      </p>
                      <p className="text-xs bigphone:text-sm">
                        Balloon Breaking MLM urdu
                      </p>
                    </div>
                    <p className=" text-xs bigphone:text-sm">Thanawiyya URD</p>
                  </div>
                </div>
              </div>
    )
}