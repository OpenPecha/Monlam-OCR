import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Login from "./components/Login";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.hostname;
  const isLocal = domain === "localhost";

  const auth = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    host: isLocal ? "http://" + domain + ":3000" : "https://" + domain,
  };
  return { auth };
};
export default function SignIn() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
     <Login />
    </div>
  );
}
