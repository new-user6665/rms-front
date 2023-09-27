"use client";
import Modal from "@/components/Modal";
import {
  Programme,
  Candidate,
  DeleteProgrammeDocument,
  DeleteProgrammeMutation,
  DeleteProgrammeMutationVariables,
  GetOneProgrammeDocument,
  GetOneProgrammeQuery,
  GetOneProgrammeQueryVariables,
  Mode,
  Model,
  Category,
  Skill,
  GetDetailedProgrammeQuery,
  GetDetailedProgrammeQueryVariables,
  GetDetailedProgrammeDocument,
} from "@/gql/graphql";
import { useState } from "react";
import { OperationResult, useMutation, useQuery } from "urql";
import ViewProgramme from "./ViewTeamList";
import ExcelUploadProgramme from "./ExcelUploadTeamList";
import ExcelUploadGroupTeamList from "./ExcelUploadGroupTeamList";
import { API_KEY } from "@/lib/env";
import { DeleteIcon, EditIcon } from "@/icons/action";
import { set } from "react-hook-form";

interface Props {
  id: number;
  name: string;
  isCreate: boolean;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Programme[];
  setData: React.Dispatch<React.SetStateAction<Programme[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  skill: string;
  category: string;
  isExcelUpload: boolean;
  setIsExcelUpload: React.Dispatch<React.SetStateAction<boolean>>;
  isExcelGroupUpload: boolean;
  setExcelGroupUpload: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Category[];
  skills: Skill[];
  selectedProgramme: Programme;
  allCandidates: Candidate[];
}

const OneProgramme = (props: Props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isViewOpen, setIsViewOpen] = useState<boolean>(false);
  const [toEditChestNo, setToEditChestNo] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [newEditedChestNo , setNewEditedChestNo] = useState<string>("");
  const [haveEditngChestNo, setHaveEditngChestNo] = useState<boolean>(true);


  // console.log(props?.allCandidates);

  
  // props?.allCandidates?.map((value, index) => {
  //   if (value.chestNO == 'S357') {
  //     console.log(value);
  //   }
  //   // console.log(value);
  // });

  const [{ fetching, data }] = useQuery<
    GetDetailedProgrammeQuery,
    GetDetailedProgrammeQueryVariables
  >({
    query: GetDetailedProgrammeDocument,
    variables: {
      id: props.id,
      api_key: API_KEY,
    },
    pause: props.isCreate || props.isEdit,
  });

  const [state, DeleteProgrammeExecute] = useMutation(DeleteProgrammeDocument);

  const HandleDelete = async () => {
    const deletedData: OperationResult<
      DeleteProgrammeMutation,
      DeleteProgrammeMutationVariables
    > = await DeleteProgrammeExecute({
      id: props.id,
    });

    if (deletedData.data?.removeProgramme?.__typename) {
      const deleted = props.data.filter((value, index) => {
        return value.id !== props.id;
      });

      props.setData(deleted);
      props.setIsOpen(false);
    }
    console.log(deletedData);

    setModalOpen(false);
  };

  const Programme = data?.programme;

