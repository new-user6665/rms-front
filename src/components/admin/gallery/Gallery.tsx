"use client";
import InfoBar from "@/components/admin/InfoBar";
import RightSideBar from "@/components/admin/RightSideBar";
import { SERVER_URL } from "@/lib/urql";
import { withUrqlClient } from "next-urql";
import React, { useEffect, useState } from "react";
import { cacheExchange, fetchExchange } from "urql";
import { Gallery } from "@/gql/graphql";
// import Image from "next/image";
import ImgContainer from "./imgContainer";
// import fetchImages from "@/lib/fetchImages"
// import addBlurredDataUrls from "@/lib/getBase64"
import type { ImagesResults } from "./imageModel";
interface Props {
  data: {
    title: string;
    icon: any;
  }[];
  result: [];

}


const GalleryQ =async (props: Props) => {
  const [IsRightSideBarOpen, setIsRightSideBarOpen] = useState(false);
  const [SelectedGallery, setSelectedGallery] = useState({ id: 0, name: "" });
  const [isCreate, setIsCreate] = useState(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<[]>(props.result as any);


  // function downloadExcel() {
  //   const data = props.result;
  //   const replacer = (key: any, value: any) => (value === null ? "" : value); // specify how you want to handle null values here
  //   // const header = Object.keys(data[0]);
  //   let csv = data.map((row: any) =>
  //     header
  //       .map((fieldName) => JSON.stringify(row[fieldName], replacer))
  //       .join(",")
  //   );
  //   csv.unshift(header.join(","));
  //   let csvArray = csv.join("\r\n");

  //   var a = document.createElement("a");
  //   a.href = "data:attachment/csv," + csvArray;
  //   a.target = "_Blank";
  //   a.download = "Gallery.csv";
  //   document.body.appendChild(a);
  //   a.click();
  // }
  let img = new Image()
  let url = 'https://drive.google.com/uc?id=1BulI6CC5gGmsEpiEHkHXQeEcdAbFBRgB';
  (img as any).url = url;

   
  console.log( img.naturalWidth);
  console.log( img);

  img.onload = function () {
    console.log("natiral width is logging");
    
   console.log( img.naturalWidth);
   console.log( img);
  }
   
  useEffect(()=>{
    let img = new Image()
    let url = 'https://drive.google.com/uc?id=1BulI6CC5gGmsEpiEHkHXQeEcdAbFBRgB';
    (img as any).url = url;

    img.onload = function () {
      console.log("natiral width is logging");
      
     console.log( img.naturalWidth);
     console.log( img);
     
    }

  },[])


  


  // const images: ImagesResults | undefined = await fetchImages(`https://drive.google.com/uc?id=1BulI6CC5gGmsEpiEHkHXQeEcdAbFBRgB`)

  // if (!images) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>

  // const photosWithBlur = await addBlurredDataUrls(images)
  return (
    <>

    <div className="w-88 h-88 bg-black" onClick={()=>{
      
   

    }}>

    </div>
     
    </>
  );
};



export default withUrqlClient(() => ({
  url: SERVER_URL,
  exchanges: [fetchExchange, cacheExchange],
  fetchOptions: {
    cache: "no-cache",
    credentials: "include",
  },
}))(GalleryQ);  



