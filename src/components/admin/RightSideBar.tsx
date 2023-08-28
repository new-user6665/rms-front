"use client";
import { ArrowRightSquare } from "@/icons/arrows";
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
      } h-full bg-base-300 ms-3 rounded-lg hidden md:flex flex-col transition-all duration-500 overflow-hidden`}
    >

        <ArrowRightSquare
          className="w-8 h-8 cursor-pointer fill-current"
          SetOpen={props.setIsOpen}
          open={props.isOpen}
        />

      <div className={`w-full h-full transition-all  duration-500`}>
        {props.children}
      </div>
    </div>
  );
};

export default RightSideBar;
