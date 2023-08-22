import { Section } from '@/gql/graphql';
import React from 'react'

interface Props {
    name: string;
    id: number;
    isEdit: boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    data : Section[]
    setData : React.Dispatch<React.SetStateAction<Section[]>>
    }

const EditSection = (props : Props) => {
  return (
    const [name, setName] = React.useState<string>(props.name);
    const [section, setSection] = React.useState<string>(props.section);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
  
    const [state, UpdateCategoryExecute] = useMutation(EditCategoryDocument);
  
  
    const HandleSubmit = async (data: any) => {
      setIsLoading(true);
      const datas: OperationResult<EditCategoryMutation,EditCategoryMutationVariables> = await UpdateCategoryExecute({
        id: props.id,
        name: data.name,
        section: data.section,
      });
  
      if (datas.data?.updateCategory) {
        alert("Category Added");
      props.setData([...props.data, datas.data?.updateCategory as Category]);
      } else {
        alert("Category Not Added");
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
  )
}

export default EditSection