import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <nav className="flex flex-row-2 justify-between mx-4 gap 4">
        <div className="font-bold">uakubue</div>
        
        <Link href="/users">
          <button className="cursor-pointer font-bold">Posts</button>
        </Link>
      </nav>
    </div>
  );
}
