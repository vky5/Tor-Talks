// importing components
import Functionality from "./SideBarComponents/Functionality";
import LogoAndCollapse from "./SideBarComponents/LogoAndCollapse";
import ChatsandGroups from "./SideBarComponents/ChatsandGroups";
import NewChatButton from "./SideBarComponents/NewChat";

export default function SideBar() {
  return (
    <>
      {/* this is the external and main div that will give structure set height width and rest of the thing for other parts in it */}
      <div className=" flex justify-center h-screen pt-10">
        <div className=" w-5/6 flex flex-col items-center space-y-4">
          <div className="pb-5 w-full flex justify-center">
            {/* contains logo and side bar collapse button */}
            <LogoAndCollapse />
          </div>
          
          <div className="w-full"> 
            {/* contain settigns, updates and rest of the stuff */}
            <Functionality />
          </div>

          <hr className="w-full border-t-2 border-gray-400" /> { /* Horizontal Line*/}
          <div className="w-full">
            <NewChatButton />
          </div>
          <div className="w-full space-y-5">
            <ChatsandGroups />
            <ChatsandGroups />
            <ChatsandGroups />
            <ChatsandGroups />
            <ChatsandGroups />
            <ChatsandGroups />  
          </div>

        </div>
      </div>
    </>
  );
}
