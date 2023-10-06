import React from "react";

interface Props {
  data: {
    name : string
    totalPoint : number;
    currentPoint : number;
    totalSports : number;
    currentSports : number
  }[]
} 

const ResultBar = (props: Props) => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-10 justify-between">
      {props.data.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl w-1/4 py-3 bg-accent hidden lg:flex items-center justify-center flex-row "
        >
          <div className="w-full h-full flex flex-col items-center">
            <p className="text-lg font-light">{item.name}</p>
            <div className="flex justify-around w-full h-full">
            <div className="text-2xl font-extrabold	text-secondary ">{item.totalPoint} <p>Arts</p></div>
            <div className="text-xl font-extrabold	text-secondary ">{item.totalSports} <p>Sports</p></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultBar;
