import Profile from "@/components/candidate/Profile";

export default async function page({
  params,
}: {
  params: { chestNo: string };
}) {
  return (
    <main className="h-screen w-screen bg-accent overflow-hidden">
      {/* Mobile view */}
      <div className="h-screen w-screen font-sans flex flex-col gap-4 lg:hidden pt-5 bg-primary overflow-hidden">
        {/* Page Name */}
        <div className="h-[1%] w-full flex items-star">
          <h1 className="text-sm font-semibold px-6 text-white">Result Page</h1>
        </div>
        {/* heading */}
        <div className="h-2/12 w-4/5 flex items-center pt-12 justify-center">
          <h1 className="text-3xl font-semibold px-6 text-white leading-none">
            #Current Status
          </h1>
        </div>
        {/* judge Card */}
        <div className="bg-white h-[86%] bigphone:h-[89.5%] w-full rounded-t-large overflow-hidden">
          {/* main */}
          <div className="grid gap-5 overflow-y-auto h-[99%] pt-[3.25rem] overflow-x-hidden">
            {/* Overall Results and toppers */}
            <div className="h-[30rem] mx-auto min-h-14 min-w-[80%] w-[96%] flex gap-2 flex-col relative">
              {/* slider button */}
              {/* right */}
              <button className="absolute right-[.1rem] bg-gray-100 rounded-full opacity-25 border-black border top-[50%] z-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={36}
                  viewBox="0 -960 960 960"
                  width={36}
                  className="p-2"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </button>
              {/* left */}
              <button className="absolute left-0 bg-gray-100 rounded-full opacity-25 border-black border top-[50%] z-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={36}
                  viewBox="0 -960 960 960"
                  width={36}
                  className="p-2 rotate-[180deg]"
                >
                  <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                </svg>
              </button>
              {/* Results */}
              {/* <div class="h-full">
                <div
                  class="w-full flex justify-start items-center flex-col pt-2"
                >
                  <h1 class="text-xl bigphone:text-4xl font-bold text-primary">Live Results</h1>
                  <div class="flex items-center gap-5">
                    <button
                      class="h-6 bigphone:h-8 bg-primary border rounded-xl flex items-center"
                    >
                      <h1 class="text-xs bigphone:text-base px-2 text-white font-bold">All</h1>
                    </button>
                    <button class="h-6 bigphone:h-8 border rounded-xl flex items-center">
                      <div class="flex justify-center px-2 items-center">
                        <h1 class="text-xs bigphone:text-base text-primary font-bold">Filter by</h1>
                        <div class="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="fill-primary"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                          >
                            <path d="M480-360 280-560h400L480-360Z" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div class="w-full h-[80%] flex flex-col mt-5">
                  <div class="flex h-1/2 w-full">
                    <div class="h-full w-1/2">
                      <div class="w-full h-1/4 flex">
                        <div class="h-full w-1/3 px-2 flex">
                          <h1 class="text-3xl font-bold">#01</h1>
                        </div>
                        <div
                          class="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center"
                        >
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-green-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-blue-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                        </div>
                      </div>
                      <div class="w-full h-3/4 px-2 pt-3">
                        <h1 class="text-7xl font-bold">6271</h1>
                        <div
                          class="bg-red-500 h-1/4 rounded-lg flex justify-center items-center"
                        >
                          <h1 class="text-white font-semibold text-2xl">
                            Chronicle
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div class="h-full w-1/2">
                      <div class="w-full h-1/4 flex">
                        <div class="h-full w-1/3 px-2 flex">
                          <h1 class="text-3xl font-bold">#01</h1>
                        </div>
                        <div
                          class="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center"
                        >
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-green-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-blue-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                        </div>
                      </div>
                      <div class="w-full h-3/4 px-2 pt-3">
                        <h1 class="text-7xl font-bold">6271</h1>
                        <div
                          class="bg-blue-500 h-1/4 rounded-lg flex justify-center items-center"
                        >
                          <h1 class="text-white font-semibold text-2xl">
                            Gazette
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex h-1/2">
                    <div class="h-full w-1/2">
                      <div class="w-full h-1/4 flex">
                        <div class="h-full w-1/3 px-2 flex">
                          <h1 class="text-3xl font-bold">#01</h1>
                        </div>
                        <div
                          class="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center"
                        >
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-green-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-blue-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                        </div>
                      </div>
                      <div class="w-full h-3/4 px-2 pt-3">
                        <h1 class="text-7xl font-bold">6271</h1>
                        <div
                          class="bg-yellow-500 h-1/4 rounded-lg flex justify-center items-center"
                        >
                          <h1 class="text-white font-semibold text-2xl">
                            Herald
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div class="h-full w-1/2">
                      <div class="w-full h-1/4 flex">
                        <div class="h-full w-1/3 px-2 flex">
                          <h1 class="text-3xl font-bold">#01</h1>
                        </div>
                        <div
                          class="h-full w-2/3 flex flex-col items-end px-2 leading-tight justify-center"
                        >
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-green-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                          <div class="flex items-center gap-2">
                            <span
                              class="bg-blue-400 h-1 w-1 rounded-full"
                            ></span>
                            <h1 class="text-xs">Arts : 1234</h1>
                          </div>
                        </div>
                      </div>
                      <div class="w-full h-3/4 px-2 pt-3">
                        <h1 class="text-7xl font-bold">6271</h1>
                        <div
                          class="bg-green-500 h-1/4 rounded-lg flex justify-center items-center"
                        >
                          <h1 class="text-white font-semibold text-2xl">
                            Tribune
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* toppers */}
              <div className="h-full w-full overflow-hidden">
                <div className="h-1/6 w-full  flex items-center justify-between px-2 bigphone:px-10">
                  <h1 className="text-2xl bigphone:text-4xl font-bold">
                    #Leading Now
                  </h1>
                  <div className="flex">
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
                </div>
                <div className="w-[98%] h-4/5 bigphone:h-full mx-auto overflow-x-auto whitespace-nowrap overflow-y-hidden">
                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />
                    <div className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]">
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>
                    <div className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]">
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>
                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm ">Senior Secondary</p>
                    <p className="text-center text-sm ">Team Tribune</p>
                  </div>
                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />
                    <div className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]">
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>
                    <div className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]">
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>
                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm ">Senior Secondary</p>
                    <p className="text-center text-sm ">Team Tribune</p>
                  </div>
                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />
                    <div className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]">
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>
                    <div className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]">
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>
                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm ">Senior Secondary</p>
                    <p className="text-center text-sm ">Team Tribune</p>
                  </div>
                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />
                    <div className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]">
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>
                    <div className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]">
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>
                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm ">Senior Secondary</p>
                    <p className="text-center text-sm ">Team Tribune</p>
                  </div>
                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />
                    <div className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]">
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>
                    <div className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]">
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>
                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm ">Senior Secondary</p>
                    <p className="text-center text-sm ">Team Tribune</p>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            {/* Programs and Results */}
            <div className="h-80 bigphone:h-[30rem] mx-auto min-h-14 min-w-[90%] w-[90%] flex gap-2">
              {/* programs */}
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
              {/* Results */}
              {/* <div
                class="h-full w-full bg-gray-100 rounded-3xl overflow-hidden"
              >
                <div
                  class="h-1/5 w-full px-5 flex items-center leading-tight justify-between"
                >
                  <h1 class="text-2xl bigphone:text-4xl font-bold">Results</h1>
                  
                    <button class="p-2 text-white font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary h-10 w-10 bigphone:h-14 bigphone:w-14" viewBox="0 -960 960 960"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    </button>
                </div>

                <hr class="border-1 border-primary" />

                <div class="h-10 w-full flex gap-2 items-center px-2">
                  <button
                    class="bg-primary h-8 w-16 border border-primary rounded-xl flex items-center justify-center"
                  >
                    <p class="text-white font-medium text-xs">All</p>
                  </button>

                  <button
                    class="h-8 w-36 justify-center border border-primary rounded-xl flex items-center"
                  >
                    <p class="text-xs text-primary">Filter by</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-primary"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M480-360 280-560h400L480-360Z" />
                    </svg>
                  </button>

                  <form
                    class="w-full rounded-xl overflow-hidden h-8 border border-primary flex"
                  >
                    <div class="relative flex items-center">
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <svg
                          class="w-2 h-2 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="default-search"
                        class="block w-full h-8 pl-10 text-xs text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for programs..."
                      />
                    </div>
                  </form>
                </div>

                <hr class="border-1 border-primary" />

                <div class="w-full h-[65%] p-2 overflow-y-auto">

                  <div
                    class="flex h-14 w-full bg-accent rounded-3xl items-center justify-between pr-2 pl-9 mt-2 relative"
                  >
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="" class="h-8 rounded-full absolute left-0">

                    <div class="flex gap-2">
                      <p class="font-semibold text-[10px] bigphone:text-xs">1st</p>
                      <p class=" text-[10px] bigphone:text-xs">S1234</p>
                      <p class="text-[10px] bigphone:text-xs">Muahammed Midlaj Ms</p>
                    </div>
                    <div class="flex gap-2">
                      <p class="text-[10px] bigphone:text-xs">Chronicle</p>

                      <p class="text-[10px] bigphone:text-xs">A</p>
                    </div>

                  </div>

                  <div
                    class="flex h-10 w-full bg-accent rounded-3xl items-center justify-between pr-2 pl-9 mt-2 relative"
                  >
                  <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="" class="h-8 rounded-full absolute left-0">

                    <div class="flex gap-2">
                      <p class="font-semibold text-[10px] bigphone:text-xs">1st</p>
                      <p class=" text-[10px] bigphone:text-xs">S1234</p>
                      <p class="text-[10px] bigphone:text-xs">Muahammed Midlaj Ms</p>
                    </div>
                    <div class="flex gap-2">
                      <p class="text-[10px] bigphone:text-xs">Chronicle</p>

                      <p class="text-[10px] bigphone:text-xs">A</p>
                    </div>

                  </div>
                </div>
              </div> */}
            </div>
            {/* Quick Overview */}
            <div className="h-44 bigphone:h-72 mx-auto min-h-14 min-w-[90%] w-[90%] flex bg-gray-100 rounded-2xl flex-col overflow-hidden">
              <div className="h-1/4 w-full  flex items-end justify-center">
                <h1 className="text-2xl bigphone:text-4xl font-semibold">
                  Quick Overview
                </h1>
              </div>
              <div className="h-3/4 w-full  flex justify-between px-2 gap-2 pt-3">
                <div className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-center leading-tight">
                  <h1 className="text-5xl bigphone:text-8xl font-bold">352</h1>
                  <h1 className="text-xs bigphone:text-lg">
                    Results Published
                  </h1>
                </div>
                <div className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-center leading-tight">
                  <h1 className="text-5xl bigphone:text-8xl font-bold">352</h1>
                  <h1 className="text-xs bigphone:text-lg">
                    Results Published
                  </h1>
                </div>
                <div className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-center leading-tight">
                  <h1 className="text-5xl bigphone:text-8xl font-bold">352</h1>
                  <h1 className="text-xs bigphone:text-lg">
                    Results Published
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop view */}
      <div className="h-screen w-screen bg-accent hidden lg:flex">
        {/* sidebar */}
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
        {/* main content */}
        <div
          className="h-full w-full bg-cover pl-10 pr-10 2xl:pr-80 pb-6 flex flex-col gap-2 2xl:gap-8"
          style={{ backgroundImage: 'url("hi.jpg")' }}
        >
          {/* title */}
          <div className="h-24 w-full flex items-end">
            <h1 className="text-5xl font-bold">#Current Status</h1>
          </div>
          {/* fist row */}
          <div className="h-1/2 w-full flex gap-10 pr-10">
            {/* first card first row */}
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
            {/* second card first row */}
            <div className="h-full w-[36%] 2xl:w-[50%] rounded-3xl bg-[#F7F7F7]">
              {/* heading */}
              <div className="h-12">
                <h1 className="text-3xl font-semibold px-5">Programs</h1>
                <hr className="border" />
              </div>
              {/* sort buttons */}
              <div className="flex items-center gap-4 pl-5 pr-10 h-8">
                {/* All */}
                <button className="bg-primary h-6 border border-primary rounded-xl flex items-center justify-center">
                  <p className="text-white px-2 font-medium text-sm">All</p>
                </button>
                {/* Tribune */}
                <button className="h-6 border border-primary rounded-xl flex items-center justify-center">
                  <p className="text-primary px-2 font-medium text-sm">
                    Tribune
                  </p>
                </button>
                {/* Chronicle */}
                <button className="h-6 border border-primary rounded-xl flex items-center justify-center">
                  <p className="text-primary px-2 font-medium text-sm">
                    Chronicle
                  </p>
                </button>
                {/* Gazette */}
                <button className="h-6 border border-primary rounded-xl flex items-center justify-center">
                  <p className="text-primary px-2 font-medium text-sm">
                    Gazette
                  </p>
                </button>
                {/* Herald */}
                <button className="h-6 border border-primary rounded-xl flex items-center justify-center">
                  <p className="text-primary px-2 font-medium text-sm">Herald</p>
                </button>
                {/* The End */}
              </div>
              <hr className="border" />
              {/* List of programs */}
              <div className="h-[75%] min-h-[75%] overflow-y-auto flex flex-col gap-2 items-center px-5 mt-3">
                {/* list 1 */}
                <div className="flex w-full items-center h-14">
                  <img
                    src="https://riaindia.co.in/wp-content/uploads/2016/01/tutor-8.jpg"
                    alt=""
                    className="h-12 w-12 rounded-full absolute border -ml-4"
                  />
                  <div className="flex items-center h-14 min-h-[3.5rem] w-full text-xs bg-[#F6DEFF] rounded-xl justify-around pl-5">
                    <p>1st</p>
                    <p>S123</p>
                    <p>Muahammed Arshad</p>
                    <p>Chronicle</p>
                    <p>A</p>
                  </div>
                </div>
              </div>
              {/* end of lists */}
            </div>
          </div>
          {/* second row */}
          <div className="h-[30%] 2xl:h-[26%] w-full flex gap-10 pr-10">
            {/* first card second row */}
            <div className="2xl:w-[40%] w-[32%] rounded-3xl bg-[#F7F7F7] px-5 overflow-hidden">
              {/* title */}
              <div className="w-full h-[20%] flex items-center justify-between">
                <h1 className="text-xl font-semibold leading-none">
                  #Leading Now
                </h1>
                <div className="flex gap-2 h-full items-center">
                  <button className="h-6 bg-primary border border-primary rounded-xl flex items-center">
                    <p className="px-2 font-medium text-white text-sm">All</p>
                  </button>
                  <button className="h-6 border border-primary rounded-xl flex items-center">
                    <p className="px-2 text -sm text-primary">Filter by</p>
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
                </div>
              </div>
              {/* Photos */}
              <div className="h-[80%] w-full overflow-x-scroll whitespace-nowrap overflow-y-hidden">
                {/* 1st */}
                <div className="h-full w-44 inline-block">
                  <div className="relative left-1/4 top-[1%]">
                    <img
                      className="w-28 h-28 rounded-full border-primary border"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                    />
                    <span className="top-0 left-[4.9rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                      <h1 className="px-1">#1</h1>
                    </span>
                    <span className="top-[6rem] left-[1.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                      <h1 className="px-1">#SMJ123</h1>
                    </span>
                    <p className="absolute text-xs font-semibold left-[-.3rem] top-[7.3rem]">
                      Muhammed Midlaj Av
                    </p>
                    <p className="absolute text-xs left-[.5rem] top-[8.3rem]">
                      Senior Secondary
                    </p>
                    <p className="absolute text-[10px] left-[1.3rem] top-[9.2rem]">
                      Team Chronicle
                    </p>
                  </div>
                </div>
                {/* 2nd */}
                <div className="h-full w-52 inline-block">
                  <div className="relative left-1/4 top-[1%]">
                    <img
                      className="w-28 h-28 rounded-full border-primary border"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                    />
                    <span className="top-0 left-[4.9rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                      <h1 className="px-1">#2</h1>
                    </span>
                    <span className="top-[6rem] left-[1.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                      <h1 className="px-1">#SMJ123</h1>
                    </span>
                    <p className="absolute text-xs font-semibold left-[-.3rem] top-[7.3rem]">
                      Muhammed Midlaj Av
                    </p>
                    <p className="absolute text-xs left-[.5rem] top-[8.3rem]">
                      Senior Secondary
                    </p>
                    <p className="absolute text-[10px] left-[1.3rem] top-[9.2rem]">
                      Team Chronicle
                    </p>
                  </div>
                </div>
                {/* 3rd */}
                <div className="h-full w-52 inline-block">
                  <div className="relative left-1/4 top-[1%]">
                    <img
                      className="w-28 h-28 rounded-full border-primary border"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                    />
                    <span className="top-0 left-[4.9rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                      <h1 className="px-1">#3</h1>
                    </span>
                    <span className="top-[6rem] left-[1.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                      <h1 className="px-1">#SMJ123</h1>
                    </span>
                    <p className="absolute text-xs font-semibold left-[-.3rem] top-[7.3rem]">
                      Muhammed Midlaj Av
                    </p>
                    <p className="absolute text-xs left-[.5rem] top-[8.3rem]">
                      Senior Secondary
                    </p>
                    <p className="absolute text-[10px] left-[1.3rem] top-[9.2rem]">
                      Team Chronicle
                    </p>
                  </div>
                </div>
                {/* 4th */}
                <div className="h-full w-52 inline-block">
                  <div className="relative left-1/4 top-[1%]">
                    <img
                      className="w-28 h-28 rounded-full border-primary border"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                    />
                    <span className="top-0 left-[4.9rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                      <h1 className="px-1">#4</h1>
                    </span>
                    <span className="top-[6rem] left-[1.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                      <h1 className="px-1">#SMJ123</h1>
                    </span>
                    <p className="absolute text-xs font-semibold left-[-.3rem] top-[7.3rem]">
                      Muhammed Midlaj Av
                    </p>
                    <p className="absolute text-xs left-[.5rem] top-[8.3rem]">
                      Senior Secondary
                    </p>
                    <p className="absolute text-[10px] left-[1.3rem] top-[9.2rem]">
                      Team Chronicle
                    </p>
                  </div>
                </div>
                {/* 5th */}
                <div className="h-full w-52 inline-block">
                  <div className="relative left-1/4 top-[1%]">
                    <img
                      className="w-28 h-28 rounded-full border-primary border"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                    />
                    <span className="top-0 left-[4.9rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                      <h1 className="px-1">#5</h1>
                    </span>
                    <span className="top-[6rem] left-[1.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                      <h1 className="px-1">#SMJ123</h1>
                    </span>
                    <p className="absolute text-xs font-semibold left-[-.3rem] top-[7.3rem]">
                      Muhammed Midlaj Av
                    </p>
                    <p className="absolute text-xs left-[.5rem] top-[8.3rem]">
                      Senior Secondary
                    </p>
                    <p className="absolute text-[10px] left-[1.3rem] top-[9.2rem]">
                      Team Chronicle
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* second card second row */}
            <div className="h-full 2xl:w-[60%] w-[40%] rounded-3xl bg-[#F7F7F7] px-5">
              {/* title */}
              <div className="w-full h-[20%] flex items-center justify-center">
                <h1 className="text-xl font-bold leading-none">Leading Now</h1>
              </div>
              {/* small cards */}
              <div className="h-[80%] w-full flex gap-5 items-center">
                {/* small card1 */}
                <div className="h-4/6 w-1/3 bg-accent rounded-2xl flex flex-col items-center leading-tight">
                  <h1 className="text-[4rem] font-bold">123</h1>
                  <h1 className="text-sm">Result Published</h1>
                </div>
                {/* small card2 */}
                <div className="h-4/6 w-1/3 bg-accent rounded-2xl flex flex-col items-center leading-tight">
                  <h1 className="text-[4rem] font-bold">123</h1>
                  <h1 className="text-sm">Result Published</h1>
                </div>
                {/* small card3 */}
                <div className="h-4/6 w-1/3 bg-accent rounded-2xl flex flex-col items-center leading-tight">
                  <h1 className="text-[4rem] font-bold">123</h1>
                  <h1 className="text-sm">Result Published</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
