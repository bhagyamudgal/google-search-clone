import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MicrophoneIcon } from "@heroIcons/react/solid";
import { SearchIcon } from "@heroIcons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
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
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Search Clone</title>
        <meta
          name="description"
          content="Google Search Clone developed by Bhagya Mudgal using Next.js and Tailwind CSS."
        />
        <link rel="icon" href="https://www.google.com/favicon.ico" />
      </Head>

      <Header />

      <form className="flex flex-col items-center flex-grow w-4/5 mt-32">
        <Image
          width={"350"}
          height={"200"}
          src={
            "https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"
          }
          alt="google-search-logo"
        />
        <div className="flex w-full mt-5  hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
            onKeyPress={handleKeyPress}
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex space-x-4 justify-center mt-8">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
        <div className="flex space-x-3 justify-center flex-wrap mt-4 text-sm w-full">
          <p className="text-gray-700">Google offered in: </p>
          <p className="link-2">हिन्दी</p>
          <p className="link-2">বাংলা</p>
          <p className="link-2">తెలుగు</p>
          <p className="link-2">मराठी</p>
          <p className="link-2">தமிழ்</p>
          <p className="link-2">ગુજરાતી</p>
          <p className="link-2">ಕನ್ನಡ</p>
          <p className="link-2">മലയാളം</p>
          <p className="link-2">ਪੰਜਾਬੀ</p>
        </div>
      </form>

      <Footer />
    </div>
  );
}
