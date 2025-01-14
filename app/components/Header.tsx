import { Form, Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";

export default function Header() {

  const [isSignoutOpened, setIsSignoutOpened] = useState(false);
  const { user, auth } = useLoaderData();

  const toggleSignoutBtn = () => {
    setIsSignoutOpened((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/assets/logo.png" alt="logo" className="h-10" />
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold text-2xl leading-6">MonlamOCR</p>
          <p className="text-xs w-full">by MonlamAi</p>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <Link to={user?"/dashboard":"/login"} className="font-medium text-sm">
          DashBoard
        </Link>
        {user ? (
          <div className="flex items-center space-x-2 relative">
            <img
              src={user?.picture}
              alt="profile"
              className="h-10 w-10 cursor-pointer"
              onClick={toggleSignoutBtn}
            />
            {isSignoutOpened && (
              <div
                className="absolute shadow-lg right-0 top-full translate-y-2 border-[0.5px] border-neutral-600 bg-white block w-44 py-2 rounded-lg"
                onMouseLeave={() => setIsSignoutOpened(false)}
              >
                <div className="">
                  <Form method="post" action="/logout">
                    <button className="w-full py-2 rounded-lg text-sm font-medium text-neutral-800 hover:text-neutral-900 transition cursor-pointer">
                      Sign Out
                    </button>
                  </Form>
                </div>

                <div className="flex items-center justify-end space-x-1 border-t border-primary-700 p-2">
                  <img src="/assets/logo.png" alt="logo" className="h-8" />
                  <div className="flex flex-col items-start justify-start space-y-0">
                    <p className="font-bold text-sm">Tibcat</p>
                    <p className="text-[10px] -translate-y-1">by MonlamAi </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="font-medium text-sm">
            Signin
          </Link>
        )}
      </div>
    </div>
  );
}
