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
    nav: "admin/settings",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Category",
    nav: "admin/category",
    icon: <Category className="w-8 h-8" />,
  },
  {
    name: "Section",
    nav: "admin/section",
    icon: <SectionIcon className="w-8 h-8" />,
  },
  {
    name: "Credentials",
    nav: "admin/credentials",
    icon: <Credential className="w-8 h-8" />,
  },
  {
    name: "Skill",
    nav: "admin/skill",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Grade",
    nav: "admin/grades",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Position",
    nav: "admin/position",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Team",
    nav: "admin/team",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const ControllerNavs = [
  {
    name: "Rules",
    nav: "controller/rules",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Candidates",
    nav: "controller/candidates",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Programs",
    nav: "controller/programmes",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Judges",
    nav: "controller/judges",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Results",
    nav: "controller/results",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "C Grid",
    nav: "controller/agrid",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "P Grid",
    nav: "controller/agridProgramme",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "List",
    nav: "controller/team-list",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const MediaNavs = [
  {
    name: "Gallery",
    nav: "media/gallery",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Certificate",
    nav: "media/cartificate",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Tags",
    nav: "media/tag",
    icon: <Dashoard className="w-8 h-8" />,
  },
];

const TeamManagerNavs = [
  {
    name: "Candidates",
    nav: "team-manager/team-candidates",
    icon: <Candidates className="w-8 h-8" />,
  },
  {
    name: "Programs",
    nav: "team-manager/team-programs",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "List",
    nav: "team-manager/team-list",
    icon: <Dashoard className="w-8 h-8" />,
  },
  {
    name: "Results",
    nav: "team-manager/team-results",
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
          <li className="p-0 w-1" onClick={() => router.push("/admin")}>
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
