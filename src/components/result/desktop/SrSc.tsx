export default function SecondRowSecondCard() {
  return (
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
  );
}
