import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import NProgress from "nprogress";

import NavBar from "./NavBar";
import Footer from "./Footer";
import RegisterUser from "../Auth/RegisterUserModal";
import LoginUser from "../Auth/LoginUserModal";

import { useAppSelector } from "../../app/hooks";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

/* A configuration for the NProgress library. */
NProgress.configure({ showSpinner: false });

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter();
  const { showRegisterModal, showLoginModal } = useAppSelector(
    (state) => state.navigation.layout
  );

  /* This is a way to use the NProgress library to show a progress bar when the user navigates to a new
  page. */
  router.events?.on("routeChangeStart", () => NProgress.start());
  router.events?.on("routeChangeComplete", () => NProgress.done());
  router.events?.on("routeChangeError", () => NProgress.done());

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
      {showRegisterModal && <RegisterUser />}
      {showLoginModal && <LoginUser />}
    </div>
  );
}
