import Category from "@/components/admin/category/Category";
import Credentials from "@/components/admin/credentials/Credentials";
import {
  GetAllCategoriesDocument,
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables,
} from "@/gql/graphql";
import { SectionIcon } from "@/icons/navs";
import { getUrqlClient } from "@/lib/urql";
import React from "react";

const page = async () => {
    
    const { client } = getUrqlClient();
    const result = await client.query<
      GetAllCategoriesQuery,
      GetAllCategoriesQueryVariables
    >(GetAllCategoriesDocument, {});


  return (
    <main className="w-full h-full flex ">
      <Credentials pageProps={1} result={result.data?.categories}/>
    </main>
  );
};

export default page;
