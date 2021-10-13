import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import { useRef } from "react";
import {
  XIcon,
  MicrophoneIcon,
  SearchIcon,
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from "@heroIcons/react/solid";

import response from "../response";

function Search({ results }) {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
    searchInputRef.current.value = "";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e);
    }
  };

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>

      <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
          <Image
            width={135}
            height={70}
            src={
              "https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"
            }
            alt="google-search-logo"
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          />

          <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
            <input
              type="text"
              className="flex-grow w-full focus:outline-none"
              ref={searchInputRef}
              onKeyPress={handleKeyPress}
            />
            <XIcon
              className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 mr-3"
              onClick={() => {
                searchInputRef.current.value = "";
              }}
            />
            <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300 cursor-pointer" />
            <SearchIcon
              className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"
              onClick={search}
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          <Avatar
            url="https://avatars.githubusercontent.com/u/76253604?v=4"
            className="ml-auto"
          />
        </div>

        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
          <div className="flex space-x-6">
            <span className="flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 text-blue-500 border-blue-500">
              <SearchIcon className="h-4" />
              <p className="hidden sm:inline-flex">All</p>
            </span>
            <span className="flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3">
              <PhotographIcon className="h-4" />
              <p className="hidden sm:inline-flex">Images</p>
            </span>
            <span className="flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ">
              <PlayIcon className="h-4" />
              <p className="hidden sm:inline-flex">Videos</p>
            </span>
            <span className="flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ">
              <NewspaperIcon className="h-4" />
              <p className="hidden sm:inline-flex">News</p>
            </span>
            <span className="flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ">
              <MapIcon className="h-4" />
              <p className="hidden sm:inline-flex">Maps</p>
            </span>
            <span className="flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ">
              <DotsVerticalIcon className="h-4" />
              <p className="hidden sm:inline-flex">More</p>
            </span>
          </div>
          <div className="flex space-x-4">
            <p className="link">Settings</p>
            <p className="link">Tools</p>
          </div>
        </div>
      </header>

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export const getServerSideProps = async (ctx) => {
  const useDummyData = true;
  const responseData = useDummyData
    ? response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${ctx.query.term}`
      );

  const data = useDummyData ? responseData : await responseData.json();

  return {
    props: {
      results: data,
    },
  };
};
