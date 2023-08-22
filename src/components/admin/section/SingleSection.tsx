import Modal from "@/components/Modal";
import {
  GetOneSectionDocument,
  GetOneSectionQuery,
  GetOneSectionQueryVariables,
  Section,
} from "@/gql/graphql";
import React, { useState } from "react";
import { useQuery } from "urql";
import EditSection from "./EditSection";
import CreateSection from "./CreateSection";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Section[];
  setData: React.Dispatch<React.SetStateAction<Section[]>>;
}

const SingleSection = (props: Props) => {
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

  const section = data?.section;

  console.log(section);

  return (
    <div>
      {props.isEdit ? (
        <EditSection
          key={1}
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
          name={section?.name as string}
          id={section?.id as number}
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
              <p>{section?.name}</p>
              <p>{section?.updatedAt}</p>
              <p>{section?.id}</p>

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

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} key={1}>
        <p>Are you sure Do you want to Delete ?</p>
        <button className="bg-red-600">Delete</button>
        <button className="bg-blue-500" onClick={() => setModalOpen(false)}>
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default SingleSection;
