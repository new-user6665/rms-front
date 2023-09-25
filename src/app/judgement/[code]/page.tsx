import Judgement from "@/components/judgement/Judgement";

export default async function page({
  params,
}: {
  params: { chestNo: string };
}) {
  const programme = {
    name: "Balloon Breaking MLM",
    candidate: [
      {
        chestNo: "SM123",
        name: "Majid",
      },
      {
        chestNo: "SM124",
        name: "Muhammed Midlaj",
      },
      {
        chestNo: "SM125",
        name: "Muhammed Midlaj",
      },
      {
        chestNo: "SM126",
        name: "Muhammed Midlaj",
      },
    ],
  };
  

  return (
    <main className="font-sans h-screen overflow-hidden flex">
      <Judgement programme={programme} />
    </main>
  );
}
