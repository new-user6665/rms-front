import React from "react";

interface Props {
  data: {
    title: string;
    icon: any;
  }[];
} 

const InfoBar = (props: Props) => {
  return (
    <div className="w-full h-1/5 md:h-[15%] bg-base-200 rounded-lg p-4 flex flex-wrap md:flex-nowrap">
      
        {props.data.map((item, index) => (
            <div key={index} className="card w-1/2 md:w-1/4 h-1/2 md:h-full  shadow-xl flex items-center justify-center ">
              {/* <item.icon.props/> */}
            <div className="card w-11/12 h-[90%] md:h-full bg-base-100 shadow-xl ">

            <svg viewBox={`${item.icon.props.viewBox}`} className={`${item.icon.props.className}`} > {item.icon.props.children}</svg>
                <p>{item.title}</p>
            </div>
          </div>
        ))} 
     
    </div>
  );
};

export default InfoBar;
