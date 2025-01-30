import { BsLayoutSidebarInset } from "react-icons/bs";

export default function LogoAndCollapse() {
  return (
    <>
      <div className="relative w-4/5 flex items-center justify-center ">
        {/* Text centered */}
        <h1 className="text-2xl font-extrabold  mx-auto">
          Tor Talks
        </h1>

        {/* Icon aligned to the right */}
        <span className="absolute right-0">
          <BsLayoutSidebarInset />
        </span>
      </div>
    </>
  );
}
