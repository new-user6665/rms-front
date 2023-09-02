"use client";
import { ChevronRight } from "@/icons/arrows";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  isEdit : boolean;
  isCreate : boolean;
}

const RightSideBar = (props: Props) => {
  return (
    <div
      className={`${
        props.isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
      } bg-[#ECE1FC] ms-3 rounded-2xl hidden content-between justify-between md:flex flex-col ml-6 transition-all duration-500 overflow-hidden`}
    >
      <div className="flex justify-between bg-[#3F127A] h-15 items-center text-white p-5">
        <p className="font-bold w-3/5 leading-5">{props.isEdit ? "Edit" : "Create"}</p>
        <ChevronRight
          className="w-7 h-7 cursor-pointer fill-[#ECE1FC]  transition-all"
          SetOpen={props.setIsOpen}
          open={props.isOpen}
        />
      </div>

      <div className="p-5 flex-1 w-full h-min overflow-y-scroll overflow-x-hidden">
{props.children}
      </div>
    </div>
  );
};

export default RightSideBar;
