import {
  EditCandidateDocument,
  EditCandidateMutation,
  EditCandidateMutationVariables,
  Mode,
  Model,
  Candidate,
  Type,
  Category,
  Team,
} from "@/gql/graphql";
import React from "react";
import { OperationResult, useMutation } from "urql";

interface Props {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  data: Candidate[];
  setData: React.Dispatch<React.SetStateAction<Candidate[]>>;
  selectedCandidate: Candidate;
  categories: Category[];
  teams: Team[];
}

const EditCandidate = (props: Props) => {
  const [name, setName] = React.useState<string>(
    props.selectedCandidate.name as string
  );
  const [category, setCategory] = React.useState<string>(
    props.selectedCandidate?.category?.name as string
  );
  const [team, setTeam] = React.useState<string>(
    props.selectedCandidate.team?.name as string
  );
  const [adno, setAdno] = React.useState<number>(
    props.selectedCandidate.adno as number
  );
  const [classs, setClass] = React.useState<string>(
    props.selectedCandidate.class as string
  );
  const [image, setImage] = React.useState<File>();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [state, UpdateCandidateExecute] = useMutation(EditCandidateDocument);

  const HandleSubmit = async (data: any) => {
    console.log(data);

    setIsLoading(true);
    const updatedData: OperationResult<
      EditCandidateMutation,
      EditCandidateMutationVariables
    > = await UpdateCandidateExecute({
      id: props.selectedCandidate.id as number,
      name: data.name,
      category: data.category,
      adno: data.adno,
      chestNO: data.chestNO,
      class: data.class,
      team: data.team,
    });

    console.log(updatedData);

    if (updatedData.data?.updateCandidate) {
      alert("Candidate Updated");
      const updatedDates = props.data.map((value, index) => {
        if (value.id == updatedData.data?.updateCandidate?.id) {
          return (value = updatedData.data?.updateCandidate as Candidate);
        } else {
          return value;
        }
      });
      console.log(updatedDates);

      props.setData(updatedDates as Candidate[]);
    } else if (updatedData.error?.message) {
      alert(updatedData.error?.message.split("]")[1]);
    } else {
      alert("Candidate Not Updated");
    }
    setIsLoading(false);
    props.setIsEdit(false);
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
      <button className="bg-green-500" onClick={() => props.setIsEdit(false)}>
        Back
      </button>
      <h1>Edit Candidate</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          HandleSubmit({ name, category, team, adno, classs });
        }}
      >
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="image"
            className="w-24 h-24"
          />
        ) : props.selectedCandidate?.imageId ? (
          <img
            src={`https://drive.google.com/uc?id=${props.selectedCandidate?.imageId}`}
            alt="image"
            className="w-24 h-24"
          />
        ) : (
          <img
            src={`https://drive.google.com/uc?id=1469PGeDEgnK5caEumLfGGUufCI0MY133`}
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
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
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
        <p>Adno</p>
        <input
          type="number"
          value={adno}
          onChange={(e) => setAdno(parseInt(e.target.value))}
          placeholder="adno"
        />
        <p>Class</p>
        <input
          type="text"
          value={classs}
          onChange={(e) => setClass(e.target.value)}
          placeholder="class"
        />

        <button className="bg-fuchsia-600" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditCandidate;
