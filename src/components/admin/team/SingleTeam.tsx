"use client";
import Modal from "@/components/Modal";
import {
  Section,
  DeleteSectionDocument,
  DeleteSectionMutation,
  DeleteSectionMutationVariables,
  GetOneSectionDocument,
  GetOneSectionQuery,
  GetOneSectionQueryVariables,
} from "@/gql/graphql";
import {  useState } from "react";
import { OperationResult, useMutation, useQuery } from "urql";
import EditSection from "./EditTeam";
import CreateSection from "./CreateTeam";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Section[];
  setData: React.Dispatch<React.SetStateAction<Section[]>>;
  isOpen : boolean;
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const OneSection = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [{ fetching, data }] = useQuery<
    GetOneSectionQuery,
    GetOneSectionQueryVariables
  >({
    query: GetOneSectionDocument,
    variables: {
      id: props.id,
    },
  });

  const [state, DeleteSectionExecute] = useMutation(DeleteSectionDocument);


  const HandleDelete =async ()=>{
    
    const deletedData : OperationResult<DeleteSectionMutation,DeleteSectionMutationVariables> = await DeleteSectionExecute({
      id: props.id
    });
    
    if(deletedData.data?.removeSection?.__typename){
      const deleted = props.data.filter((value , index)=>{
        return value.id !== props.id;
      })

      props.setData(deleted)
      props.setIsOpen(false)
    }
    setModalOpen(false)
}

  const Section = data?.section;

  return (
    <div>
      {props.isEdit ? (
        <EditSection
          key={1}
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
          name={Section?.name as string}
          id={Section?.id as number}
          data={props.data}
          setData={props.setData}
        />
      ) : props.isCreate ? (
        <CreateSection key={2} data={props.data} setData={props.setData} />
      ) : (
        <div>
          {fetching ? (
            <p> loading... </p>
          ) : (
            <div>
              <p>{Section?.name}</p>
              <p>{Section?.id}</p>
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

export default OneSection;
