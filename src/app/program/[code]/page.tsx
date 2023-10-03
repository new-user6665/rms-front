import DesktopView from "@/components/program/DesktopView";
import MobileView from "@/components/program/MobileView";
import TabView from "@/components/program/TabView";
import {
  Candidate,
  CandidateProgramme,
  GetProgrammeByCodeDocument,
  GetProgrammeByCodeQuery,
  GetProgrammeByCodeQueryVariables,
  Programme,
} from "@/gql/graphql";
import { API_KEY } from "@/lib/env";
import { getUrqlClient } from "@/lib/urql";

export default async function page({ params }: { params: { code: string } }) {
  const { client } = getUrqlClient();
  const result = await client.query<
    GetProgrammeByCodeQuery,
    GetProgrammeByCodeQueryVariables
  >(GetProgrammeByCodeDocument, {
    api_key: API_KEY,
    programCode: params.code,
  });

  const programme: Programme = result?.data?.programmeByCode as Programme;
  

  return (
    <main className="bg-accent w-screen h-screen">
      {/* Mobile View */}
      <MobileView />
      {/* Tab View */}
      <TabView />
      {/* Desktop View */}
      <DesktopView programme={programme} />
    </main>
  );
}
