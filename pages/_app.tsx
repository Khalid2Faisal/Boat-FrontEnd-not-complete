import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/nprogress/nprogress.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer hideProgressBar limit={1} />
    </Provider>
  );
}

export default MyApp;
