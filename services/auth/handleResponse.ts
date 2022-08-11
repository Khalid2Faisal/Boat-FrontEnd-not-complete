import { useRouter } from "next/router";
import logout from "./logout";

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
