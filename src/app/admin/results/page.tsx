import Programme from "@/components/admin/programmes/Programme";
import Result from "@/components/admin/results/Result";
import {
  GetAllCategoriesDocument,
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables,
  GetAllProgrammesDocument,
  GetAllProgrammesQuery,
  GetAllProgrammesQueryVariables,
  GetAllSkillsDocument,
  GetAllSkillsQuery,
  GetAllSkillsQueryVariables,
} from "@/gql/graphql";
import { SectionIcon } from "@/icons/navs";
import { getUrqlClient } from "@/lib/urql";
import React from "react";

const page = async () => {
  const { client } = getUrqlClient();
  const result = await client.query<
    GetAllProgrammesQuery,
    GetAllProgrammesQueryVariables
  >(GetAllProgrammesDocument, {});

  const categories = await client.query<
    GetAllCategoriesQuery,
    GetAllCategoriesQueryVariables
  >(GetAllCategoriesDocument, {});

  const skills = await client.query<
    GetAllSkillsQuery,
    GetAllSkillsQueryVariables
  >(GetAllSkillsDocument, {});

  return (
    <main className="w-full h-full flex ">
      <Result
        key={1}
        result={result.data?.programmes}
        pageProps={1}
        categories={categories.data?.categories}
        skills={skills.data?.skills}
      />
    </main>
  );
};

export default page;
