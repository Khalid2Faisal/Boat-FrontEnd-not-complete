import Head from "next/head";
import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="">
      <Head>
        <title>{(title && title) || "Boat Blog"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NavBar />
      </div>

      <main className="">{children}</main>

      <footer className="bg-indigo-50 xl:px-8 mt-8 sm:mt-16 shadow-2xl">
        <Footer />
      </footer>
    </div>
  );
}
