"use client";
import { useGlobalContext } from "@/context/context";
import { Roles } from "@/gql/graphql";
import { ArrowRightSquare, IconArrowLeftSquare } from "@/icons/arrows";
import {
  Candidates,
  Category,
  Credential,
  Dashoard,
  SectionIcon,
} from "@/icons/navs";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const AdminNavs = [
  {
    name: "Category",
    
    icon: <Category className="w-8 h-8" />,
  },
  {
    name: "Section",
    icon: <SectionIcon className="w-8 h-8" />,
  },
  {
    name: "Credentials",
    icon: <Credential className="w-8 h-8" />,
  },
  {
    name: "Skill",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const ControllerNavs = [
  {
    name: "Candidates",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Skill",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const MediaNavs = [
  {
    name: "Candidates",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Skill",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const TeamManagerNavs = [
  {
    name: "Candidates",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Skill",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const Navs = (ROLE: Roles) => {
  switch (ROLE) {
    case Roles.Admin:
      return AdminNavs;
    case Roles.Controller:
      return ControllerNavs;
    case Roles.Media:
      return MediaNavs;
    case Roles.TeamManager:
      return TeamManagerNavs;
    default:
      return [];
  }
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, setData } = useGlobalContext();
  const navs = Navs(data.admin?.roles as Roles);

  const router = useRouter();

  return (
    <div
      className={`${
        isOpen ? "w-44" : "w-12"
      } overflow-hidden h-[98vh]  rounded-lg transition-all duration-500  bg-slate-200 hidden md:flex flex-col`}
    >
      <label className="swap swap-rotate w-12 my-2">
        <input type="checkbox" />

        <IconArrowLeftSquare
          className="w-8 h-8 swap-on  fill-current"
          SetOpen={setIsOpen}
          open={isOpen}
        />

        <ArrowRightSquare
          className="w-8 h-8 swap-off fill-current"
          SetOpen={setIsOpen}
          open={isOpen}
        />
      </label>
      <ul
        className={`menu h-full w-full bg-base-200 text-base-content ${
          isOpen ? "" : "px-0"
        } transition-all`}
      >
        {/* Sidebar content here */}
        <li className="p-0 w-1" onClick={()=> router.push('/admin')}>
          <p
            className={` px-0 flex ${
              isOpen ? "w-40" : "w-12 items-center justify-center"
            }`}
          >
            <Dashoard className="w-8 h-8" />
            <span
              className={` text-base text-center font-bold ${
                isOpen ? "flex" : "hidden "
              }`}
            >
              Dashoard
            </span>
          </p>
        </li>

        {navs.map((nav, index) => (
          <li key={index} className="p-0 w-1" onClick={()=> router.push(`/admin/${nav.name.toLowerCase()}`)}>
            <p
              className={` px-0 flex ${
                isOpen ? "w-40" : "w-12 items-center justify-center"
              }`}
            >
              {nav.icon}
              <span
                className={` text-base text-center font-bold ${
                  isOpen ? "flex" : "hidden "
                }`}
              >
                {nav.name}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
