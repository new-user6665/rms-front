"use client";
import {
  AddCandidateDocument,
  AddCandidateMutation,
  AddCandidateMutationVariables,
  Mode,
  Model,
  Candidate,
  Type,
  Category,
  Team,
} from "@/gql/graphql";
import { SERVER_URL } from "@/lib/urql";
import React from "react";
import { OperationResult, useMutation } from "urql";

interface Props {
  data: Candidate[];
  setData: React.Dispatch<React.SetStateAction<Candidate[]>>;
  categories: Category[];
  teams: Team[];
}

const CreateCandidate = (props: Props) => {
  const [name, setName] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [chestNO, setChestNO] = React.useState<string>();
  const [team, setTeam] = React.useState<string>("");
  const [adno, setAdno] = React.useState<number>();
  const [classs, setClass] = React.useState<string>("");
  const [image, setImage] = React.useState<File>();
  const [state, CreateCandidateExecute] = useMutation(AddCandidateDocument);

  const HandleSubmit = async (data: any) => {
    const datas: OperationResult<
      AddCandidateMutation,
      AddCandidateMutationVariables
    > = await CreateCandidateExecute({
      name: data.name,
      category: data.category,
      chestNO: data.chestNO,
      team: data.team,
      adno: data.adno,
      class: data.class,
    });

    console.log(datas);

    if (datas.data?.createCandidate) {
      // upload image to server
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
          "chestNo",
          datas.data?.createCandidate.chestNO as string
        );

        console.log(formData.get("chestNo"));

        // upload image to server using axios
        const res = await fetch(
          `https://rms-omega-six.vercel.app/candidates/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        console.log(await res.json());
      }
      alert("Candidate Added");
      props.setData([...props.data, datas.data?.createCandidate as Candidate]);
    } else {
      alert(datas.error?.message.split("]")[1]);
    }
  };

  function imageVerify(file: File) {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (types.every((type) => file.type !== type)) {
      alert(`${file.type} is not a supported format`);
      return false;
    }
    return true;
  }

  return (
    <div>
      <h1>Create Candidate</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          HandleSubmit({ name, category, chestNO, team, adno, classs });
        }}
      >
        {/* image upload */}

        <p>Image</p>

        {/* show the uploaded image for verification for user */}

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="image"
            className="w-24 h-24"
          />
        )}

        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              const file = e.target.files[0];
              if (imageVerify(file)) {
                setImage(file);
              }
            }
          }}
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <input
          type="text"
          value={chestNO}
          onChange={(e) => setChestNO(e.target.value)}
          placeholder="chestNO"
        />
        <input
          type="number"
          value={adno}
          onChange={(e) => setAdno(parseInt(e.target.value))}
          placeholder="adno"
        />
        <input
          type="text"
          value={classs}
          onChange={(e) => setClass(e.target.value)}
          placeholder="class"
        />
        <p>Category</p>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {props.categories.map((value, index) => {
            return (
              <option key={index} value={value.name as string}>
                {value.name}
              </option>
            );
          })}
        </select>
        <p>Team</p>
        <select value={team} onChange={(e) => setTeam(e.target.value)}>
          {props.teams.map((value, index) => {
            return (
              <option key={index} value={value.name as string}>
                {value.name}
              </option>
            );
          })}
        </select>

        <button
          className="bg-fuchsia-600"
          type="submit"
          disabled={state.fetching}
        >
          {state.fetching ? "Loading" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateCandidate;
