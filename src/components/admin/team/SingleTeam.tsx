"use client";
import Modal from "@/components/Modal";
import {
  Team,
  DeleteTeamDocument,
  DeleteTeamMutation,
  DeleteTeamMutationVariables,
  GetOneTeamDocument,
  GetOneTeamQuery,
  GetOneTeamQueryVariables,
} from "@/gql/graphql";
import {  useState } from "react";
import { OperationResult, useMutation, useQuery } from "urql";
import EditTeam from "./EditTeam";
import CreateTeam from "./CreateTeam";
import { DeleteIcon, EditIcon } from "@/icons/action";
import { API_KEY } from "@/lib/env";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Team[];
  setData: React.Dispatch<React.SetStateAction<Team[]>>;
  isOpen : boolean;
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

const OneTeam = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [{ fetching, data }] = useQuery<
    GetOneTeamQuery,
    GetOneTeamQueryVariables
  >({
    query: GetOneTeamDocument,
    variables: {
      id: props.id,
      api_key : API_KEY
    },
    pause: props.isCreate || props.isEdit,
  });

  const [state, DeleteTeamExecute] = useMutation(DeleteTeamDocument);


  const HandleDelete =async ()=>{
    
    const deletedData : OperationResult<DeleteTeamMutation,DeleteTeamMutationVariables> = await DeleteTeamExecute({
      id: props.id
    });
    
    if(deletedData.data?.removeTeam?.__typename){
      const deleted = props.data.filter((value , index)=>{
        return value.id !== props.id;
      })

      props.setData(deleted)
      props.setIsOpen(false)
    }
    setModalOpen(false)
}

  const Team = data?.team;

  return (
    <div className="w-full h-full">
    {props.isEdit ? (
       <EditTeam
       key={1}
       setIsEdit={props.setIsEdit}
       isEdit={props.isEdit}
       name={Team?.name as string}
       id={Team?.id as number}
       data={props.data}
       setData={props.setData}
       color={Team?.color as string}
       description={Team?.description as string}
       shortName={Team?.shortName as string}
     />
    ) : props.isCreate ? (
      <CreateTeam key={2} data={props.data} setData={props.setData} />
    ) : (
      <div className="w-full h-full">
        {fetching ? (
          <p> loading... </p>
        ) : (
          <div className="w-full h-full flex flex-col justify-between">
            {/* <div>
              <p className="font-bold text-2xl leading-7 mt-2 text-center"><span className="font-normal">Name:</span>{Team?.name}</p>
              <p className="font-bold text-2xl leading-7 mt-2 text-center"><span className="font-normal">Short Name:</span>{Team?.shortName}</p>
              <p className="font-bold text-2xl leading-7 mt-2 text-center"><span className="font-normal">Description:</span>{Team?.description}</p>

              <p className="font-bold text-2xl leading-7 mt-2 text-center"><span className="font-normal">Color:</span>{Team?.color}</p>
            </div> */}
               <div className="relative top-15 flex flex-col items-center justify-center gap-4">
              

              <div  className="flex flex-col gap-2 w-full ">
              <p className="text-xl items-center justify-center text-center" >Name</p>
              <span className="border border-gray-500 rounded-lg px-20 py-3 w-full bg-slate-200 ">{Team?.name}</span>
              </div>
             
              <div  className="flex flex-col gap-2 w-full">
              <p className="text-xl items-center justify-center text-center" >Short Name</p>
              <span className="border border-gray-500 rounded-lg px-20 py-3  w-full bg-slate-200 ">{Team?.shortName}</span>
              </div>
              
              <div  className="flex flex-col gap-2 w-full">
              <p className="text-xl items-center justify-center text-center" >Description</p>
              <span className="border border-gray-500 rounded-lg px-20 py-3  bg-slate-200 w-full ">{Team?.description}</span>
              </div>
              <div  className="flex flex-col gap-2  w-full  ">
              <p className="text-xl items-center justify-center text-center" >Color</p>
              <span className="border border-gray-500 rounded-lg px-20 py-3  bg-slate-200 w-full ">{Team?.color}</span>
              </div>
              
            </div>
            <div className="w-full mt-4 flex items-center justify-between">
            <div
          className="w-1/2 flex items-center justify-center tooltip"
          data-tip="Back"
        ></div>
              <div className="w-1/2 flex items-center justify-around">
                <button
                  className=" border-2 text-white px-3 py-2 border-secondary rounded-xl font-bold"
                  onClick={() => {
                    props.setIsEdit(true);
                    props.setIsCreate(false);
                  }}
                >
                  <EditIcon className="w-6 h-6 cursor-pointer fill-secondary  transition-all" />
                </button>
                <button
                  className=" border-2 text-white px-3 py-2 border-secondary rounded-xl font-bold"
                  onClick={() => setModalOpen(true)}
                >
                  <DeleteIcon className="w-6 h-6 cursor-pointer fill-secondary  transition-all" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )}

    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} key={3}>
      <p>Are you sure Do you want to Delete ?</p>
      <button className="bg-red-600" onClick={HandleDelete}>
        Delete
      </button>
      <button className="bg-blue-500" onClick={() => setModalOpen(false)}>
        Cancel
      </button>
    </Modal>
  </div>
  );
};

export default OneTeam;
