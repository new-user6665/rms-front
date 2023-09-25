import Profile from "@/components/candidate/Profile";

export default async function page({
  params,
}: {
  params: { chestNo: string };
}) {
  return (
    <main className="bg-accent w-screen h-screen">
  {/* Mobile View */}
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
            <p className="text-[#3D127A] text-xl bigphone:2xl font-bold">40</p>
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
  {/* Tab View */}
  <div className="xl:flex h-full w-full hidden 2xl:hidden">
    {/* sidebar */}
    <div className="flex flex-col h-full w-72 min-w-[18rem] bg-primary justify-center items-center gap-3">
      <h1 className="text-white text-5xl px-3 leading-tight font-bold">
        Program Details
      </h1>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Name</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="Muhammed Midlaj"
        />
      </div>
      <div className="flex w-full px-4">
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Code</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="SM123"
          />
        </div>
        <div className="flex flex-col w-2/3">
          <label className="text-accent text-sm pl-2">
            Candidate Count
          </label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="04"
          />
        </div>
      </div>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Category</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="Degree"
        />
      </div>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Duration</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="40 Min"
        />
      </div>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Date and Time</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="7:00 - 8:00 PM, 20-10-2023"
        />
      </div>
      <div className="flex w-full px-4">
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Mode</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="Arts"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Model</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="Stage"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Type</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="Single"
          />
        </div>
      </div>
    </div>
    {/* main */}
    <div className="flex flex-col h-full w-full justify-center px-5">
      <h1 className="text-5xl font-semibold pl-5">Detailed View</h1>
      {/* Card */}
      <div className="flex flex-col w-10/11 h-5/6 bg-white rounded-big overflow-hidden pb-10 pt-4">
        {/* sliders */}
        <div className="flex h-16 justify-center items-center gap-5">
          <div className="rounded-xl text-sm h-8 bg-primary border border-primary flex items-center">
            <p className="px-3 text-white text-lg">Programs</p>
          </div>
          <div className="rounded-xl text-sm h-8 border border-primary flex items-center">
            <p className="px-3 text-primary text-lg">Results</p>
          </div>
        </div>
        <hr className="border" />
        {/* sort buttons */}
        <div className="flex h-10 items-center px-10 gap-3">
          <div className="rounded-xl text-sm h-6 bg-primary border border-primary flex items-center">
            <p className="px-2 text-white text-sm">All</p>
          </div>
          <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
            <p className="px-2 text-primary text-sm">Chronicle</p>
          </div>
          <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
            <p className="px-2 text-primary text-sm">Tribune</p>
          </div>
          <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
            <p className="px-2 text-primary text-sm">Gazette</p>
          </div>
          <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
            <p className="px-2 text-primary text-sm">Herald</p>
          </div>
        </div>
        <hr className="border" />
        {/* table */}
        <div className="flex flex-col h-full items-center pt-5 mt-5 gap-5 overflow-y-auto">
          {/* program List */}
          <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
            <div className="flex h-8 w-1/2 text-sm items-center pl-2 gap-3 justify-start">
              <p>1st</p>
              <p>S123</p>
              <p>Muhammed Midlaj</p>
            </div>
            <div className="flex h-8 w-1/2 text-sm items-center pr-2 gap-3 justify-end">
              <p>Chronicle</p>
              <p>A</p>
              <p>3pts</p>
            </div>
          </div>
          {/* candidate List */}
          <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
            <div className="flex h-8 w-1/2 text-sm items-center pl-2 gap-3 justify-start">
              <img
                src="1575462484669.jpg"
                className="rounded-full h-8 border"
                alt=""
              />
              <p>S123</p>
              <p>Muhammed Midlaj</p>
            </div>
            <div className="flex h-8 w-1/2 text-sm items-center pr-2 gap-3 justify-end">
              <p>Chronicle</p>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  </div>
  {/* Desktop View */}
  <div className="2xl:flex h-full w-full hidden">
    {/* sidebar */}
    <div className="flex flex-col h-full w-[30rem] min-w-[18rem] bg-primary justify-center items-start gap-3 pl-5">
      <h1 className="text-white text-4xl px-3 leading-tight font-bold">
        Program Details
      </h1>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Name</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="Muhammed Midlaj"
        />
      </div>
      <div className="flex w-full px-4">
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Code</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="SM123"
          />
        </div>
        <div className="flex flex-col w-2/3">
          <label className="text-accent text-sm pl-2">
            Candidate Count
          </label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="04"
          />
        </div>
      </div>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Category</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="Degree"
        />
      </div>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Duration</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="40 Min"
        />
      </div>
      <div className="flex flex-col w-full pl-4">
        <label className="text-accent text-sm pl-2">Date and Time</label>
        <input
          type="text"
          
          disabled
          className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
          placeholder="7:00 - 8:00 PM, 20-10-2023"
        />
      </div>
      <div className="flex w-full px-4">
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Mode</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="Arts"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Model</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="Stage"
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label className="text-accent text-sm pl-2">Type</label>
          <input
            type="text"
            
            disabled
            className="h-10 w-11/12 bg-white rounded-lg text-md placeholder:pl-2 placeholder:text-primary"
            placeholder="Single"
          />
        </div>
      </div>
    </div>
    {/* main */}
    <div className="flex flex-col h-full w-full justify-center px-10 pt-20">
      <h1 className="text-5xl font-semibold pl-5">Detailed View</h1>
      {/* Card */}
      <div className="flex h-full w-full gap-10 overflow-hidden">
        {/* Candidates Card */}
        <div className="flex h-full w-1/2 overflow-y-auto">
          <div className="flex flex-col w-full h-5/6 bg-white rounded-big  pb-10 pt-4">
            {/* sliders */}
            <div className="flex h-16 justify-start items-center gap-5 px-8">
              <p className="px-3 text-primary font-bold text-4xl">Candidates</p>
            </div>
            <hr className="border" />
            {/* sort buttons */}
            <div className="flex h-10 items-center px-10 gap-3">
              <div className="rounded-xl text-sm h-6 bg-primary border border-primary flex items-center">
                <p className="px-2 text-white text-sm">All</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Chronicle</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Tribune</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Gazette</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Herald</p>
              </div>
            </div>
            <hr className="border" />
            {/* table */}
            <div className="flex flex-col h-5/6 items-center pt-5 gap-5 overflow-y-auto">
              {/* candidate List */}
              <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                <div className="flex h-8 w-1/2 text-md items-center pl-2 gap-3 justify-start">
                  <img
                    src="1575462484669.jpg"
                    className="rounded-full h-10 border"
                    alt=""
                  />
                  <p>S123</p>
                  <p>Muhammed Midlaj</p>
                </div>
                <div className="flex h-8 w-1/2 text-md items-center pr-2 gap-3 justify-end">
                  <p>Chronicle</p>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
        {/* Results Card */}
        <div className="flex h-full w-1/2 overflow-y-auto">
          <div className="flex flex-col w-full h-5/6 bg-white rounded-big pb-10 pt-4">
            {/* sliders */}
            <div className="flex h-16 justify-start items-center gap-5 px-8">
              <p className="px-3 text-primary font-bold text-4xl">Results</p>
            </div>
            <hr className="border" />
            {/* sort buttons */}
            <div className="flex h-10 items-center px-10 gap-3">
              <div className="rounded-xl text-sm h-6 bg-primary border border-primary flex items-center">
                <p className="px-2 text-white text-sm">All</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Chronicle</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Tribune</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Gazette</p>
              </div>
              <div className="rounded-xl text-sm h-6 border border-primary flex items-center">
                <p className="px-2 text-primary text-sm">Herald</p>
              </div>
            </div>
            <hr className="border" />
            {/* table */}
            <div className="flex flex-col h-5/6 items-center pt-5 gap-5 overflow-y-auto">
              {/* program List */}
              <div className="flex items-center h-16 min-h-[4rem] bg-accent w-11/12 rounded-xl">
                <div className="flex h-8 w-1/2 text-md items-center pl-2 gap-3 justify-start">
                  <p>1st</p>
                  <p>S123</p>
                  <p>Muhammed Midlaj</p>
                </div>
                <div className="flex h-8 w-1/2 text-md items-center pr-2 gap-3 justify-end">
                  <p>Chronicle</p>
                  <p>A</p>
                  <p>3pts</p>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}
