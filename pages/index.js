import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="h-96 w-full bg-gray-50 relative overflow-y-auto bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300"></div>
      <div className="hidden md:block top-96 z-10 absolute right-44 lg:right-80">
        <Image width={300} height={300} src="/assets/img-1.svg" alt="Logo" />
      </div>
      <div className="hidden md:block top-56 z-10 absolute right-52 lg:right-88">
        <Image width={150} height={150} src="/assets/img-2.svg" alt="Logo" />
      </div>
      <div className="hidden md:block top-72 z-10 absolute right-3 lg:right-40">
        <Image width={250} height={250} src="/assets/img-3.svg" alt="Logo" />
      </div>
      <span className="text-white z-10 lg:text-6xl text-4xl font-extrabold absolute top-96 left-10 lg:mt-0 mt-5">
        SaaS Makes
      </span>
      <span className="z-10 lg:text-6xl text-4xl font-extrabold absolute top-112 left-10">
        Easy Pizy
      </span>

      <div className="h-80 w-full bg-gray-50 relative overflow-y-auto">
        <span className="md:w-1/3 text-gray-800 absolute left-10 top-24 font-thin">
          You just focus on the crafting the idea of your mind, we will take
          care of making it live to your audiance.
        </span>
        <a
          href="#"
          className="absolute left-10 top-44 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold"
        >
          Get started
        </a>
      </div>
      <div className="text-center h-128 w-full bg-gray-50 relative overflow-y-auto">
        <span className="text-gray-400 font-serif">
          SOME OF OUT TRUSTED CLIENTS
        </span>
        <div className="p-10 md:flex sm:block md:space-x-12 lg:space-x-32 justify-center">
          <div>
            <Image
              className=""
              width={50}
              height={30}
              layout="fixed"
              src="/assets/asana.svg"
              alt="Logo"
            />
          </div>
          <div>
            <Image
              className=""
              width={50}
              height={30}
              layout="fixed"
              src="/assets/walmart.svg"
              alt="Logo"
            />
          </div>
          <div>
            <Image
              className=""
              width={50}
              height={30}
              layout="fixed"
              src="/assets/buzzfeed.svg"
              alt="Logo"
            />
          </div>
          <div>
            <Image
              className=""
              width={50}
              height={30}
              layout="fixed"
              src="/assets/chase.svg"
              alt="Logo"
            />
          </div>
          <div className=" block">
            <Image
              className=""
              width={50}
              height={30}
              layout="fixed"
              src="/assets/google.svg"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page) => <Layout meta={{}}>{page}</Layout>;

export default Home;
