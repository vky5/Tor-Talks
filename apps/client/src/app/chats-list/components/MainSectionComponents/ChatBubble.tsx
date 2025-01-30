export default function ChatBubble({ isUserMessage, text }: { isUserMessage: boolean, text: string }) {
  return (
    <div
      className={`${
        isUserMessage ? 'bg-purple-500 text-white' : 'bg-bl-pri text-pri-Text'
      } max-w-xs p-4 rounded-xl mb-2 self-${isUserMessage ? 'end' : 'start'}`}
    >
      {text}
    </div>
  );
}
