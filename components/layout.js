import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    console.log("Home mounted...");
    return () => {
      console.log("Home unmounted...");
    };
  }, []);

  const links = [
    {
      link: "Home",
      type: "link",
      path: "/",
    },
    {
      link: "Dashboard",
      type: "link",
      path: "/dashboard",
    },
    {
      link: "Features",
      type: "link",
      path: "/features",
    },
    {
      link: "Pricing",
      type: "link",
      path: "/pricing",
    },
    {
      link: "About",
      type: "link",
      path: "/about",
    },
    {
      link: "Login",
      type: "button",
      path: "/login",
    },
  ];
  return (
    <div>
      <Head>
        <title>SwissKnife</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="h-16 z-30 fixed w-full p-6 bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-300">
        <div className="flex items-center justify-between">
          <div>{/* <Tailwind /> */}</div>

          <div className="md:hidden">
            <button>
              <svg
                className="h-8 w-8 fill-current text-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-sans">
              {links.map(({ path, link, type }) => {
                return (
                  <li key={path}>
                    <Link href={path}>
                      <span
                        className={`${
                          type !== "button"
                            ? router.pathname === path
                              ? "text-white border-b-2 border-white hover:border-gray-200 pb-1"
                              : ""
                            : "bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold"
                        } cursor-pointer`}
                      >
                        {link}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="hidden bg-white justify-between items-center w-1/2 right-20 absolute">
          <ul className="flex flex-col mt-4 font-medium">
            {links.map(({ path, link, type }) => {
              return (
                <>
                  {type === "button" && (
                    <hr className="border-gray-200 dark:border-gray-700 " />
                  )}
                  <li key={path}>
                    <Link href={path}>
                      <span
                        className={`${
                          router.pathname === path ? "" : ""
                        } cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100`}
                      >
                        {link}
                      </span>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
      <main className="pt-16">{children}</main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
