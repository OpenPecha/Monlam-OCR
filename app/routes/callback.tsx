import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import LoadingRing from "~/components/LoadingRing";
import { useAuth0 } from "~/hooks/useAuth";
import { commitSession, getSession } from "~/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const domain = url.hostname;
  const isLocal = domain === "localhost";
  const auth = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    host: isLocal ? "http://" + domain + ":3000" : "https://" + domain,
  };
  return auth;
};

export const action: ActionFunction = async ({ request }) => {
  const formdata = await request.formData();
  const userValue = formdata.get("user") as string;
  let user = JSON.parse(userValue);
  const session = await getSession(request.headers.get("Cookie"));

  if (!user) return null;
  session.set("user", user);
  
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

function Route() {
  const data = useLoaderData();
  const auth0Config = {
    domain: data?.domain,
    clientID: data?.clientId,
    redirectUri: data?.host + "/callback",
    responseType: "token id_token",
  };
  const { handleAuthentication } = useAuth0(auth0Config);

  const startAuth = async () => {
    await handleAuthentication();
  };

  useEffect(() => {
    startAuth();
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingRing />
    </div>
  );
}

export default Route;
