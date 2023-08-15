"use server";

import {
  Exact,
  LoginUserDocument,
  LoginUserMutation,
  LoginUserMutationVariables,
} from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import { Login } from "@/types/login";
import { OperationResult } from "urql";
import { cookies } from "next/headers";

export const login = async (data: Login) => {
  const username = data.username;
  const password = data.password;

  if (username && password) {
    const { client } = getUrqlClient();
    const result: OperationResult<
      LoginUserMutation,
      Exact<{ username: string; password: string }>
    > = await client.mutation<LoginUserMutation, LoginUserMutationVariables>(
      LoginUserDocument,
      {
        username,
        password,
      },
      {
        fetchOptions: {
          credentials: "include" as const,
        },
      }
    );
    const token_1 = result.data?.login?.token;

    if (token_1) {  
      cookies().set({
        name: "__user",
        value: token_1,
        httpOnly: true,
        expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30),
        path: "/",
      });
      cookies().set({
        name: "_adm_",
        value: token_1,
        httpOnly: false,
        expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 28),
        path: "/",
      });

      return result.data?.login;
    } else {
      return {
        status: 400,
        message: "Bad Request",
      };
    }

  } else {
    return {
      status: 400,
      message: "Bad Request",
    };
  }
};
