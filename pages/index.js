import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroIcons/react/solid";
import { SearchIcon } from "@heroIcons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Search Clone</title>
        <meta
          name="description"
          content="Google Search Clone developed by Bhagya Mudgal using Next.js and Tailwind CSS."
        />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://avatars.githubusercontent.com/u/76253604?v=4" />
        </div>
      </header>
    </div>
  );
}
