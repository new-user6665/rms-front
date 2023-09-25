"use client";
import { logoutUser } from "@/app/(user)/login/api";
import { useGlobalContext } from "@/context/context";
import {
  AddProgrammeDocument,
  LogOutUserDocument,
  LogOutUserMutation,
  LogOutUserMutationVariables,
  Roles,
} from "@/gql/graphql";
import { ArrowRightSquare, IconArrowLeftSquare } from "@/icons/arrows";
import {
  Candidates,
  Category,
  Credential,
  Dashboard as Dashoard,
  LogOutIcon,
  SectionIcon,
} from "@/icons/navs";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { OperationResult, useMutation } from "urql";

const AdminNavs = [
  {
    name: "Settings",
    nav: "settings",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Category",
    nav: "category",
    icon: <Category className="w-8 h-8" />,
  },
  {
    name: "Section",
    nav: "section",
    icon: <SectionIcon className="w-8 h-8" />,
  },
  {
    name: "Credentials",
    nav: "credentials",
    icon: <Credential className="w-8 h-8" />,
  },
  {
    name: "Skill",
    nav: "skill",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Grade",
    nav: "grades",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Position",
    nav: "position",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Team",
    nav: "team",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const ControllerNavs = [
  {
    name: "Rules",
    nav: "rules",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Candidates",
    nav: "candidates",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Programs",
    nav: "programmes",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Judges",
    nav: "judges",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Substitute",
    nav: "substitute",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Results",
    nav: "results",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "C Grid",
    nav: "agrid",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "C Grid",
    nav: "agridProgramme",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "List",
    nav: "team-list",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const MediaNavs = [
  {
    name: "Feeds",
    nav: "feeds",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Gallery",
    nav: "gallery",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Certificate",
    nav: "cartificate",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Tags",
    nav: "tags",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const TeamManagerNavs = [
  {
    name: "Candidates",
    nav: "team-candidates",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Programs",
    nav: "team-programs",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "List",
    nav: "team-list",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Results",
    nav: "team-results",
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

  const [state, LogoutExecute] = useMutation(LogOutUserDocument);

  const LogOut = async () => {
    const logout: OperationResult<
      LogOutUserMutation,
      LogOutUserMutationVariables
    > = await LogoutExecute({});
    router.push("/login");
  };

  return (
    <div
      className={`${
        isOpen ? "w-56" : "w-20"
      } overflow-hidden transition-all duration-500 text-base-100  bg-primary hidden  lg:flex flex-col p-4`}
    >
      <div className="p-0 w-1">
        <div
          className={` px-0 flex ${
            isOpen ? "w-40" : "w-12 items-center justify-center"
          }`}
        >
          <label className="swap w-12 my-2">
            {isOpen ? (
              <IconArrowLeftSquare
                className="w-8 h-8  fill-current"
                SetOpen={setIsOpen}
                open={isOpen}
              />
            ) : (
              <ArrowRightSquare
                className="w-8 h-8 swap-off fill-current"
                SetOpen={setIsOpen}
                open={isOpen}
              />
            )}
          </label>
          <span
            className={` text-base text-center font-bold ${
              isOpen ? "flex" : "hidden "
            }`}
          >
            Realia 2k23
          </span>
        </div>
      </div>
      <ul
        className={`menu h-full w-full ${
          isOpen ? "" : "px-0"
        } transition-all flex flex-col justify-between`}
      >
        <div>
          <li className="p-0 w-1"
          onClick={() => router.push('/admin')}>
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
                Dashboard
              </span>
            </p>
          </li>

          {navs.map((nav, index) => (
            <li
              key={index}
              className="p-0"
              onClick={() => router.push(`/admin/${nav.nav}`)}
            >
              <p
                className={` px-0 flex ${
                  isOpen ? "w-40" : "w-12 items-center justify-center "
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
        </div>

        <li className="p-0 w-1" onClick={LogOut}>
          <p
            className={` px-0 flex ${
              isOpen ? "w-40" : "w-12 items-center justify-center"
            }`}
          >
            <LogOutIcon className="w-8 h-8 text-white" />
            <span
              className={` text-base text-center font-bold  ${
                isOpen ? "flex" : "hidden "
              }`}
            >
              Logout
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
