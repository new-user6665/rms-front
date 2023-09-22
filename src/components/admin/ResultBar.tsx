import React from "react";

interface Props {
  data: {
    title: string;
    totalPoints: number;
    selectedPoints : number;
  }[];
} 

const ResultBar = (props: Props) => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-10 justify-between">
      {props.data.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl w-1/4 py-3 bg-accent hidden lg:flex items-center justify-center flex-row "
        >
          <div>
            <p className="text-lg font-light">{item.title}</p>
            <p className="text-4xl font-extrabold	text-secondary ">{item.totalPoints}</p>
            <p className="text-4xl font-extrabold	text-secondary ">{item.selectedPoints}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultBar;
