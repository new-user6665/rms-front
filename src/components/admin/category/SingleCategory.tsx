"use client";
import Modal from "@/components/Modal";
import {
  GetOneCategoryDocument,
  GetOneCategoryQuery,
  GetOneCategoryQueryVariables,
} from "@/gql/graphql";
import { useState } from "react";
import { useQuery } from "urql";
import EditCategory from "./EditCategory";
import CreateCategory from "./CreateCategory";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const OneCategory = (props: Props) => {
  const [error, setError] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [{ fetching, data }] = useQuery<
    GetOneCategoryQuery,
    GetOneCategoryQueryVariables
  >({
    query: GetOneCategoryDocument,
    variables: {
      id: props.id,
    },
  });

  const category = data?.category;

  return (
    <div>
      {props.isEdit ? (
        <EditCategory
          setIsEdit={props.setIsEdit}
          isEdit={props.isEdit}
          name={category?.name as string}
          section={category?.section?.name as string}
          id={category?.id as number}
        />
      ) : props.isCreate ? (
        <CreateCategory key={2} />
      ) : (
        <div>
          {fetching ? (
            <p> loading... </p>
          ) : (
            <div>
              <p>{category?.name}</p>
              <p>{category?.updatedAt}</p>
              <p>{category?.section?.name}</p>
              <p>{category?.id}</p>

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

export default OneCategory;
