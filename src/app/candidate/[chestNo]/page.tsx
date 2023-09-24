import Profile from "@/components/candidate/Profile";

export default async function page({ params }: { params: { chestNo: string }  }) {
    
    return <main className="font-sans h-screen overflow-hidden flex">
  
    {/* Student */}
    <div className="h-screen md:w-72 md:min-w-72 lg:w-96 lg:min-w-96 w-screen bg-primary overflow-hidden md:flex md:flex-col md:justify-between md:items-center hidden md:block">
      <div className="h-64 w-40 md:bg-white bg-transparent md:flex md:flex-col md:items-center flex flex-col items-center mx-auto pt-44 md:pt-0">
        <div className="text-2xl md:mx-5 md:pt-24 pt-28 text-primary relative z-40">
          <button className="cursor-text bg-red-900 h-3 w-3 rounded-full hidden md:block float-right mt-3 mr-8" />
          <h1 className="text-transparent md:text-primary">Team</h1>
          <h1 className="font-bold hidden md:block text-primary -mt-2">
            Chronicle
          </h1>
        </div>
        <div className="md:h-48 md:w-48 lg:h-52 lg:w-52 h-28 w-28 bg-white md:mt-8 -mt-44 rounded-full relative z-20 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&w=1000&q=80"
            alt="Student's Photo"
            className="rounded-full h-full object-cover outline outline-3 outline-white"
          />
          <div className="bg-white h-5 w-16 mx-auto relative z-40 md:-mt-2 -mt-4 rounded  outline outline-1">
            <h1 className="text-center font-black text-primary text-sm">313</h1>
          </div>
        </div>
        <div className="w-full h-96 md:block text-white mt-8 hidden">
          <h1 className="text-center text-xl font-bold">MUHAMMED</h1>
          <h1 className="text-center text-xl font-bold -mt-2">NIHAL PA</h1>
          <h2 className="text-center text-lg">DEGREE</h2>
        </div>
      </div>
      <div className="">
        {/* current */}
        <div className="bg-white md:w-48 md:h-36 h-full w-full mx-auto md:rounded-t-3xl rounded-t-xlarge relative z-0 -mt-0 md:mt-0 hidden md:block">
          <div className="">
            <div className="flex md:flex-col md:items-center">
              <div className="ml-8 mt-8 md:hidden w-40">
                <h1 className="text-tn bigphone:text-sm">Candidate Details</h1>
                <h1 className="font-bold text-xl bigphone:text-3xl -mt-1">
                  MUAHMMED
                </h1>
                <h1 className="font-bold text-xl bigphone:text-3xl -mt-1">
                  NIHAL PA
                </h1>
                <p className="text-lt bigphone:text-base">Senior Secondary</p>
                <p className="text-lt bigphone:text-base -mt-1">Team Tribune</p>
              </div>
              <div className="bg-primary w-32 h-8 rounded-full mt-5 hidden md:block">
                <h1 className="text-white font-bold text-center text-sm mt-2">
                  Current Status
                </h1>
              </div>
            </div>
            <div className=" flex flex-row justify-around md:-mt-0 -mt-20 bigphone:-mt-32 float-right md:float-none grid-row gap-5 mr-6 md:grid-row-none md:mr-0">
              <div className="md:bg-transparent bg-secondary md:h-16 md:w-16 bigphone:h-20 h-16 bigphone:w-20 w-16 rounded-xl">
                <h1 className="font-bold text-center md:text-5xl text-3xl bigphone:text-4xl mt-1">
                  25
                </h1>
                <p className="text-lt text-center -mt-2">Arts</p>
              </div>
              <div className="md:bg-transparent bg-secondary md:h-16 md:w-16 bigphone:h-20 w-16 bigphone:w-20 h-16 rounded-xl">
                <h1 className="font-bold text-center md:text-5xl text-3xl bigphone:text-4xl mt-1">
                  32
                </h1>
                <p className="text-lt text-center -mt-2">Sports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <Profile/>

  
      </main>;
  }
  
  
  
  
  
  