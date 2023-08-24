import {  EditSectionDocument, EditSectionMutation, EditSectionMutationVariables, Section } from '@/gql/graphql';
import React from 'react'
import { OperationResult, useMutation } from 'urql';

interface Props {
    name: string;
    id: number;
    isEdit: boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    data : Section[]
    setData : React.Dispatch<React.SetStateAction<Section[]>>
    }

const EditSection = (props : Props) => {
    const [name, setName] = React.useState<string>(props.name);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
  
    const [state, UpdateSectionExecute] = useMutation(EditSectionDocument);
  
  
    const HandleSubmit = async (data: any) => {
      setIsLoading(true);
      const updatedData : OperationResult<EditSectionMutation,EditSectionMutationVariables> = await UpdateSectionExecute({
        id: props.id,
        name: data.name
      });
  
      if (updatedData.data?.updateSection) {
        alert("Section Added");  
        const updatedDates = props.data.map((value , index)=>{
          if(value.id == updatedData.data?.updateSection?.id){
          return  value = updatedData.data?.updateSection as Section
          }else{
            return value
          }
        })
  console.log(updatedDates);
  
      props.setData(updatedDates as Section[]);
      } else if(updatedData.error?.message) {
        alert(updatedData.error?.message.split(']')[1]);
      }
      else {
          alert("Section Not Added");
        }
      setIsLoading(false);
      props.setIsEdit(false);
      } 
  
  
    return (
      <div>
        <button className="bg-green-500" onClick={() => props.setIsEdit(false)}>
          Back
        </button>
        <h1>Edit Section</h1>
  
        <form
          onSubmit={(e)=> {
            e.preventDefault();
            HandleSubmit({name})
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
}

export default EditSection