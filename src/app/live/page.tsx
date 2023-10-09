import Profile from "@/components/candidate/Profile";

export default async function page({
  params,
}: {
  params: { chestNo: string };
}) {
  
  return (
    <main className="bg-primary lg:bg-accent">
    {/* Mobile View */}
    <div className="h-screen w-screen font-sans overflow-hidden flex flex-col gap-4 lg:hidden pt-5">
      {/* Page Name */}
      <div className="h- w-full flex items-star">
        <h1 className="text-base font-semibold px-6 text-white">Result Page</h1>
      </div>
      {/* heading */}
      <div className="h- flex items-center pt-5 justify-center">
        <h1 className="text-3xl font-semibold px-6 text-white leading-none">
          #Live Results
        </h1>
      </div>
      {/* judge Card */}
      <div className="bg-white h-[95%] w-full rounded-t-large">
        {/* all */}
        <div className="h-[84%] w-full pt-8 leading-tight text-center">
          {/* titles */}
          <div className="h-[14%]">
            <h1 className="text-2xl font-extrabold px-6 text-primary">
              Ballon D'or Malayalam
            </h1>
            <h1 className="text-xl font-bold px-6 text-[#3757AA]">
              Thanawiyya Urdu
            </h1>
          </div>
          {/* photos */}
          <div className="h-[100%] overflow-y-auto pb-5 md:mt-10">
            <div className="flex justify-center">
              {/* first */}
              <div className="relative md:h-72 md:w-72 h-64 w-64 mt-5 md:mt-0">
                <div className="bg-green-500 md:h-8 md:w-8 h-5 w-5 rounded-full absolute left-1/2 translate-x-8 top-[2%] flex justify-center items-center">
                  <h1 className="text-[10px] md:text-base font-semibold text-white">
                    #1
                  </h1>
                </div>
                <div className="bg-green-500 h-4 md:h-6 rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 md:top-[25%] md:translate-y-[7.6rem] flex justify-center items-center">
                  <h1 className="text-[8px] md:text-sm font-semibold text-white px-2">
                    SJM454
                  </h1>
                </div>
                <div className="md:h-52 h-32 w-32 md:w-52 gbg-gray-100 rounded-full mx-auto">
                  <img
                    src="/img/avatar.jpg"
                    className="rounded-full md:h-52 h-32 mx-auto mt-6"
                    alt=""
                  />
                </div>
                
                <h1 className="md:text-base text-xs mt-2 md:mt-4">
                  Muhammed Midlaj AV
                </h1>
                <h1 className="text-[10px] md:text-xs">
                  Team <span className="font-bold">Chronicle</span>
                </h1>
                <h1 className="text-[10px] md:text-xs font-semibold">Grade A</h1>
              </div>
            </div>
            <div className="flex justify-center -mt-10 md:mt-2">
              {/* first */}
              <div className="relative md:h-72 md:w-72 h-64 w-64 mt-5 md:mt-0">
                <div className="bg-green-500 md:h-8 md:w-8 h-5 w-5 rounded-full absolute left-1/2 translate-x-8 top-[2%] flex justify-center items-center">
                  <h1 className="text-[10px] md:text-base font-semibold text-white">
                    #1
                  </h1>
                </div>
                <div className="bg-green-500 h-4 md:h-6 rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 md:top-[25%] md:translate-y-[7.6rem] flex justify-center items-center">
                  <h1 className="text-[8px] md:text-sm font-semibold text-white px-2">
                    SJM454
                  </h1>
                </div>
                <div className="md:h-52 h-32 w-32 md:w-52 gbg-gray-100 rounded-full mx-auto">
                  <img
                    src="/img/avatar.jpg"
                    className="rounded-full md:h-52 h-32 mx-auto mt-6"
                    alt=""
                  />
                </div>
                <h1 className="md:text-base text-xs mt-2 md:mt-4">
                  Muhammed Midlaj AV
                </h1>
                <h1 className="text-[10px] md:text-xs">
                  Team <span className="font-bold">Chronicle</span>
                </h1>
                <h1 className="text-[10px] md:text-xs font-semibold">Grade A</h1>
              </div>
              {/* first */}
              <div className="relative md:h-72 md:w-72 h-64 w-64 mt-5 md:mt-0">
                <div className="bg-green-500 md:h-8 md:w-8 h-5 w-5 rounded-full absolute left-1/2 translate-x-8 top-[2%] flex justify-center items-center">
                  <h1 className="text-[10px] md:text-base font-semibold text-white">
                    #1
                  </h1>
                </div>
                <div className="bg-green-500 h-4 md:h-6 rounded-xl absolute left-1/2 -translate-x-1/2 top-1/2 md:top-[25%] md:translate-y-[7.6rem] flex justify-center items-center">
                  <h1 className="text-[8px] md:text-sm font-semibold text-white px-2">
                    SJM454
                  </h1>
                </div>
                <div className="md:h-52 h-32 w-32 md:w-52 gbg-gray-100 rounded-full mx-auto">
                  <img
                    src="/img/avatar.jpg"
                    className="rounded-full md:h-52 h-32 mx-auto mt-6"
                    alt=""
                  />
                </div>
                <h1 className="md:text-base text-xs mt-2 md:mt-4">
                  Muhammed Midlaj AV
                </h1>
                <h1 className="text-[10px] md:text-xs">
                  Team <span className="font-bold">Chronicle</span>
                </h1>
                <h1 className="text-[10px] md:text-xs font-semibold">Grade A</h1>
              </div>
            </div>
            {/* grades */}
            <div className="md:h-72  h-64 mx-auto -mt-24 md:mt-0  md:p-10 p-5">
              <div className="flex items-center h-20 justify-center">
                <div className="bg-gray-200 h-8 w-8 md:h-12 md:w-12 rounded-xl flex items-center justify-center">
                  <h1 className="text-green-500 font-bold">A</h1>
                </div>
                <div className="flex flex-col gap-3 items-end mt-6 md:mt-2 h-14">
                  <div className="flex justify-between items-center text-xs md:text-lg gap-3 px-2">
                    <p>SS123</p>
                    <p>Muhammed Midlaj Av</p>
                    <p>Team Chronicle</p>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-lg gap-3 px-2">
                    <p>SS123</p>
                    <p>Muhammed Midlaj Av</p>
                    <p>Team Chronicle</p>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-lg gap-3 px-2">
                    <p>SS123</p>
                    <p>Muhammed Midlaj Av</p>
                    <p>Team Chronicle</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center h-20 mt-6 md:mt-16 justify-center">
                <div className="bg-gray-200 h-8 w-8 md:h-12 md:w-12 rounded-xl flex items-center justify-center">
                  <h1 className="text-green-500 font-bold">B</h1>
                </div>
                <div className="flex flex-col gap-3 items-end mt-6 md:mt-2 h-14">
                  <div className="flex justify-between items-center text-xs md:text-lg gap-3 px-2">
                    <p>SS123</p>
                    <p>Muhammed Midlaj Av</p>
                    <p>Team Chronicle</p>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-lg gap-3 px-2">
                    <p>SS123</p>
                    <p>Muhammed Midlaj Av</p>
                    <p>Team Chronicle</p>
                  </div>
                  <div className="flex justify-between items-center text-xs md:text-lg gap-3 px-2">
                    <p>SS123</p>
                    <p>Muhammed Midlaj Av</p>
                    <p>Team Chronicle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Desktop View */}
    <div className="w-screen h-screen lg:flex overflow-hidden hidden">
      {/* sidebar */}
      <div className="h-full w-80 min-w-[20rem] bg-primary flex flex-col justify-center gap-3 pl-8">
        {/* title */}
        <h1 className="text-white text-3xl font-semibold leading-none">
          Results <br />
          Page
        </h1>
        {/* heading */}
        <div className="flex justify-start gap-2 ">
          <h2 className="text-white font-semibold">Live Results</h2>
          <button className="h-6 bg-white border rounded-xl flex items-center">
            <p className="px-2 font-medium">All</p>
          </button>
          <select
            className="h-6 border rounded-xl flex items-center"
            name=""
            id=""
          >
            <option value={1}>Category</option>
            <option value={1}>Bidaya</option>
            <option value={1}>Uoola</option>
            <option value={1}>Thaniya</option>
            <option value={1}>Thanawiyya</option>
          </select>
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
        className="bg-cover bg-center w-full h-full "
        style={{ backgroundImage: 'url("/img/live-result-bg.jpg")' }}
      >
        <div className="h-full xl:w-full xl:bg-cover  flex items-center justify-center ">
          <div className="w-[90%] h-[90%] overflow-hidden">
            {/* top */}
            <div className="h-[16%] flex justify-center items-center text-6xl font-bold text-primary">
              <h1>#Live Results</h1>
            </div>
            {/* photos */}
            <div className="bg-white h-[78%] w-full rounded-[2rem] text-center pt-2 lg:pt-5 overflow-hidden">
              <h1 className="text-4xl lg:text-3xl 2xl:text-5xl font-semibold">
                Ballon D'or Malayalam
              </h1>
              <h1 className="text-3xl lg:text-2xl 2xl:text-2xl font-semibold">
                Thanawiyya Urdu
              </h1>
              <div className="h-[60%] whitespace-nowrap overflow-x-auto overflow-y-hidden">
                <div className="w-72 h-full inline-block text-center relative">
                  <div className="bg-green-500 h-10 w-10 rounded-full absolute left-1/2 translate-x-12 top-6 flex items-center justify-center">
                    <h1 className="font-semibold text-white 2xl:text-base">#1</h1>
                  </div>
                  <div className="bg-green-500 h-6 rounded-full absolute left-1/2 -translate-x-1/2 top-[65%] 2xl:top-[65%] flex items-center justify-center">
                    <h1 className="font-semibold text-white text-sm px-2">
                      SJM123
                    </h1>
                  </div>
                  <div className="h-36 2xl:h-64 w-36 2xl:w-64 gbg-gray-100 rounded-full mx-auto">
                  <img
                    src="/img/avatar.jpg"
                    className="rounded-full h-36 2xl:h-64 mx-auto mt-6"
                    alt=""
                  />
                  </div>
                  <p className="absolute left-1/2 -translate-x-1/2 top-[73%] 2xl:top-[70%]">
                    Muahmmed Midlaj AV
                  </p>
                  <p className="absolute left-1/2 -translate-x-1/2 text-sm top-[80%] 2xl:top-[75%]">
                    Team Chronicle
                  </p>
                  <p className="absolute left-1/2 -translate-x-1/2 text-sm top-[85%] 2xl:top-[80%]">
                    Grade <span className="font-semibold">A</span>
                  </p>
                </div>
                <div className="w-72 h-full inline-block relative">
                  <div className="bg-green-500 h-10 w-10 rounded-full absolute left-1/2 translate-x-12 top-6 flex items-center justify-center">
                    <h1 className="font-semibold text-white 2xl:text-base">#1</h1>
                  </div>
                  <div className="bg-green-500 h-6 rounded-full absolute left-1/2 -translate-x-1/2 top-[65%] 2xl:top-[65%] flex items-center justify-center">
                    <h1 className="font-semibold text-white text-sm px-2">
                      SJM123
                    </h1>
                  </div>
                  <div className="h-36 2xl:h-64 w-36 2xl:w-64 gbg-gray-100 rounded-full mx-auto">
                  <img
                    src="/img/avatar.jpg"
                    className="rounded-full h-36 2xl:h-64 mx-auto mt-6"
                    alt=""
                  />
                  </div>
                  <p className="absolute left-1/2 -translate-x-1/2 top-[73%] 2xl:top-[70%]">
                    Muahmmed Midlaj AV
                  </p>
                  <p className="absolute left-1/2 -translate-x-1/2 text-sm top-[80%] 2xl:top-[75%]">
                    Team Chronicle
                  </p>
                  <p className="absolute left-1/2 -translate-x-1/2 text-sm top-[85%] 2xl:top-[80%]">
                    Grade <span className="font-semibold">A</span>
                  </p>
                </div>
                <div className="w-72 h-full inline-block relative">
                  <div className="bg-green-500 h-10 w-10 rounded-full absolute left-1/2 translate-x-12 top-6 flex items-center justify-center">
                    <h1 className="font-semibold text-white 2xl:text-base">#1</h1>
                  </div>
                  <div className="bg-green-500 h-6 rounded-full absolute left-1/2 -translate-x-1/2 top-[65%] 2xl:top-[65%] flex items-center justify-center">
                    <h1 className="font-semibold text-white text-sm px-2">
                      SJM123
                    </h1>
                  </div>
                  <div className="h-36 2xl:h-64 w-36 2xl:w-64 gbg-gray-100 rounded-full mx-auto">
                  <img
                    src="/img/avatar.jpg"
                    className="rounded-full h-36 2xl:h-64 mx-auto mt-6"
                    alt=""
                  />
                  </div>
                  <p className="absolute left-1/2 -translate-x-1/2 top-[73%] 2xl:top-[70%]">
                    Muahmmed Midlaj AV
                  </p>
                  <p className="absolute left-1/2 -translate-x-1/2 text-sm top-[80%] 2xl:top-[75%]">
                    Team Chronicle
                  </p>
                  <p className="absolute left-1/2 -translate-x-1/2 text-sm top-[85%] 2xl:top-[80%]">
                    Grade <span className="font-semibold">A</span>
                  </p>
                </div>
              </div>
              {/* grades */}
              <div className=" 2xl:h-[24.5%] h-[28.2%] flex justify-center items-center ">
                <div className="w-full h-full  flex p-2 px-5 gap-5 overflow-y-auto ">
                  <div className="flex flex-wrap content-start gap-4 w-full">
                    {/* student 1 */}
                    <div className="flex justify-between items-center w-[45%] h-10 text-sm">
                      <div className="bg-gray-200 h-10 w-10 rounded-xl text-xl font-bold text-green-500 flex items-center justify-center">
                        <p>A</p>
                      </div>
                      <p>SS123</p>
                      <p>Muhammed Midlaj Av</p>
                      <p>Chronicle</p>
                    </div>
                    <div className="flex justify-between items-center w-[45%] h-10 text-sm">
                      <div className="bg-gray-200 h-10 w-10 rounded-xl text-xl font-bold text-green-500 flex items-center justify-center">
                        <p>A</p>
                      </div>
                      <p>SS123</p>
                      <p>Muhammed Midlaj Av</p>
                      <p>Chronicle</p>
                    </div>
                    <div className="flex justify-between items-center w-[45%] h-10 text-sm">
                      <div className="bg-gray-200 h-10 w-10 rounded-xl text-xl font-bold text-green-500 flex items-center justify-center">
                        <p>A</p>
                      </div>
                      <p>SS123</p>
                      <p>Muhammed Midlaj Av</p>
                      <p>Chronicle</p>
                    </div>
                  </div>
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
