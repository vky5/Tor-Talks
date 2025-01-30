export default function ChatInput() {
    return (
      <>
        <div className="bg-[#232627] rounded-3xl shadow-lg flex items-center">
          <input
            type="text"
            className="w-full py-4 px-3 bg-[#232627] text-white rounded-3xl outline-none rounded-lg focus:outline-none "
            placeholder="Type a message..."
          />
          <button
            className="ml-4 bg-purple-500 text-white py-3 px-5 rounded-2xl hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Send
          </button>
        </div>
      </>
    );
  }
  