import { Programme } from '@/gql/graphql';
import React, { useEffect, useState } from 'react'


interface Props{
    isManualUploadOpen : boolean 
    setIsManualUploadOpen :  React.Dispatch<React.SetStateAction<boolean>>;
    Programme : Programme;
}

interface toUploadFormModal{
    chestNo : string
    grade : string 
    position : string
}

function ManualUpload(props : Props) {

    const [toUploadForm , setToUploadForm] = useState<[toUploadFormModal]>([] as unknown as [toUploadFormModal])


    useEffect(()=>{

      if(toUploadForm.length < (props.Programme?.candidateProgramme?.length as number)){
        
        props.Programme.candidateProgramme?.map((item , index)=>{
            console.log(item);
            
            let form = toUploadForm
            form?.push({
                chestNo : item.candidate?.chestNO as string,
                grade : 'NIL',
                position : 'NIL'
            })

            console.log(form);
            

            setToUploadForm(form)
        })


      }
        
    },[])

  return (
    <>
  {/* mobile only */}
  <div className="h-full w-full bg-white md:hidden flex flex-col justify-center px-2 fixed hidden">
    <button className=" absolute bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full bottom-8 right-8">
      Submit
    </button>
    <button className="bg-gray-300 h-10 w-10 rounded-full absolute top-5 left-5 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        viewBox="0 -960 960 960"
        width={24}
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
    <div className="flex justify-between px-3">
      <h1 className="text-xl">Add Points</h1>
      <div className="flex justify-end gap-2 text-[10px] flex-col items-center h-6/8 -mt-3">
        <div className="flex gap-2 items-center">
          <button className="bg-green-500 h-4 w-4 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="fill-white h-3 w-3"
            >
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
          </button>
          <p>Add Column</p>
        </div>
        <div className="flex gap-2 items-center">
          <button className="bg-red-500 h-4 w-4 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="fill-white h-3 w-3"
            >
              <path d="M200-440v-80h560v80H200Z" />
            </svg>
          </button>
          <p>Add Column</p>
        </div>
      </div>
    </div>
    {/* list1 */}
    <div className="flex gap-1">
      <div className="bg-accent h-10 rounded-full flex justify-between items-center px-2 text-[10px] gap-2">
        <p>1.</p>
        <p>SM13</p>
        <p>Muhammed Midlaj</p>
      </div>
      <div className="bg-accent h-10 w-[70%] rounded-full flex justify-center items-center px-2 text-[10px]">
        <div className="flex gap-1">
          <select
            name=""
            id=""
            className="flex items-center justify-center h-5 w-5 bg-white text-center rounded"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
          <select
            name=""
            id=""
            className="flex items-center justify-center h-5 w-7 bg-white text-center rounded"
          >
            <option value={1}>1st</option>
            <option value={2}>2nd</option>
            <option value={3}>3rd</option>
          </select>
        </div>
      </div>
    </div>
    {/* list2 */}
  </div>
  {/* desktop only */}
  <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:flex flex-col bg-white h-[80%] w-[80%] rounded-big py-5 overflow-hidden hidden">
    {/* title */}
    <button className=" absolute bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full bottom-8 right-8">
      Submit
    </button>
    <div className="flex justify-between px-5">
      <h1 className="text-3xl font-semibold">Add Point</h1>
      <button className="bg-gray-300 h-10 w-10 flex items-center justify-center rounded-full" onClick={()=>{
        props.setIsManualUploadOpen(false)
        
        console.log(toUploadForm);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={24}
          viewBox="0 -960 960 960"
          width={24}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
    </div>
    <hr className="border" />
    {/* + and - button */}
    <div className="h-16 flex items-center justify-start px-5">
    {
                props.Programme.programCode +" - " + props.Programme.name  +" - " + props.Programme.category?.name
            }
    </div>
    <hr className="border" />
    {/* Judgement List */}
    <div className="h-full flex flex-col pt-5 gap-2 overflow-y-auto">
      {/* 1 */}
      {
          props.Programme?.candidateProgramme?.map((item , index)=>{

            return(

                <div className="flex gap-5 px-5 h-14 w-full">
                {/* first */}
                <div className="flex gap-5 bg-accent h-14 w-1/3 rounded-xl px-5 items-center text-[10px] justify-between">
                  {/* <div className="flex items-center gap-5">
                    <p className="font-semibold">1</p>
                    <div className="bg-primary h-1 w-1 rounded-full" />
                  </div> */}
                  <p>{item.candidate?.chestNO}</p>
                  <p className="text-justify">{item.candidate?.name}</p>
                </div>
                {/* second */}
                <div className="flex gap-5 bg-accent h-14 w-2/3 rounded-xl px-5 items-center text-[10px] justify-center">
                  <div className="flex gap-2">
                    <select
                      name=""
                      id=""
                      className="bg-white h-10 w-10 rounded-lg justify-center flex items-center text-lg font-semibold text-primbg-primary text-center"
                      onChange={(e)=>{
                        let editedToUploadForm : any = toUploadForm.map((data)=>{
                          if(data.chestNo == item.candidate?.chestNO){
                            return {
                              ...data,
                              position : e.target.value
                            }
                          }
                          return data
                        })
                        // editedToUploadForm.position = e.target.value ;
                        setToUploadForm(editedToUploadForm)

                        console.log(editedToUploadForm , toUploadForm);
                        
                      }}
                    >
                      <option value="NIL">NIL</option>
                      <option value={1}>1st</option>
                      <option value={2}>2nd</option>
                      <option value={3}>3rd</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="bg-white h-10 w-10 rounded-lg justify-center flex items-center text-lg font-semibold text-primbg-primary text-center"
                      onChange={(e)=>{
                        let editedToUploadForm : any = toUploadForm.map((data)=>{
                          if(data.chestNo == item.candidate?.chestNO){
                            return {
                              ...data,
                              grade : e.target.value
                            }
                          }
                          return data
                        })
                        // editedToUploadForm.position = e.target.value ;
                        setToUploadForm(editedToUploadForm)
                        
                        console.log(editedToUploadForm , toUploadForm);
                        
                      }}
                    >
                      <option value="NIL">NIL</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                    </select>
                  </div>
                  <div className="flex gap-5 items-center"></div>
                </div>
              </div>

            )
          })
      }
     
    </div>
    <hr />
  </div>
</>

  )
}

export default ManualUpload