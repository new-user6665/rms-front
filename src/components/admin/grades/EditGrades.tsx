import {  EditGradeDocument, EditGradeMutation, EditGradeMutationVariables, Grade } from '@/gql/graphql';
import React from 'react'
import { OperationResult, useMutation } from 'urql';

interface Props {
    name: string;
    id: number;
    isEdit: boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    data : Grade[]
    setData : React.Dispatch<React.SetStateAction<Grade[]>>
    }

const EditGrade = (props : Props) => {
    const [name, setName] = React.useState<string>(props.name);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
  
    const [state, UpdateGradeExecute] = useMutation(EditGradeDocument);
  
  
    const HandleSubmit = async (data: any) => {
      setIsLoading(true);
      const updatedData : OperationResult<EditGradeMutation,EditGradeMutationVariables> = await UpdateGradeExecute({
        id: props.id,
        name: data.name,
        percentage: data.percentage,
        pointGroup: data.pointGroup,
        pointHouse  : data.pointHouse,
        pointSingle : data.pointSingle
      });
  
      if (updatedData.data?.updateGrade) {
        alert("Grade Added");  
        const updatedDates = props.data.map((value , index)=>{
          if(value.id == updatedData.data?.updateGrade?.id){
          return  value = updatedData.data?.updateGrade as Grade
          }else{
            return value
          }
        })
  console.log(updatedDates);
  
      props.setData(updatedDates as Grade[]);
      } else if(updatedData.error?.message) {
        alert(updatedData.error?.message.split(']')[1]);
      }
      else {
          alert("Grade Not Added");
        }
      setIsLoading(false);
      props.setIsEdit(false);
      } 
  
  
    return (
      <div>
        <button className="bg-green-500" onClick={() => props.setIsEdit(false)}>
          Back
        </button>
        <h1>Edit Grade</h1>
  
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

export default EditGrade