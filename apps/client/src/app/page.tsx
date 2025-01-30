import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/chats-list">
        <button>Go to chats-list</button>
      </Link>
    </>
  );
}
