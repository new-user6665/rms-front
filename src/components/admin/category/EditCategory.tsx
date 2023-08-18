import { UpdateCategory } from "@/app/admin/category/api";
import { editCategorySchema } from "@/types/category";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  name: string;
  id: number;
  section: string;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditCategory = (props: Props) => {
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
      <button className="bg-green-500" onClick={() => props.setIsEdit(false)}>
        Back
      </button>
      <h1>Edit Category</h1>

      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          const datas: any = await UpdateCategory({ ...data, id: props.id });
        })}
      >
        <input
          type="text"
          placeholder={props.name as string}
          {...register("name")}
        />
        <input
          type="text"
          placeholder={props.section as string}
          {...register("section")}
        />
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

export default EditCategory;
