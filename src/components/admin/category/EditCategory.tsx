'use client';
import { UpdateCategory } from "@/app/admin/category/api";
import { Category, EditCategoryDocument, EditCategoryMutation, EditCategoryMutationVariables } from "@/gql/graphql";
import { editCategorySchema } from "@/types/category";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { OperationResult, useMutation } from "urql";

interface Props {
  name: string;
  id: number;
  section: string;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data : Category[]
  setData : React.Dispatch<React.SetStateAction<Category[]>>
}

const EditCategory = (props: Props) => {

  const [name, setName] = React.useState<string>(props.name);
  const [section, setSection] = React.useState<string>(props.section);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [state, UpdateCategoryExecute] = useMutation(EditCategoryDocument);


  const HandleSubmit = async (data: any) => {
    setIsLoading(true);
    const updatedData : OperationResult<EditCategoryMutation,EditCategoryMutationVariables> = await UpdateCategoryExecute({
      id: props.id,
      name: data.name,
      section: data.section,
    });

    if (updatedData.data?.updateCategory) {
      alert("Category Updated");

      const updatedDates = props.data.map((value , index)=>{
        if(value.id == updatedData.data?.updateCategory?.id){
        return  value = updatedData.data?.updateCategory as Category
        }else{
          return value
        }
      })
console.log(updatedDates);

    props.setData(updatedDates as Category[]);
    } else if(updatedData.error?.message) {
      alert(updatedData.error?.message.split(']')[1]);
    }
    setIsLoading(false);
    props.setIsEdit(false);
  };


  return (
    <div>
      <button className="bg-green-500" onClick={() => props.setIsEdit(false)}>
        Back
      </button>
      <h1>Edit Category</h1>

      <form
        onSubmit={(e)=> {
          e.preventDefault();
          HandleSubmit({name, section})
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <button
          className="bg-fuchsia-600"
          type="submit"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
