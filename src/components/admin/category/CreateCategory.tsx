"use client";
import { AddCategoryDocument, AddCategoryMutation, AddCategoryMutationVariables, Category } from "@/gql/graphql";
import React from "react";
import { OperationResult, useMutation } from "urql";

interface Props {
  data: Category[]
  setData: React.Dispatch<React.SetStateAction<Category[]>>
}

const CreateCategory = (props: Props) => {
  const [name, setName] = React.useState<string>('');
  const [section, setSection] = React.useState<string>('');
  const [state, CreateCategoryExecute] = useMutation(AddCategoryDocument);
  

  const HandleSubmit = async (data: any) => {
    const datas: OperationResult<AddCategoryMutation, AddCategoryMutationVariables> = await CreateCategoryExecute({
      name: data.name,
      section: data.section,
    
    });

    if (datas.data?.createCategory) {
      alert("Category Added");
      props.setData([...props.data, datas.data?.createCategory as Category]);
    } else {
      alert("Category Not Added");
    }
  };

  return (
    <div className="h-full w-full">
      <form
        className="h-full w-full flex flex-col items-center justify-between "
        onSubmit={(e) => {
          e.preventDefault();
          HandleSubmit({ name ,section });
        }}
      >
        <div className="mt-4">
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="input input-bordered input-secondary w-full max-w-xs mt-1"
          />
          <p>Section</p>
          <input type="text"
               className="input input-bordered input-secondary w-full max-w-xs mt-1"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          placeholder="section" />
        </div>
        <div className="w-full mt-4 flex items-center justify-between">
          <button
            type="submit"
            className="bg-secondary w-1/2 border-2 text-white px-3 flex-1 py-2 border-secondary rounded-xl font-bold"
          >
            {state.fetching ? "Loading..." : "Submit"}
          </button>

          <div
            className="w-1/2 flex items-center justify-center tooltip"
            data-tip="Back"
          ></div>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
