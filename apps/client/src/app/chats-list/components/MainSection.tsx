import ChatInput from "./MainSectionComponents/ChatInput";
import ChatBubble from "./MainSectionComponents/ChatBubble";

export default function MainSection() {
  return (
    <div className="bg-bl-sec rounded-xl h-full w-full p-5 shadow-md relative flex flex-col">
      {/* Container for chat bubbles */}
      <div className="flex flex-col gap-4">
        {/* ChatBubble from user */}
        <ChatBubble isUserMessage={true} text="Hello from the other side" />
        {/* ChatBubble from other person */}
        <ChatBubble isUserMessage={false} text="Hi! How's it going?" />
      </div>
      
      <div className="absolute left-0 bottom-5 w-full px-5">
        <ChatInput />
      </div>
    </div>
  );
}
