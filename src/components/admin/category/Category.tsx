"use client";
import InfoBar from '@/components/admin/InfoBar'
import OneCategory from '@/components/admin/category/OneCategory';
import RightSideBar from '@/components/admin/RightSideBar'
import { SERVER_URL } from '@/lib/urql';
import { withUrqlClient } from 'next-urql';
import React, { useEffect, useState } from 'react'
import { cacheExchange, fetchExchange } from 'urql';
import CreateCategory from './CreateCategory';

interface Props {
    data: {
        title: string;
        icon: any;
    }[];
    result: any;
}

const Category = ( props : Props ) => {

    const [IsRightSideBarOpen, setIsRightSideBarOpen] = useState(false)
    const [SelectedCategory, setSelectedCategory] = useState({id: 0, name: ""})
    const [isCreate , setIsCreate] = useState(false)

    useEffect(() => {
        !IsRightSideBarOpen && setIsCreate(false)
    }, [])

  return (
    <>
    <div className="w-full h-full">
        <InfoBar data={props.data} />

        <div className="w-full h-5/6 bg-base-200 rounded-lg mt-[1%]" >
        <div>
            {/* search bar */}
            <div className="w-full h-10 bg-base-300 rounded-lg mt-[1%] cursor-pointer" >
                <div className="w-1/3 h-full float-left" >
                    <input type="text" />
                </div>
                <div className="w-1/3 h-full float-left" >
                   <button className='bg-green-600' onClick={()=> {
                        setIsCreate(true)
                        setIsRightSideBarOpen(true)
                   }}>Create</button>
                </div>
                </div>

        </div>
        {
            props.result.map((item: any , index : number) => {
               return(
                <div key={index} className="w-1/2 h-10 bg-base-100 rounded-lg mt-[1%] cursor-pointer"  onClick={()=> {setIsRightSideBarOpen(true) ; setSelectedCategory(item) }} >   
                    <div className="w-1/3 h-full float-left" >
                        <p className="text-base-content" >{item.name}</p>
                    </div>
                    <div className="w-1/3 h-full float-left" >
                        <p className="text-base-content" >{item.id}</p>
                    </div>
                    <div className="w-1/3 h-full float-left" >
                        <p className="text-base-content" >{item.updatedAt}</p>
                    </div>
                </div>
               )
            })
        }


        </div>
      </div>
        <RightSideBar key={1} isOpen={IsRightSideBarOpen} setIsOpen={setIsRightSideBarOpen} >
            {
                !isCreate ? <OneCategory key={1} name={SelectedCategory.name} id={SelectedCategory.id}  setIsCreate={setIsCreate}/> : <CreateCategory key={2} />
            }
        </RightSideBar>
    </>
  )
}

export default withUrqlClient(() => ({
    url: SERVER_URL,
    exchanges: [fetchExchange, cacheExchange],
    fetchOptions: {
      cache: "no-cache",
    },
  }))(Category);