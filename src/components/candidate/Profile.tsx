
import React from 'react'

const Profile = () => {
  return (
   <>
     {/* Profile Desktop */}
  <div className="hidden md:hidden lg:block w-full h-screen bg-accent">
    <div className="flex h-1/6 items-end">
      <h1 className="text-primary font-extrabold text-6xl ml-10">Profile</h1>
    </div>
    <div className="cards mx-10 flex content-around gap-10 md:hidden lg:flex h-5/6 pt-10">
      <div className="bg-white h-5/6 w-1/2 rounded-3xl overflow-hidden">
        <h1 className="text-3xl text-primary font-bold mx-5 mt-5">Programs</h1>
        <hr className="border" />
        <div className="mx-5 py-3 flex gap-3">
          <button className="bg-primary text-primary h-6 rounded-xl outline outline-1">
            <p className="px-2 text-white font-bold">All</p>
          </button>
          <button className="bg-transparent h-6 rounded-xl outline outline-1">
            <p className="px-2 text-primary">Individual</p>
          </button>
          <button className="bg-transparent h-6 rounded-xl outline outline-1">
            <p className="px-2 text-primary">Group</p>
          </button>
        </div>
        <hr className="border" />
        {/* list */}
        <div className="mx-5 flex flex-col items-center overflow-y-auto gap-5 h-41/50 py-5">
          {/* 1 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm px-5">
            <h1 className="mt-4">SMJ123</h1>
            <h1 className="mt-4">Balloon Breaking</h1>
            <div className="text-lt flex flex-col items-end mt-2">
              <p>7:00 pm</p>
              <p>19-09-2023</p>
            </div>
          </div>
          {/* 2 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm px-5">
            <h1 className="mt-4">SMJ123</h1>
            <h1 className="mt-4">Balloon Breaking</h1>
            <div className="text-lt flex flex-col items-end mt-2">
              <p>7:00 pm</p>
              <p>19-09-2023</p>
            </div>
          </div>
          {/* 3 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm px-5">
            <h1 className="mt-4">SMJ123</h1>
            <h1 className="mt-4">Balloon Breaking</h1>
            <div className="text-lt flex flex-col items-end mt-2">
              <p>7:00 pm</p>
              <p>19-09-2023</p>
            </div>
          </div>
          {/* 4 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm px-5">
            <h1 className="mt-4">SMJ123</h1>
            <h1 className="mt-4">Balloon Breaking</h1>
            <div className="text-lt flex flex-col items-end mt-2">
              <p>7:00 pm</p>
              <p>19-09-2023</p>
            </div>
          </div>
          {/* 5 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm px-5">
            <h1 className="mt-4">SMJ123</h1>
            <h1 className="mt-4">Balloon Breaking</h1>
            <div className="text-lt flex flex-col items-end mt-2">
              <p>7:00 pm</p>
              <p>19-09-2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-5/6 w-2/3 rounded-3xl overflow-hidden">
        <h1 className="text-3xl text-primary font-bold mx-5 mt-5">Results</h1>
        <hr className="border" />
        <div className="mx-5 py-3 flex gap-3">
          <button className="bg-primary text-primary h-6 rounded-xl outline outline-1">
            <p className="px-2 text-white font-bold">All</p>
          </button>
          <button className="bg-transparent h-6 rounded-xl outline outline-1">
            <p className="px-2 text-primary">Individual</p>
          </button>
          <button className="bg-transparent h-6 rounded-xl outline outline-1">
            <p className="px-2 text-primary">Group</p>
          </button>
        </div>
        <hr className="border" />
        {/* list */}
        <div className="mx-5 flex flex-col items-center overflow-y-auto gap-5 h-41/50 pt-5">
          {/* 1 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm items-center px-5">
            <div className="flex gap-8 text-sm">
              <h1 className="">SMJ123</h1>
              <h1 className="">Balloon Breaking</h1>
            </div>
            <div className="text-sm flex gap-2 flex-row items-end -pt-2 ml-24">
              <p>1st</p>
              <p>NIL</p>
              <p>3pts</p>
            </div>
          </div>
          {/* 2 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm items-center px-5">
            <div className="flex gap-8 text-sm">
              <h1 className="">SMJ123</h1>
              <h1 className="">Balloon Breaking</h1>
            </div>
            <div className="text-sm flex gap-2 flex-row items-end -pt-2 ml-24">
              <p>1st</p>
              <p>NIL</p>
              <p>3pts</p>
            </div>
          </div>
          {/* 3 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm items-center px-5">
            <div className="flex gap-8 text-sm">
              <h1 className="">SMJ123</h1>
              <h1 className="">Balloon Breaking</h1>
            </div>
            <div className="text-sm flex gap-2 flex-row items-end -pt-2 ml-24">
              <p>1st</p>
              <p>NIL</p>
              <p>3pts</p>
            </div>
          </div>
          {/* 4 */}
          <div className="h-12 rounded-xl w-full bg-accent flex flex-row justify-between text-sm items-center px-5">
            <div className="flex gap-8 text-sm">
              <h1 className="">SMJ123</h1>
              <h1 className="">Balloon Breaking</h1>
            </div>
            <div className="text-sm flex gap-2 flex-row items-end -pt-2 ml-24">
              <p>1st</p>
              <p>NIL</p>
              <p>3pts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    {/* Profile Ipad */}
    <div className="lg:hidden hidden md:block w-full bg-accent">
    {/* text */}
    <div className="flex h-1/6 items-end">
      <h1 className="text-primary font-extrabold text-6xl ml-10">Profile</h1>
    </div>
    {/* cards */}
    <div className="bg-white h-4/6 w-5/6 mx-10 rounded-3xl overflow-hidden mt-5">
      {/* slider */}
      <div className="h-16 w-full flex items-center gap-5 justify-center">
        <div className="bg-primary border h-3/5 flex items-center rounded-2xl">
          <h1 className="px-3 text-lg text-white font-bold">Programs</h1>
        </div>
        <div className="bg-transparent border h-3/5 flex items-center rounded-2xl">
          <h1 className="px-3 text-lg text-primary">Results</h1>
        </div>
      </div>
      <hr className="border" />
      {/* buttons */}
      <div className="h-10 w-full items-center flex px-5 gap-5">
        <div className="bg-primary border h-3/5 flex items-center rounded-2xl">
          <h1 className="px-3 text-sm text-white font-bold">All</h1>
        </div>
        <div className="bg-transparent border h-3/5 flex items-center rounded-2xl">
          <h1 className="px-3 text-sm text-primary">Individual</h1>
        </div>
        <div className="bg-transparent border h-3/5 flex items-center rounded-2xl">
          <h1 className="px-3 text-sm text-primary">Group</h1>
        </div>
      </div>
      <hr className="border" />
      {/* lists */}
      <div className="h-full w-full overflow-y-auto flex flex-col items-center py-3 gap-5">
        {/* programslist */}
        <div className="h-14 w-11/12 bg-accent rounded-2xl flex items-center justify-between">
          {/* code */}
          <div className="px-3">
            <p className="">SMJ123</p>
          </div>
          {/* name */}
          <div className="px-3">
            <p className="">Ballpon Breaking</p>
          </div>
          {/* time */}
          <div className="px-3 text-lt flex flex-col items-end">
            <p className="">7:00 pm</p>
            <p className="">19-09-2023</p>
          </div>
        </div>
        {/* resultslist */}
        <div className="h-14 w-11/12 bg-accent rounded-2xl flex items-center justify-between">
          {/* code */}
          <div className="px-3">
            <p className="">SMJ123</p>
          </div>
          {/* name */}
          <div className="px-3">
            <p className="">Ballpon Breaking</p>
          </div>
          {/* result */}
          <div className="px-3 text-lt flex items-end gap-5">
            <p className="">1st</p>
            <p className="">NIL</p>
            <p className="">pts</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Profile Mobile */}
  <div className="bg-primary w-screen h-full md:hidden">
    {/* up */}
    <div className="w-full h-[10%]" />
    {/* down */}
    <div className="w-full h-full bg-primary flex flex-col items-center">
      {/* image */}
      <div className="w-full flex flex-col items-center items-start relative z-40">
        <div className="rounded-full h-36 w-36 border-4 bg-white flex flex-col items-end relative">
          <img
            className="rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
            alt=""
          />
          {/* Color */}
          <div className="bg-red-900 h-4 w-4 rounded-xl border-2 absolute left-5 z-50" />
        </div>
        {/* chessNo */}
        <div className="bg-white h-6 rounded-xl border-2 -mt-3 relative z-50">
          <h1 className="text-sm px-2 font-bold">S313</h1>
        </div>
      </div>
      {/* card */}
      <div className="bg-white rounded-t-big h-full w-screen relative z-0 -mt-20 overflow-hidden">
        {/* details and score and slider */}
        <div className="h-31/100 rounded-t-big flex flex-col justify-start">
          {/* details */}
          <div className="flex items-center pt-16 pb-3 justify-center px-5">
            <div className="h-1/2 w-1/2 flex flex-col items-start mx-5">
              <h1 className="text-tn bigphone:text-sm">Candidate Details</h1>
              <h1 className="font-bold text-xl bigphone:text-2xl -mt-1">
                MUAHMMED
              </h1>
              <h1 className="font-bold text-xl bigphone:text-2xl -mt-2">
                NIHAL PA
              </h1>
              <p className="text-lt bigphone:text-sm">Degree</p>
              <p className="text-lt bigphone:text-sm -mt-1">Team Tribune</p>
            </div>
            {/* score */}
            <div className="w-1/2 h-1/2 flex mr-5 gap-5 items-center justify-end pt-4">
              {/* arts */}
              <div className="bg-accent rounded-xl h-16 w-16 bigphone:h-20 bigphone:w-20 flex flex-col items-center">
                <h1 className="text-3xl bigphone:text-4xl font-bold mt-2">25</h1>
                <p className="-mt-2 text-sm">Arts</p>
              </div>
              {/* sports */}
              <div className="bg-accent rounded-xl h-16 w-16 bigphone:h-20 bigphone:w-20 flex flex-col items-center">
                <h1 className="text-3xl bigphone:text-4xl font-bold mt-2">25</h1>
                <p className="-mt-2 text-sm">Arts</p>
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="h-1/10 w-full flex items-center gap-5 justify-center pb-3">
          <div className="bg-primary border h-8 flex items-center rounded-2xl">
            <h1 className="px-3 text-lg text-white font-bold">Programs</h1>
          </div>
          <div className="bg-transparent border h-8 flex items-center rounded-2xl">
            <h1 className="px-3 text-lg text-primary">Results</h1>
          </div>
        </div>
        {/* list & buttons */}
        <div className="h-59/100 w-full overflow-y-auto">
          {/* buttons */}
          <div className="h-[10%]">
            <hr className='mb-1'/>
            <div className="h-full w-full">
              <div className="h-full w-full items-center flex gap-5 justify-center">
                <div className="bg-primary border h-6 flex items-center rounded-2xl">
                  <h1 className="px-3 text-sm text-white font-bold">All</h1>
                </div>
                <div className="bg-transparent border h-6 flex items-center rounded-2xl">
                  <h1 className="px-3 text-sm text-primary">Individual</h1>
                </div>
                <div className="bg-transparent border h-6 flex items-center rounded-2xl">
                  <h1 className="px-3 text-sm text-primary">Group</h1>
                </div>
              </div>
            </div>
            <hr className='mt-1'/>
          </div>
          {/* list */}
          <div className="h-[80%] w-full flex flex-col items-center gap-2 pt-2">
            {/* 1 */}
            <div className="h-10 w-[90%] bg-accent rounded-2xl flex justify-between items-center px-3">
              <p className="text-lt">SM330</p>
              <p className="text-lt">Balloon Breaking</p>
              <div className="flex flex-col items-end">
                <p className="text-tn">7:00 pm</p>
                <p className="text-tn">19-09-2023</p>
              </div>
            </div>
            {/* 2 */}
            <div className="h-10 w-[90%] bg-accent rounded-2xl flex justify-between items-center px-3">
              <p className="text-lt">SM330</p>
              <p className="text-lt">Balloon Breaking</p>
              <div className="flex items-end gap-2">
                <p className="text-tn">1st</p>
                <p className="text-tn">NIL</p>
                <p className="text-tn">3pts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </>

  
  )
}

export default Profile


