import { AddCategory, UpdateCategory } from "@/app/admin/category/api";
import { editCategorySchema } from "@/types/category";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {}

const CreateCategory = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    shouldUseNativeValidation: true,
    resolver: zodResolver(editCategorySchema),
  });

  return (
    <div>
      <h1>Create Category</h1>

      <form
        onSubmit={handleSubmit(async (data) => {
          const datas: any = await AddCategory({
            name: data.name,
            section: data.section,
          });
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
