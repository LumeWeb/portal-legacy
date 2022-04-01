import useSWR from "swr";
import { useRouter } from "next/router";
import { StatusCodes } from "http-status-codes";

const fetcher = (url, router) => {
  return fetch(url).then((res) => {
    if (res.status === StatusCodes.OK) router.push("/");
  });
};

export default function useAnonRoute() {
  const router = useRouter();

  return useSWR("/api/user", (url) => fetcher(url, router));
}
