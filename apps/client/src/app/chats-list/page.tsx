// Importing components
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";

export default function MainApplication() {
  return (
    <>
      <div className="flex">
        {/* Sidebar with fixed width */}
        <div className="min-h-screen w-1/5">
          {/* TODO when the website is below certain width close the sidebar */}
          <SideBar />
        </div>

        {/* MainSection takes the remaining space with padding */}
        <div className="flex-1 p-3">
          <MainSection />
        </div>
      </div>
    </>
  );
}
