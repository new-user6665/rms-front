"use client";
import { AddGradeDocument, AddGradeMutation, AddGradeMutationVariables, Grade } from "@/gql/graphql";
import { addGradeSchema } from "@/types/grades"
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { OperationResult, useMutation } from "urql";

interface Props {
  data : Grade[]
  setData : React.Dispatch<React.SetStateAction<Grade[]>>
}

const CreateGrade = (props: Props) => {

  const [state, CreateGradeExecute] = useMutation(AddGradeDocument);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    shouldUseNativeValidation: true,
    resolver: zodResolver(addGradeSchema),
  });

  const HandleSubmit = async (data: any) => {
    const datas: OperationResult<AddGradeMutation,AddGradeMutationVariables> = await CreateGradeExecute({
      name: data.name,
      percentage: data.percentage,
      pointGroup: data.pointGroup,
      pointHouse: data.pointHouse,
      pointSingle : data.pointSingle
    });

    if (datas.data?.createGrade) {
      alert("Grade Added");
    props.setData([...props.data, datas.data?.createGrade as Grade]);
    } else {
      alert("Grade Not Added");
    }
    reset();
  };

  return (
    <div>
      <h1>Create Grade</h1>

      <form
        onSubmit={handleSubmit(async (data) => {
          await HandleSubmit(data);
        })}
      >
        <input type="text" {...register("name")} placeholder="name" />
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

export default CreateGrade;
