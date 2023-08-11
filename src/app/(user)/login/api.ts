"use server";

import {
  Exact,
  LoginUserDocument,
  LoginUserMutation,
  LoginUserMutationVariables,
} from "@/gql/graphql";
import { getUrqlClient } from "@/lib/urql";
import { Login } from "@/types/login";
import { revalidatePath } from "next/cache";
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
    const token = result.data?.login?.token;

    if (token) {
      cookies().set({
        name: "__user",
        value: token,
        httpOnly: true,
        expires: new Date(new Date().getTime() + 1000 * 60 * 60),
        path: "/",
      });
    }

    return result.data?.login;
  } else {
    return {
      status: 400,
      message: "Bad Request",
    };
  }
};
