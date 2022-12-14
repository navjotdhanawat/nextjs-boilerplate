import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useCallback, useState } from "react";
import Menu from "./menu";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = useCallback(() => setShowSidebar((value) => !value));

  useEffect(() => {
    console.log("Home mounted...");
    return () => {
      console.log("Home unmounted...");
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu onClick={toggleSidebar} />
      <div className="flex overflow-hidden bg-white pt-16">
        <div
          onClick={toggleSidebar}
          className={`${
            showSidebar ? "hidden" : "show"
          } bg-gray-900 opacity-50 fixed inset-0 z-10`}
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <Sidebar showSidebar={showSidebar} />
          <main>{children}</main>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
