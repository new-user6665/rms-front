export default function MobileView() {
  return (
    <div className="flex flex-col w-full h-screen bg-[#0E0123] xl:hidden">
      <p className="text-white text-lg font-semibold p-5">Program Details</p>
      <div className="p-5 flex flex-col items-center">
        <div className="flex flex-col w-screen px-5 bigphone:items-center">
          <p className="text-white text-3xl bigphone:text-4xl font-semibold">
            Balloon Breaking
          </p>
          <p className="text-white text-3xl bigphone:text-4xl font-semibold">
            MLM
          </p>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="text-[#3F127A] text-xs bg-white rounded-xl px-2 py-[0.125rem] font-semibold">
            Sports
          </button>
          <button className="text-[#3F127A] text-xs bg-white rounded-xl px-2 py-[0.125rem] font-semibold">
            Sports
          </button>
          <button className="text-[#3F127A] text-xs bg-white rounded-xl px-2 py-[0.125rem] font-semibold">
            Sports
          </button>
        </div>
      </div>
      <div className="w-full bg-white rounded-t-[3rem] h-full overflow-hidden">
        <div className="flex mt-2 w-full justify-between p-5">
          <div className="flex flex-col aspect-auto w-40 h-32 bigphone:h-36 bigphone:w-48 bg-[#E1DEFF] rounded-3xl py-2 px-4 justify-center">
            <p className="text-gray-600 text-lt bigphone:text-sm">Category</p>
            <p className="text-[#3D127A] text-xl bigphone:2xl font-bold">
              Degree
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lt bigphone:text-sm text-gray-500">Code</p>
                <p className="text-lt bigphone:text-sm text-[#3D127A] font-bold">
                  SJ123
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-lt bigphone:text-sm text-gray-500">
                  Candidate Count
                </p>
                <p className="text-lt bigphone:text-sm text-[#3D127A] font-bold ml-auto">
                  04x2
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col aspect-auto w-40 h-32 bigphone:h-36 bigphone:w-48 bg-[#E1DEFF] rounded-3xl py-2 px-4 justify-center">
            <p className="text-gray-600 text-lt bigphone:text-sm">Duration</p>
            <div className="flex">
              <p className="text-[#3D127A] text-xl bigphone:2xl font-bold">
                40
              </p>
              <p className="text-[#3D127A] mt-auto text-lt bigphone:text-sm">
                mts
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-lt bigphone:text-sm text-gray-500">Time</p>
                <p className="text-lt bigphone:text-sm text-[#3D127A] font-bold">
                  07:30
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-lt bigphone:text-sm text-gray-500 ml-auto">
                  Date
                </p>
                <p className="text-lt bigphone:text-sm text-[#3D127A] font-bold">
                  23-10-2023
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <button className="w-auto bg-white border-2 border-[#3D127A] text-[#3D127A] text-lg font-semibold rounded-3xl px-4">
            Candidates
          </button>
          <button className="w-auto bg-[#3D127A] text-white text-lg font-semibold rounded-3xl px-4">
            Results
          </button>
        </div>
        <hr className="border mt-2" />
        <div className="flex justify-center gap-1 mt-2">
          <button className="w-auto bg-[#3D127A] text-white text-xs bigphone:text-base font-semibold rounded-3xl px-1 bigphone:px-2 h-6 bigphone:h-8">
            All
          </button>
          <button className="w-auto bg-white border border-[#3D127A] text-[#3D127A] text-xs bigphone:text-base font-semibold rounded-3xl px-1 bigphone:px-2 h-6 bigphone:h-8">
            Chronicle
          </button>
          <button className="w-auto bg-white border border-[#3D127A] text-[#3D127A] text-xs bigphone:text-base font-semibold rounded-3xl px-1 bigphone:px-2 h-6 bigphone:h-8">
            Tribune
          </button>
          <button className="w-auto bg-white border border-[#3D127A] text-[#3D127A] text-xs bigphone:text-base font-semibold rounded-3xl px-1 bigphone:px-2 h-6 bigphone:h-8">
            Gazette
          </button>
          <button className="w-auto bg-white border border-[#3D127A] text-[#3D127A] text-xs bigphone:text-base font-semibold rounded-3xl px-1 bigphone:px-2 h-6 bigphone:h-8">
            Herald
          </button>
        </div>
        <hr className="border mt-2" />
        <div className="flex flex-col h-5/6 pt-2">
          <div className="flex flex-col gap-2 px-5 h-[70%] overflow-y-auto">
            {/* program list */}
            <div className="w-full bg-[#E1DEFF] h-8 bigphone:h-16 rounded-lg flex gap-2">
              <div className="flex h-8 bigphone:h-16 w-1/2 text-tn bigphone:text-sm items-center pl-2 gap-3 justify-start">
                <p>1st</p>
                <p>S123</p>
                <p>Muhammed Midlaj</p>
              </div>
              <div className="flex h-8 bigphone:h-16 w-1/2 text-tn bigphone:text-sm items-center pr-2 gap-3 justify-end">
                <p>Chronicle</p>
                <p>A</p>
                <p>3pts</p>
              </div>
            </div>
            {/* candidate list */}
            <div className="w-full bg-[#E1DEFF] h-8 bigphone:h-16 rounded-lg flex gap-2">
              <div className="flex h-8 bigphone:h-16 w-1/2 text-tn bigphone:text-sm items-center pl-2 gap-3 justify-start">
                <img
                  src="1575462484669.jpg"
                  className="rounded-full h-5 border"
                  alt=""
                />
                <p>S123</p>
                <p>Muhammed Midlaj</p>
              </div>
              <div className="flex h-8 bigphone:h-16 w-1/2 text-tn bigphone:text-sm items-center pr-2 gap-3 justify-end">
                <p>Chronicle</p>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      {/* bottom */}
    </div>
  );
}
