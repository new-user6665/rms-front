import FirstRowFirstCard from "@/components/result/desktop/FrFc";
import FirstRowSecondCard from "@/components/result/desktop/FrSc";
import DesktopSidebar from "@/components/result/desktop/Sidebar";
import SecondRowFirstCard from "@/components/result/desktop/SrFc";
import SecondRowSecondCard from "@/components/result/desktop/SrSc";
import OverallResults from "@/components/result/mobile/OverallResults";
import Programs from "@/components/result/mobile/Programs";
import QuickOverview from "@/components/result/mobile/QuickOverview";
import Results from "@/components/result/mobile/Results";
import Toppers from "@/components/result/mobile/Toppers";

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
        <div className="bg-white h-[90%] bigphone:h-[89.5%] w-full rounded-t-large overflow-hidden">
          {/* main */}
          <div className="grid gap-5 overflow-y-auto h-[99%] pt-[3.25rem] overflow-x-hidden">
            {/* Overall Results and toppers */}
            <div className="h-[30rem] mx-auto min-h-14 min-w-[80%] w-[96%] flex gap-2 flex-col relative">
              {/* slider button */}
              {/* right */}
              <button className="absolute right-[.1rem] bg-gray-100 rounded-full opacity-25 border-black border top-[50%]">
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
              <button className="absolute left-0 bg-gray-100 rounded-full opacity-25 border-black border top-[50%]">
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



              {/* deleted content */}

              {/* toppers */}
              <div className="h-full w-full overflow-hidden">
                <div
                  className="h-1/6 w-full flex items-center justify-between px-2 bigphone:px-10"
                >
                  <h1 className="text-2xl bigphone:text-4xl font-bold">
                    #Leading Now
                  </h1>
                  <div className="flex">
                    <div className="flex items-center gap-5">
                      {/* <button
                    className="h-6 bigphone:h-8 bg-primary border rounded-xl flex items-center"
                  >
                    <h1
                      className="text-xs bigphone:text-base px-2 text-white font-bold"
                    >
                      All
                    </h1>
                  </button> */}
                      <button
                        className="h-6 bigphone:h-8 border rounded-xl flex items-center"
                      >
                        <select name="" id="" className="h-6 bigphone:h-8 border rounded-xl flex items-center text-[10px]"><option value="1">Category</option><option value="1">Bidaya</option><option value="1">Ula</option><option value="1">Thaniya</option><option value="1">Thanawiyyah URD</option></select>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[98%] h-4/5 bigphone:h-full mx-auto overflow-x-auto whitespace-nowrap overflow-y-hidden"
                >
                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />

                    <div
                      className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]"
                    >
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>

                    <div
                      className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]"
                    >
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>

                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm">Senior Secondary</p>
                    <p className="text-center text-sm">Team Tribune</p>
                  </div>

                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />

                    <div
                      className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]"
                    >
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>

                    <div
                      className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]"
                    >
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>

                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm">Senior Secondary</p>
                    <p className="text-center text-sm">Team Tribune</p>
                  </div>

                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />

                    <div
                      className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]"
                    >
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>

                    <div
                      className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]"
                    >
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>

                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm">Senior Secondary</p>
                    <p className="text-center text-sm">Team Tribune</p>
                  </div>

                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />

                    <div
                      className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]"
                    >
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>

                    <div
                      className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]"
                    >
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>

                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm">Senior Secondary</p>
                    <p className="text-center text-sm">Team Tribune</p>
                  </div>

                  <div className="h-full w-48 pt-[15%] inline-block relative ml-6">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      alt=""
                      className="rounded-full h-1/2 mx-auto border-4 border-primary"
                    />

                    <div
                      className="bg-green-500 h-8 w-8 rounded-full absolute top-[15%] bigphone:top-[22%] left-[65%] pt-[.1rem]"
                    >
                      <h1 className="text-center font-bold text-white text-lg">
                        #1
                      </h1>
                    </div>

                    <div
                      className="bg-green-500 h-5 rounded-full absolute top-[54%] left-[39%] bigphone:left-[32%] bigphone:top-[58%] pt-[.02rem]"
                    >
                      <h1 className="text-center font-bold text-white text-sm px-2">
                        SJM123
                      </h1>
                    </div>

                    <p className="text-center pt-1 font-semibold">
                      Muhammed Midlaj Ms
                    </p>
                    <p className="text-center text-sm">Senior Secondary</p>
                    <p className="text-center text-sm">Team Tribune</p>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
            {/* Programs and Results */}
            <div className="h-[50vh] bigphone:h-[30rem] mx-auto min-h-14 w-[90%] flex gap-2 relative">
              {/* programs */}
              <div className="h-full w-full bg-gray-100 rounded-3xl overflow-hidden">
                <div className="h-1/5 w-full px-5 flex flex-col justify-end leading-tight">
                  <h1 className="text-2xl bigphone:text-4xl font-bold">Programs</h1>
                  <h1 className="text-xs bigphone:text-sm">Tap to view</h1>
                </div>
                <hr className="border-1 border-primary pb-2" />
                <div className="h-6 bigphone:h-10 w-full flex gap-2 items-center px-2">

                  <select className="h-6 bigphone:h-8 border rounded-xl flex items-center text-[10px]" name="" id=""><option value="1">Category</option><option value="1">Bidaya</option><option value="1">Ula</option><option value="1">Thaniya</option><option value="1">Thanawiyyah URD</option></select>
                  <form className="w-full rounded-xl overflow-hidden h-6 bigphone:h-8 border border-primary flex">
                    <div className="relative flex items-center">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-2 h-2 text-gray-500"
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
                        className="block w-full h-6 bigphone:h-8 pl-10 text-xs text-gray-900 rounded-lg bg-gray-50"
                        placeholder="Search for programs..."
                      />
                    </div>
                  </form>
                </div>
                <hr className="border-1 border-primary mt-2" />
                <div className="w-full h-[65%] p-2 overflow-y-auto">
                  <div className="flex h-14 w-full bg-accent rounded-3xl items-center justify-between px-2 mt-2">
                    <div className="flex gap-2">
                      <p className="font-semibold text-xs bigphone:text-sm">
                        S12JKH
                      </p>
                      <p className="text-xs bigphone:text-sm">
                        Balloon Breaking MLM urdu
                      </p>
                    </div>
                    <p className="text-xs bigphone:text-sm">Thanawiyya URD</p>
                  </div>
                </div>
              </div>
              {/* Results */}
              <div
                className="h-full w-full bg-gray-100 rounded-3xl overflow-hidden absolute z-50 top-0 left-0"
              >
                <div
                  className="h-1/5 w-full px-5 flex items-center leading-tight justify-between"
                >
                  <h1 className="text-2xl bigphone:text-4xl font-bold">Results</h1>

                  <button className="p-2 text-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary h-10 w-10 bigphone:h-14 bigphone:w-14" viewBox="0 -960 960 960"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                  </button>
                </div>

                <hr className="border-1 border-primary" />

                <div className="h-10 w-full flex gap-2 items-center px-2">
                  {/* <button
                className="bg-primary h-8 w-16 border border-primary rounded-xl flex items-center justify-center"
              >
                <p className="text-white font-medium text-xs">All</p>
              </button> */}

                  <select name="" id="" className="h-5/6 bigphone:h-8 border rounded-xl flex items-center text-[10px]"><option value="1">Category</option><option value="1">Bidaya</option><option value="1">Ula</option><option value="1">Thaniya</option><option value="1">Thanawiyyah URD</option></select>

                  <form
                    className="w-full rounded-xl overflow-hidden h-8 border border-primary flex"
                  >
                    <div className="relative flex items-center">
                      <div
                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <svg
                          className="w-2 h-2 text-gray-500 "
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
                        className="block w-full h-8 pl-10 text-xs text-gray-900 rounded-lg bg-gray-50 "
                        placeholder="Search for programs..."
                      />
                    </div>
                  </form>
                </div>

                <hr className="border-1 border-primary" />

                <div className="w-full h-[65%] p-2 overflow-y-auto">

                  <div
                    className="flex h-14 w-full bg-accent rounded-3xl items-center justify-between pr-2 pl-9 mt-2 relative"
                  >
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="" className="h-8 rounded-full absolute left-0" />

                    <div className="flex gap-2">
                      <p className="font-semibold text-[10px] bigphone:text-xs">1st</p>
                      <p className=" text-[10px] bigphone:text-xs">S1234</p>
                      <p className="text-[10px] bigphone:text-xs">Muahammed Midlaj Ms</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-[10px] bigphone:text-xs">Chronicle</p>

                      <p className="text-[10px] bigphone:text-xs">A</p>
                    </div>

                  </div>

                  <div
                    className="flex h-10 w-full bg-accent rounded-3xl items-center justify-between pr-2 pl-9 mt-2 relative"
                  >
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="" className="h-8 rounded-full absolute left-0" />

                    <div className="flex gap-2">
                      <p className="font-semibold text-[10px] bigphone:text-xs">1st</p>
                      <p className=" text-[10px] bigphone:text-xs">S1234</p>
                      <p className="text-[10px] bigphone:text-xs">Muahammed Midlaj Ms</p>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-[10px] bigphone:text-xs">Chronicle</p>

                      <p className="text-[10px] bigphone:text-xs">A</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            {/* Quick Overview */}
            <div className="h-44 bigphone:h-72 mx-auto min-h-14 min-w-6/8 w-[90%] flex bg-gray-100 rounded-2xl flex-col overflow-hidden">
              <div className="h-1/4 w-full flex items-end justify-center">
                <h1 className="text-2xl bigphone:text-4xl font-semibold">
                  Quick Overview
                </h1>
              </div>
              <div className="h-3/4 w-full flex justify-between px-2 gap-2 pt-3">
                <div className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-center leading-tight">
                  <h1 className="text-4xl bigphone:text-8xl font-bold">352</h1>
                  <h1 className="text-[10px] bigphone:text-lg">Results Published</h1>
                </div>
                <div className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-center leading-tight">
                  <h1 className="text-4xl bigphone:text-8xl font-bold">352</h1>
                  <h1 className="text-[10px] bigphone:text-lg">Results Published</h1>
                </div>
                <div className="w-2/6 h-5/6 bg-gray-300 rounded-xl flex flex-col items-center justify-center leading-tight">
                  <h1 className="text-4xl bigphone:text-8xl font-bold">352</h1>
                  <h1 className="text-[10px] bigphone:text-lg">Results Published</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>










      {/* Desktop view */}
      <div
        className="h-screen w-screen bg-cover hidden lg:flex "
        style={{ backgroundImage: 'url("/img/hi.jpg")' }}
      >
        {/* sidebar */}
        <div className="h-full 2xl:w-80 2xl:min-w-[20rem] w-80 min-w-[21rem] bg-primary flex flex-col justify-center gap-3 pl-8">
          {/* title */}
          <h1 className="text-white text-3xl font-semibold leading-none">
            Results <br />
            Page
          </h1>
          {/* heading */}
          <div className="flex justify-start gap-2">
            <h2 className="text-white font-semibold">Live Results</h2>
            {/* <button className="h-6 bg-white border rounded-xl flex items-center">
              <p className="px-2 font-medium">All</p>
            </button> */}
            {/* <select
              className="h-6 border rounded-xl flex items-center"
              name=""
              id=""
            >
              <option value={1}>Category</option>
              <option value={1}>Bidaya</option>
              <option value={1}>Ula</option>
              <option value={1}>Thaniya</option>
              <option value={1}>Thanawiyyah</option>
            </select> */}
          </div>
          {/* result */}
          <div className="w-full h-[25rem] 2xl:h-[40rem] flex flex-col gap-8">
            {/* #01 */}
            <div className="flex justfy-between h-1/6 w-full">
              <div className="h-full w-1/2 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-sm 2xl:text-base">#01</h1>
                <h1 className="text-3xl 2xl:text-5xl">6217</h1>
                <div className="w-28 h-5 bg-green-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white text-xs px-2">
                    Team Tribune
                  </h1>
                </div>
              </div>
              <div className="h-full w-1/2 flex flex-col items-start justify-start pt-5 px-3">
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
            <div className="flex justfy-between h-1/6 w-full">
              <div className="h-full w-1/2 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-sm 2xl:text-base">#01</h1>
                <h1 className="text-3xl 2xl:text-5xl">6217</h1>
                <div className="w-28 h-5 bg-red-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white text-xs px-2">
                    Team Chronicle
                  </h1>
                </div>
              </div>
              <div className="h-full w-1/2 flex flex-col items-start justify-start pt-5 px-3">
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
            <div className="flex justfy-between h-1/6 w-full">
              <div className="h-full w-1/2 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-sm 2xl:text-base">#01</h1>
                <h1 className="text-3xl 2xl:text-5xl">6217</h1>
                <div className="w-28 h-5 bg-blue-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white text-xs px-2">
                    Team Gazette
                  </h1>
                </div>
              </div>
              <div className="h-full w-1/2 flex flex-col items-start justify-start pt-5 px-3">
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
            <div className="flex justfy-between h-1/6 w-full">
              <div className="h-full w-1/2 px-2 font-bold leading-tight pt-3 text-white">
                <h1 className="text-sm 2xl:text-base">#01</h1>
                <h1 className="text-3xl 2xl:text-5xl">6217</h1>
                <div className="w-28 h-5 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <h1 className="font-medium text-white text-xs px-2">
                    Team Herald
                  </h1>
                </div>
              </div>
              <div className="h-full w-1/2 flex flex-col items-start justify-start pt-5 px-3">
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
        <div className="overflow-y-auto w-full mb-2" >
          <div className="h-full w-full bg-cover pl-10 flex flex-col gap-2 2xl:gap-8 mt-[10rem] pr-10">
            {/* title */}
            <div className="h-24 w-full flex items-end">
              <h1 className="text-5xl font-bold">#Current Status</h1>
            </div>
            {/* fist row */}
            <div className=" w-full flex gap-10 ">
              {/* first card first row */}
              <div className="h-[43rem] w-[50%] 2xl:w-[50%] rounded-3xl bg-[#F7F7F7]">
                {/* heading */}
                <div className="h-12">
                  <h1 className="text-3xl font-semibold px-5 my-4">Programs</h1>
                  <hr className="border" />
                </div>
                {/* sort buttons */}
                <div className="flex items-center gap-4 px-5 h-16">
                  {/* All */}
                  {/* Category */}
                  {/* <button
                className="h-6 w-36 justify-center border border-primary rounded-xl flex items-center"
              >
                <p className="text-sm text-primary">Category</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-primary"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M480-360 280-560h400L480-360Z" />
                </svg>
              </button> */}
                  {/* <select
                  className="h-6 justify-center border border-primary rounded-xl flex items-center"
                  name=""
                  id=""
                >
                  <option value={1}>Category</option>
                  <option value={1}>Bidaya</option>
                  <option value={1}>Ula</option>
                  <option value={1}>Thaniya</option>
                  <option value={1}>Thanawiyyah</option>
                </select> */}
                  <select className="py-3 px-4  block  border-gray-200 rounded-full text-sm">
                    <option selected>Category</option>
                    <option>Bidaya</option>
                    <option>Thanawiyya URD</option>
                    <option>3</option>
                  </select>
                  {/* Search */}
                  <form className="w-full rounded-xl overflow-hidden h-10 border border-primary flex">
                    <div className="relative flex items-center w-full">
                      <div className=" flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 "
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
                      {/* <input  */}
                      <input type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm"></input>
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
              <div className="h-[43rem] w-[50%] 2xl:w-[50%] rounded-3xl bg-[#F7F7F7]">
                {/* heading */}
                <div className="h-12">
                  <h1 className="text-3xl font-semibold px-5 my-4">Programs</h1>
                  <hr className="border" />
                </div>
                {/* sort buttons */}
                <div className="flex items-center gap-1 pl-5 pr-10 h-16 flex-wrap">
                  {/* All */}
                  <button className="bg-primary h-6 border border-primary rounded-xl flex items-center justify-center">
                    <p className="text-white px-2 font-medium text-sm">All</p>
                  </button>
                  {/* Tribune */}
                  <button className="h-6 border border-primary rounded-xl flex items-center justify-center">
                    <p className="text-primary px-2 font-medium text-sm">Tribune</p>
                  </button>
                  {/* Chronicle */}
                  <button className="h-6 border border-primary rounded-xl flex items-center justify-center">
                    <p className="text-primary px-2 font-medium text-sm">
                      Chronicle
                    </p>
                  </button>
                  {/* Gazette */}
                  <button className="h-6 border border-primary rounded-xl flex items-center justify-center">
                    <p className="text-primary px-2 font-medium text-sm">Gazette</p>
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
                  <div className="flex w-full items-center h-14 relative">
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
            <div className="h-[50%] 2xl:h-[25%] w-full flex gap-10 ">
              {/* first card second row */}
              <div className="2xl:w-[40%] w-[50%] rounded-3xl bg-[#F7F7F7] px-5 overflow-hidden h-[16rem] ">
                {/* title */}
                <div className="w-full h-[30%] flex items-center justify-between">
                  <h1 className="text-4xl font-semibold leading-none">
                    #Leading Now
                  </h1>
                  <div className="flex gap-2 h-full items-center">
                    {/* <button className="h-6 bg-primary border border-primary rounded-xl flex items-center">
                      <p className="px-2 font-medium text-white text-sm">All</p>
                    </button> */}

                    <select
                      className="h-6 border border-primary rounded-xl flex items-center text-xs"
                      name=""
                      id=""
                    >
                      <option className="text-[10px]" value={1}>Category</option>
                      <option className="text-[10px]" value={1}>Bidaya</option>
                      <option className="text-[10px]" value={1}>Ula</option>
                      <option className="text-[10px]" value={1}>Thaniya</option>
                      <option className="text-[10px]" value={1}>Thanawiyyah URD</option>
                    </select>
                  </div>
                </div>
                {/* Photos */}
                <div className="h-[80%] w-full overflow-x-scroll whitespace-nowrap overflow-y-hidden">
                  {/* 1st */}
                  <div className="h-full w-44 inline-block">
                    <div className="relative left-1/4 top-[1%]">
                      <img
                        className="2xl:w-28 2xl:h-28 w-20 h-20 rounded-full border-primary border"
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt=""
                      />
                      <span className="top-0 2xl:left-[4.9rem] left-[3.8rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                        <h1 className="px-1">#1</h1>
                      </span>
                      <span className="2xl:top-[6rem] 2xl:left-[1.9rem] top-[4.3rem] left-[.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                        <h1 className="px-1">#SMJ123</h1>
                      </span>
                      <p className="absolute text-xs font-semibold 2xl:left-[-.3rem] 2xl:top-[7.3rem] left-[-1.3rem] top-[5.5rem]">
                        Muhammed Midlaj Av
                      </p>
                      <p className="absolute text-xs 2xl:left-[.5rem] 2xl:top-[8.3rem] left-[-.5rem] top-[6.2rem]">
                        Senior Secondary
                      </p>
                      <p className="absolute text-[10px] 2xl:left-[1.3rem] 2xl:top-[9.2rem] top-[7.1rem]">
                        Team Chronicle
                      </p>
                    </div>
                  </div>
                  {/* 2nd */}
                  <div className="h-full w-52 inline-block">
                    <div className="relative left-1/4 top-[1%]">
                      <img
                        className="2xl:w-28 2xl:h-28 w-20 h-20 rounded-full border-primary border"
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt=""
                      />
                      <span className="top-0 2xl:left-[4.9rem] left-[3.8rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                        <h1 className="px-1">#2</h1>
                      </span>
                      <span className="2xl:top-[6rem] 2xl:left-[1.9rem] top-[4.3rem] left-[.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                        <h1 className="px-1">#SMJ123</h1>
                      </span>
                      <p className="absolute text-xs font-semibold 2xl:left-[-.3rem] 2xl:top-[7.3rem] left-[-1.3rem] top-[5.5rem]">
                        Muhammed Midlaj Av
                      </p>
                      <p className="absolute text-xs 2xl:left-[.5rem] 2xl:top-[8.3rem] left-[-.5rem] top-[6.2rem]">
                        Senior Secondary
                      </p>
                      <p className="absolute text-[10px] 2xl:left-[1.3rem] 2xl:top-[9.2rem] top-[7.1rem]">
                        Team Chronicle
                      </p>
                    </div>
                  </div>
                  {/* 3rd */}
                  <div className="h-full w-52 inline-block">
                    <div className="relative left-1/4 top-[1%]">
                      <img
                        className="2xl:w-28 2xl:h-28 w-20 h-20 rounded-full border-primary border"
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt=""
                      />
                      <span className="top-0 2xl:left-[4.9rem] left-[3.8rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                        <h1 className="px-1">#3</h1>
                      </span>
                      <span className="2xl:top-[6rem] 2xl:left-[1.9rem] top-[4.3rem] left-[.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                        <h1 className="px-1">#SMJ123</h1>
                      </span>
                      <p className="absolute text-xs font-semibold 2xl:left-[-.3rem] 2xl:top-[7.3rem] left-[-1.3rem] top-[5.5rem]">
                        Muhammed Midlaj Av
                      </p>
                      <p className="absolute text-xs 2xl:left-[.5rem] 2xl:top-[8.3rem] left-[-.5rem] top-[6.2rem]">
                        Senior Secondary
                      </p>
                      <p className="absolute text-[10px] 2xl:left-[1.3rem] 2xl:top-[9.2rem] top-[7.1rem]">
                        Team Chronicle
                      </p>
                    </div>
                  </div>
                  {/* 4th */}
                  <div className="h-full w-52 inline-block">
                    <div className="relative left-1/4 top-[1%]">
                      <img
                        className="2xl:w-28 2xl:h-28 w-20 h-20 rounded-full border-primary border"
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt=""
                      />
                      <span className="top-0 2xl:left-[4.9rem] left-[3.8rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                        <h1 className="px-1">#4</h1>
                      </span>
                      <span className="2xl:top-[6rem] 2xl:left-[1.9rem] top-[4.3rem] left-[.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                        <h1 className="px-1">#SMJ123</h1>
                      </span>
                      <p className="absolute text-xs font-semibold 2xl:left-[-.3rem] 2xl:top-[7.3rem] left-[-1.3rem] top-[5.5rem]">
                        Muhammed Midlaj Av
                      </p>
                      <p className="absolute text-xs 2xl:left-[.5rem] 2xl:top-[8.3rem] left-[-.5rem] top-[6.2rem]">
                        Senior Secondary
                      </p>
                      <p className="absolute text-[10px] 2xl:left-[1.3rem] 2xl:top-[9.2rem] top-[7.1rem]">
                        Team Chronicle
                      </p>
                    </div>
                  </div>
                  {/* 5th */}
                  <div className="h-full w-44 inline-block">
                    <div className="relative left-1/4 top-[1%]">
                      <img
                        className="2xl:w-28 2xl:h-28 w-20 h-20 rounded-full border-primary border"
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt=""
                      />
                      <span className="top-0 2xl:left-[4.9rem] left-[3.8rem] absolute h-6 w-6 bg-[#28B77B] rounded-full text-xs font-medium text-white flex items-center justify-center">
                        <h1 className="px-1">#5</h1>
                      </span>
                      <span className="2xl:top-[6rem] 2xl:left-[1.9rem] top-[4.3rem] left-[.9rem] absolute h-5 bg-[#28B77B] rounded-lg text-[10px] font-medium text-white flex items-center">
                        <h1 className="px-1">#SMJ123</h1>
                      </span>
                      <p className="absolute text-xs font-semibold 2xl:left-[-.3rem] 2xl:top-[7.3rem] left-[-1.3rem] top-[5.5rem]">
                        Muhammed Midlaj Av
                      </p>
                      <p className="absolute text-xs 2xl:left-[.5rem] 2xl:top-[8.3rem] left-[-.5rem] top-[6.2rem]">
                        Senior Secondary
                      </p>
                      <p className="absolute text-[10px] 2xl:left-[1.3rem] 2xl:top-[9.2rem] top-[7.1rem]">
                        Team Chronicle
                      </p>
                    </div>
                  </div>
                  {/* end */}
                </div>
              </div>
              {/* second card second row */}
              <div className="h-[16rem] 2xl:w-[60%] w-[50%] rounded-3xl bg-[#F7F7F7] px-5">
                {/* title */}
                <div className="w-full h-[20%] flex items-center justify-center">
                  <h1 className="text-4xl font-bold leading-none mt-2">Updates</h1>
                </div>
                {/* small cards */}
                <div className="h-[80%] w-full flex gap-5 items-center justify-center">
                  {/* small card1 */}
                  <div className="h-4/6 w-1/3 2xl:w-1/4 bg-accent rounded-2xl flex flex-col items-center leading-tight pt-5">
                    <h1 className="text-[3rem] 2xl:text-7xl font-bold">123</h1>
                    <h1 className="text-xs">Result Published</h1>
                  </div>
                  {/* small card2 */}
                  <div className="h-4/6 w-1/3 2xl:w-1/4 bg-accent rounded-2xl flex flex-col items-center leading-tight pt-5">
                    <h1 className="text-[3rem] 2xl:text-7xl font-bold">123</h1>
                    <h1 className="text-xs">Result Published</h1>
                  </div>
                  {/* small card3 */}
                  <div className="h-4/6 w-1/3 2xl:w-1/4 bg-accent rounded-2xl flex flex-col items-center leading-tight pt-5">
                    <h1 className="text-[3rem] 2xl:text-7xl font-bold">123</h1>
                    <h1 className="text-xs">Result Published</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






    </main>

  );
}