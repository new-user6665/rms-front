import Profile from "@/components/candidate/Profile";
import DesktopView from "@/components/program/DesktopView";
import MobileView from "@/components/program/MobileView";
import TabView from "@/components/program/TabView";

export default async function page({
  params,
}: {
  params: { chestNo: string };
}) {
  return (
    <main className="bg-accent w-screen h-screen">
      {/* Mobile View */}
      <MobileView />
      {/* Tab View */}
      <TabView />
      {/* Desktop View */}
      <DesktopView />
    </main>

  );
}
