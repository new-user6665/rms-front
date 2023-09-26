export default function DesktopView() {
  return (
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
            <label className="text-accent text-sm pl-2">Candidate Count</label>
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
                <p className="px-3 text-primary font-bold text-4xl">
                  Candidates
                </p>
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
  );
}
