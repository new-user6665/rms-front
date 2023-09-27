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
        {/* Card */}
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
              {/* <OverallResults /> */}
              {/* toppers */}
              <Toppers />
              {/* end */}
            </div>
            {/* Programs and Results */}
            <div className="h-80 bigphone:h-[30rem] mx-auto min-h-14 min-w-[90%] w-[90%] flex gap-2">
              {/* programs */}
              <Programs />
              {/* Results */}
              {/* <Results /> */}
            </div>
            {/* Quick Overview */}
            <QuickOverview />
          </div>
        </div>
      </div>
      {/* Desktop view */}
      <div className="h-screen w-screen bg-accent hidden lg:flex">
        {/* sidebar */}
        <DesktopSidebar />
        {/* main content */}
        <div
          className="h-full w-full bg-cover pl-10 pr-10 2xl:pr-80 pb-6 flex flex-col gap-2 2xl:gap-8"
          style={{
            backgroundImage: `url("https://raw.githubusercontent.com/FarragoCommunity/rms-design/codespace-improved-space-fishstick-6x4xg959776h74r/ResultPage/hi.jpg")`,
          }}
        >
          {/* title */}
          <div className="h-24 w-full flex items-end">
            <h1 className="text-5xl font-bold">#Current Status</h1>
          </div>
          {/* fist row */}
          <div className="h-1/2 w-full flex gap-10 pr-10">
            {/* first card first row */}
            <FirstRowFirstCard />
            {/* second card first row */}
            <FirstRowSecondCard />
          </div>
          {/* second row */}
          <div className="h-[30%] 2xl:h-[26%] w-full flex gap-10 pr-10">
            {/* first card second row */}
            <SecondRowFirstCard />
            {/* second card second row */}
            <SecondRowSecondCard />
          </div>
        </div>
      </div>
    </main>
  );
}