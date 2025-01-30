import { FiPlus } from "react-icons/fi";

export default function NewChatButton() {
  return (
    <button className="flex items-center justify-start gap-5 w-full">
      <div className="flex items-center justify-center w-7 h-7 bg-gray-200 rounded-full">
        <FiPlus className="text-black text-lg" />
      </div>
      New Chat
    </button>
  );
}
