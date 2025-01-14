import { useLoaderData } from '@remix-run/react';
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
import { useAuth0 } from '~/hooks/useAuth';

export default function Login() {
  const { auth } = useLoaderData();

    const auth0Config = {
      domain: auth.domain,
      clientID: auth.clientId,
      redirectUri: auth.host + "/callback",
      responseType: "token id_token",
      scope: "email profile openid",
    };
    const { loginWithGoogle, loginWithApple } = useAuth0(auth0Config);

  return (
    <div className="flex item-center justify-center h-screen w-full lg:px-40">
      <div className="flex-1 flex flex-col justify-center items-center ">
        <img src="/assets/logo.png" alt="login" className="h-64" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center space-y-4 ">
        <img src="/assets/logo.png" alt="login" className="h-16" />
        <div className="flex flex-col items-center space-y-1 ">
          <div className="text-lg font-semibold font-poppins">
            SIGN UP/ SIGN IN ACCOUNT
          </div>
          <div className="text-sm font-medium font-poppins">
            Select any social to get started with TibCat
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <button
            className="flex items-center space-x-1 px-6 py-1 border-[0.5px] border-neutral-950 rounded-md hover:bg-primary-50"
            onClick={loginWithGoogle}
          >
            <FcGoogle size={30} />
            Google
          </button>
          <button
            className="flex items-center space-x-1 px-6 py-1 border-[0.5px] border-neutral-950 rounded-md hover:bg-primary-50"
            onClick={loginWithApple}
          >
            <IoLogoApple size={30} color="black" />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}
