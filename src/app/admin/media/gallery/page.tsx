import Tag from "@/components/admin/tag/Tag";
import { GetAllTagsDocument, GetAllTagsQuery, GetAllTagsQueryVariables } from "@/gql/graphql";
import { SectionIcon } from "@/icons/navs";
import { API_KEY } from "@/lib/env";
import { getUrqlClient } from "@/lib/urql";
import React from "react";
import Gallery from "@/components/admin/gallery/Gallery";

const page = async () => {


  const data = [
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Total Users",
      icon: <SectionIcon className="w-6 h-6 text-teal-600" />
    },
  ];

  const result = [
    {
      id: 1,
      name: "babu",
      imageId: "1BulI6CC5gGmsEpiEHkHXQeEcdAbFBRgB",
      createdAt: "2023-08-09T12:17:51.259Z",
      updatedAt: "2023-08-09T12:17:51.259Z"
    },
    {
      id: 2,
      name: "babu",
      imageId: "11RhjXf1vauhuIxSa_Kxj7jd7OATohs-W",
      createdAt: "2023-08-09T12:51:40.074Z",
      updatedAt: "2023-08-09T12:51:40.074Z"
    },
    {
      id: 3,
      name: "sinu",
      imageId: "1zPLqYWvcWz9Lzr3nBItEID4k6Ew-frIF",
      createdAt: "2023-08-10T07:19:34.766Z",
      updatedAt: "2023-08-10T07:19:34.766Z"
    },
    {
      id: 4,
      name: "sinu",
      imageId: "11iNkIaXA9Esd6MoyWtBRyBArlfWMERVT",
      createdAt: "2023-08-15T09:25:38.443Z",
      updatedAt: "2023-08-15T09:25:38.443Z"
    },
    {
      id: 5,
      name: "fsfa",
      imageId: "1gTB9PBCxrAexuJ4y1x53CvtbzoXqtnbg",
      createdAt: "2023-08-15T09:39:03.565Z",
      updatedAt: "2023-08-15T09:39:03.565Z"
    },
    {
      id: 6,
      name: "ew",
      imageId: "1cCSoKm5Onp6DI_uf6k6SqmaVTk7pOHEQ",
      createdAt: "2023-08-15T09:40:51.770Z",
      updatedAt: "2023-08-15T09:40:51.770Z"
    },
    {
      id: 7,
      name: "hisham",
      imageId: "1ABWxp_U_1MWb0v1ZEQqItDehhrL1sJXN",
      createdAt: "2023-08-15T09:42:56.309Z",
      updatedAt: "2023-08-15T09:42:56.309Z"
    },
    {
      id: 8,
      name: "janish",
      imageId: "1_FuOVuNno3f1SjUrnNl0UoLg-aOqaL65",
      createdAt: "2023-08-15T09:45:25.988Z",
      updatedAt: "2023-08-15T09:45:25.988Z"
    }
  ]
  const h = data[0]
  return (
    <main className="w-full h-full flex ">
      <Gallery key={1} data={data} result={result} pageProps={1} />
    </main>
  );
};

export default page;
