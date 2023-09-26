export default function SecondRowFirstCard(){
    return(
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
    )
}