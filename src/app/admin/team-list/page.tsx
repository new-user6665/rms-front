import TeamList from "@/components/admin/team-list/TeamList";
import {
  GetAllCandidatesDocument,
  GetAllCandidatesQuery,
  GetAllCandidatesQueryVariables,
  GetAllCategoriesDocument,
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables,
  GetAllDetailedProgrammeDocument,
  GetAllDetailedProgrammeQuery,
  GetAllDetailedProgrammeQueryVariables,
  GetAllProgrammesDocument,
  GetAllProgrammesQuery,
  GetAllProgrammesQueryVariables,
  GetAllSkillsDocument,
  GetAllSkillsQuery,
  GetAllSkillsQueryVariables,
} from "@/gql/graphql";
import { SectionIcon } from "@/icons/navs";
import { API_KEY } from "@/lib/env";
import { getUrqlClient } from "@/lib/urql";
import React from "react";

const page = async () => {
  const { client } = getUrqlClient();
  const propgrammes =   await client.query<
  GetAllDetailedProgrammeQuery,
  GetAllDetailedProgrammeQueryVariables
>(GetAllDetailedProgrammeDocument, {api_key : API_KEY});

  const candidates = await client.query<
  GetAllCandidatesQuery,
  GetAllCandidatesQueryVariables
>(GetAllCandidatesDocument, {api_key : API_KEY});

  const categories = await client.query<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
  >(GetAllCategoriesDocument, {api_key : API_KEY});

  const skills = await client.query<
    GetAllSkillsQuery,
    GetAllSkillsQueryVariables
  >(GetAllSkillsDocument, {api_key : API_KEY});

  const data = [
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />,
    },
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />,
    }, 
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />,
    },
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />,
    },
  ];
  const h = data[0];
  return (
    <main className="w-full h-full flex ">
      <TeamList
        key={1}
        data={data}
        result={propgrammes.data?.programmes}
        pageProps={1}
        categories={categories.data?.categories}
        skills={skills.data?.skills}
        candidates={candidates.data?.candidates}
      />
    </main>
  );
};

export default page;
