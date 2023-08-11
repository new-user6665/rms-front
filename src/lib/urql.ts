import { Client, cacheExchange, createClient, fetchExchange } from "urql/core";

let _client: Client | null = null;

export const getUrqlClient = () => {
  if (!_client) {
    _client = createClient({
      url: process.env.SERVER_URL as string,
      requestPolicy: "cache-first",
      exchanges: [fetchExchange , cacheExchange],
      fetchOptions : {
        cache : "no-cache",
      }
    });
  }
  const client = _client;
  return { client };
};