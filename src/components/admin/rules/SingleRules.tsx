"use client";
import {
  GetRulesDocument,
  GetRulesQuery,
  GetRulesQueryVariables,
  Category,
  CategorySettings,
} from "@/gql/graphql";
import EditRules from "./EditRules";
import CreateRules from "./CreateRules";
import { useQuery } from "urql";
import { useState } from "react";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Category[];
  setData: React.Dispatch<React.SetStateAction<Category[]>>;
  isOpen : boolean;
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const OneRules = (props: Props) => {

  const [rulesState, setRulesState] = useState<CategorySettings | null>(null);

  const [{ fetching, data }] = useQuery<
    GetRulesQuery,
    GetRulesQueryVariables
  >({
    query: GetRulesDocument,
    variables: {
      id: props.id,
    },
  });

  const rules : CategorySettings  = data?.category.settings as CategorySettings

  return (
    <div>
      {props.isEdit ? (
        <EditRules
          key={1}
          setIsEdit={props.setIsEdit}
          data={rulesState as CategorySettings}
          id={props.id}
          isEdit={props.isEdit}
        />
      ) : props.isCreate ? (
        <CreateRules key={2} data={props.data} setData={props.setData} />
      ) : (
        <div>
          {fetching ? (
            <p> loading... </p>
          ) : rules ? (
            <div>
              <p>{rules?.id}</p>
              <p>{rules?.maxNonStage}</p>
              <p>{rules?.id}</p>

              <button
                className="bg-blue-500"
                onClick={() => {
                  props.setIsEdit(true);
                  props.setIsCreate(false);
                }}
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <p>This category not have rules yet!</p>
              <button
                className="bg-blue-500"
                onClick={() => {
                  props.setIsEdit(false);
                  props.setIsCreate(true);
                }}
              >
                Create
              </button>

            </div>
          )
          }
        </div>
      )}
    </div>
  );
};

export default OneRules;
