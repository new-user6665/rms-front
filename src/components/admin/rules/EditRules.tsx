"use client";
import {
  CategorySettings,
  EditRulesDocument,
  EditRulesMutation,
  EditRulesMutationVariables,
} from "@/gql/graphql";
import React from "react";
import { OperationResult, useMutation } from "urql";

interface Props {
  id: number;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: CategorySettings;
}

const EditRules = (props: Props) => {
  const [state, UpdateRulesExecute] = useMutation(EditRulesDocument);
  const [EditRules, setEditRules] = React.useState<CategorySettings>(
    props.data
  );

  const HandleSubmit = async (data: any) => {
    const updatedData: OperationResult<
      EditRulesMutation,
      EditRulesMutationVariables
    > = await UpdateRulesExecute({
      id: props.id,
      category: EditRules.category as string,
      maxGroup: EditRules.maxGroup as number,
      minGroup: EditRules.minGroup as number,
      maxSingle: EditRules.maxSingle as number,
      minSingle: EditRules.minSingle as number,
      maxStage: EditRules.maxStage as number,
      minStage: EditRules.minStage as number,
      maxNonStage: EditRules.maxNonStage as number,
      minNonStage: EditRules.minNonStage as number,
      maxOutDoor: EditRules.maxOutDoor as number,
      minOutDoor: EditRules.minOutDoor as number,
      maxProgram: EditRules.maxProgram as number,
      minProgram: EditRules.minProgram as number,
      maxSports: EditRules.maxSports as number,
      minSports: EditRules.minSports as number,
      maxSportsGroup: EditRules.maxSportsGroup as number,
      minSportsGroup: EditRules.minSportsGroup as number,
      maxSportsSingle: EditRules.maxSportsSingle as number,
      minSportsSingle: EditRules.minSportsSingle as number,
    });

    if (updatedData.data?.updateCategorySetting) {
      alert("Rules Updated");
    } else if (updatedData.error?.message) {
      alert(updatedData.error?.message.split("]")[1]);
    }
    props.setIsEdit(false);
  };

  return (
    <div>
      <button className="bg-green-500" onClick={() => props.setIsEdit(false)}>
        Back
      </button>
      <h1>Edit Rules</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          HandleSubmit({});
        }}
      >
        <button className="bg-fuchsia-600" type="submit">
          {state.fetching ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditRules;
