"use client";
import { AddCategory, UpdateCategory } from "@/app/admin/category/api";
import { AddCategoryDocument, AddCategoryMutation, AddCategoryMutationVariables, Category } from "@/gql/graphql";
import { editCategorySchema } from "@/types/category";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { OperationResult, useMutation } from "urql";

interface Props {
  data : Category[]
  setData : React.Dispatch<React.SetStateAction<Category[]>>
}

const CreateCategory = (props: Props) => {

  const [state, CreateCategoryExecute] = useMutation(AddCategoryDocument);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    shouldUseNativeValidation: true,
    resolver: zodResolver(editCategorySchema),
  });

  const HandleSubmit = async (data: any) => {
    const datas: OperationResult<AddCategoryMutation,AddCategoryMutationVariables> = await CreateCategoryExecute({
      name: data.name,
      section: data.section,
    });

    if (datas.data?.createCategory) {
      alert("Category Added");
    props.setData([...props.data, datas.data?.createCategory as Category]);
    } else {
      alert("Category Not Added");
    }
    reset();
  };

  return (
    <div>
      <h1>Create Category</h1>

      <form
        onSubmit={handleSubmit(async (data) => {
          await HandleSubmit(data);
        })}
      >
        <input type="text" {...register("name")} placeholder="name" />
        <input type="text" {...register("section")} placeholder="section" />
        <button
          className="bg-fuchsia-600"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
