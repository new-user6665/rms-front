import Judgement from "@/components/judgment/Judgment";

export default async function page({
  params,
}: {
  params: { chestNo: string };
}) {
  const programme = {
    name: "Balloon Breaking MLM",
    candidate: [
      {
        chestNo: "SM23",
        name: "Majid",
      },
      {
        chestNo: "SM24",
        name: "Muhammed Midlaj ",
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
    <main className="font-sans h-screen overflow-hidden flex bg-accent">
      <Judgement programme={programme} />
    </main>
  );
}
