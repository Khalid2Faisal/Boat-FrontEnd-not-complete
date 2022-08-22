import { useRouter } from "next/router";
import logout from "./logout";

/**
 * If the response status is 401, logout and redirect to the signin page with a message.
 * @param {any} response - The response object returned from the API call.
 * @returns Nothing.
 */
export default function handleResponse(response: any) {
  const router = useRouter();

  if (response.status === 401) {
    logout(() => {
      router.push({
        pathname: "/signin",
        query: {
          message: "Your session expired. please signin",
        },
      });
    });
  } else {
    return;
  }
}
