"use client";

import { CheckLoggedInDocument, CheckLoggedInQuery, LoginType } from "@/gql/graphql";
import { parseJwt } from "@/lib/cryptr";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { useQuery } from "urql";

type DataType = LoginType;

interface ContextProps {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}

const GlobalContext = createContext<ContextProps>({
  data: {} as DataType,
  setData: (): DataType => {
    return {} as DataType;
  },
});

export const GlobalContextProvider = ({ children }: any) => {
  const [data, setData] = useState<DataType>({} as DataType);

  
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