  return (
    <div>
      { props.isExcelUpload ? (
        <ExcelUploadProgramme
          data={props.data}
          setData={props.setData}
          isExcelUpload={props.isExcelUpload}
          setIsExcelUpload={props.setIsExcelUpload}
          key={1}
        />
      ) : props.isExcelGroupUpload ? (
        <ExcelUploadGroupTeamList
          data={props.data}
          setData={props.setData}
          isExcelUpload={props.isExcelUpload}
          setIsExcelUpload={props.setIsExcelUpload}
          key={1}
        />
      ) : (
        <div>
          {fetching ? (
            <p> loading... </p>
          ) : (
            <div className="">
              {props?.selectedProgramme?.candidateProgramme?.map(
                (value, index) => {     
                  // setCandidateName(value.candidate?.name as string)
                  return (
                    <div key={index} className="bg-info rounded-md m-1 ">
                      <div className="flex justify-between">
                        
                        {/* <p className="text-lg font-bold">{value.candidate?.chestNO}</p> */}
                        {toEditChestNo === value.candidate?.chestNO ? (
                          <div className="flex">
                            <input
                              type="text"
                              className={`text-lg font-bold w-8/12 border-2 ${haveEditngChestNo?'border-green-500':'border-rose-500'}`}
                              defaultValue={value.candidate?.chestNO as string}
                              id={`input-${value.candidate?.chestNO}`}
                              onChange={(e) => {
                                console.log(e.target.value);
                                props?.allCandidates?.map((candidate, index) => {
                                  if (candidate.chestNO == e.target.value) {
                                    console.log(candidate);
                                    console.log(e.target.value);
                                    // value.candidate?.chestNO = e.target.value
                                    
                                    // (document.getElementById(`${value.candidate?.chestNO}`) as any).id = candidate.chestNO as string
                                    (document.getElementById(`${value.candidate?.chestNO}`) as any).innerText = candidate.name as string
                                    setHaveEditngChestNo(true)
                                    return
                                  }
                                  // else{   
                                  //   setHaveEditngChestNo(false)
                                  // }
                                 
                                });
                              }}
                            />
                            <svg
                              onClick={() => {
                                var newChestNo : any = (document.getElementById( `input-${value.candidate?.chestNO}`) as any).value
                                (value.candidate as any).chestNO = newChestNo
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-7 h-7 bg-white cursor-pointer"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        ) : (
                          <input
                            type="text"
                            className="text-lg font-bold w-1/3 bg-inherit"
                            defaultValue={value.candidate?.chestNO as string}
                            disabled
                          />
                        )}
                        
                        <div className="flex pr-4">
                          <div
                            onClick={() =>
                              setToEditChestNo(
                                value.candidate?.chestNO as string
                              )
                            }
                            className="m-2 cursor-pointer"
                          >
                            <EditIcon className="fill-black w-3 h-3 "></EditIcon>
                          </div>
                          <div
                            onClick={() => setModalOpen(true)}
                            className="m-2 cursor-pointer"
                          >
                            <DeleteIcon className="fill-black w-3 h-3 "></DeleteIcon>
                          </div>
                        </div>
                      </div>
                      {/* <p>{candidateName}</p> */}
                      {/* <p>{
                        toEditChestNo === value.candidate?.chestNO ? (
                          <div>
                            {
                              props?.allCandidates?.map((item, index) => {
                                if (item.chestNO == toEditChestNo) {
                                  console.log(value);
                                  return (<div>{item.name} </div>)
                                }
                              }
                              )
                        
                            }
                          </div>
                        ) : <div>
                          {
                            value.candidate?.name
                          }
                        </div>
                        }
                        </p> */}
                        {/* <p>
                            {
                              props?.allCandidates?.map((item, index) => {
                                // if (item.chestNO == toEditChestNo) {
                                //   console.log(value);
                                //   return (<div>{item.name} </div>)
                                // }
                                if (item.chestNO == newEditedChestNo) {
                                  console.log(value);
                                  return (<div>{item.name} </div>)
                                }
                              }
                              )
                            }
                          
                        </p> */}
                        <p id={`${value.candidate?.chestNO}`}>{value.candidate?.name}</p>
                    </div>
                  );
                }
              )}
              <div className="bg-info rounded-md m-1 ">
                <div className="flex justify-between">
                  <div className="flex">
                    <input type="text" className="text-lg font-bold w-8/12" />
                    <svg
                      onClick={() => {}}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 bg-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>

                  <div className="flex pr-4">
                    <div className="m-2 cursor-pointer">
                      <EditIcon className="fill-black w-3 h-3 "></EditIcon>
                    </div>
                    <div
                      // onClick={() => setModalOpen(true)}
                      className="m-2 cursor-pointer"
                    >
                      <DeleteIcon className="fill-black w-3 h-3 "></DeleteIcon>
                    </div>
                  </div>
                </div>
                <p>ds</p>
              </div>
              <button
                className="bg-green-600"
                onClick={
                  () => {
                    props.setIsEdit(false);
                    props.setIsCreate(true);
                  }
                  // props.setIsOpen(true)
                }
              >
                Add
              </button>
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

      <ViewProgramme
        data={props.data}
        setData={props.setData}
        modalOpen={isViewOpen}
        setModalOpen={setIsViewOpen}
        selectedProgramme={Programme as Programme}
      />
    </div>
  );
};

export default OneProgramme;
