import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Dashhero from "./components/Dashhero";
import { getUserSession } from "~/services/session.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Tibetan cat tool" },
    { name: "tibetan cat tool", content: "tibetan monlam cat tool" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.hostname;
  const isLocal = domain === "localhost";

  
  const user = await getUserSession(request);
  return { user };
};

export default function Index() {
  return <About />
}

