"use client";
import { CloseIcon } from "@/icons/arrows";
import React from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const RightSideBar = (props: Props) => {
  return (
    <div
      className={`${
        props.isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
      } h-[100] bg-[#ECE1FC] ms-3 rounded-2xl hidden md:flex flex-col transition-all duration-500 overflow-hidden`}
    >
      <div className="flex justify-between">
        <p> Window Name</p>
        <CloseIcon
          className="w-8 h-8 cursor-pointer fill-current"
          SetOpen={props.setIsOpen}
          open={props.isOpen}
        />
      </div>

      <div className={`w-full h-full transition-all  duration-500`}>
        {props.children}
      </div>
    </div>
  );
};

export default RightSideBar;
