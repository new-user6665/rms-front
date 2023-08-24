"use client";
import Modal from "@/components/Modal";
import {
  Grade,
  DeleteGradeDocument,
  DeleteGradeMutation,
  DeleteGradeMutationVariables,
  GetOneGradeDocument,
  GetOneGradeQuery,
  GetOneGradeQueryVariables,
} from "@/gql/graphql";
import {  useState } from "react";
import { OperationResult, useMutation, useQuery } from "urql";
import EditGrade from "./EditGrades";
import CreateGrade from "./CreateGrades";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Grade[];
  setData: React.Dispatch<React.SetStateAction<Grade[]>>;
  isOpen : boolean;
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const OneGrade = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [{ fetching, data }] = useQuery<
    GetOneGradeQuery,
    GetOneGradeQueryVariables
  >({
    query: GetOneGradeDocument,
    variables: {
      id: props.id,
    },
  });

  const [state, DeleteGradeExecute] = useMutation(DeleteGradeDocument);


  const HandleDelete =async ()=>{
    
    const deletedData : OperationResult<DeleteGradeMutation,DeleteGradeMutationVariables> = await DeleteGradeExecute({
      id: props.id
    });
    
    if(deletedData.data?.removeGrade?.__typename){
      const deleted = props.data.filter((value , index)=>{
        return value.id !== props.id;
      })

      props.setData(deleted)
      props.setIsOpen(false)
    }
    setModalOpen(false)
}

  const Grade = data?.grade;

  return (
    <div>
      {props.isEdit ? (
        <EditGrade
          key={1}
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
          name={Grade?.name as string}
          id={Grade?.id as number}
          data={props.data}
          setData={props.setData}
        />
      ) : props.isCreate ? (
        <CreateGrade key={2} data={props.data} setData={props.setData} />
      ) : (
        <div>
          {fetching ? (
            <p> loading... </p>
          ) : (
            <div>
              <p>{Grade?.name}</p>
              <p>{Grade?.id}</p>
              <button
                className="bg-blue-500"
                onClick={() => {
                  props.setIsEdit(true);
                  props.setIsCreate(false);
                }}
              >
                Edit
              </button>
              <button className="bg-red-600" onClick={() => setModalOpen(true)}>
                Delete
              </button>
            </div>
          )}
        </div>
      )}

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} key={3}>
        <p>Are you sure Do you want to Delete ?</p>
        <button className="bg-red-600" onClick={HandleDelete}>Delete</button>
        <button className="bg-blue-500" onClick={() => setModalOpen(false)}>
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default OneGrade;
