import Button from "~/components/Buttons";
import { Link, useLoaderData } from "@remix-run/react";

export default function About() {
  const { user } = useLoaderData()

  return (
        <div className="flex flex-col md:flex-row gap-8 h-full">
          <div className="flex-1 flex items-center justify-center">
            <img src="/assets/hero.png" alt="about" className="w-full" />
          </div>
          <div className="flex-1 flex items-center justify-center flex-col space-y-2">
            <div>
              <div className="text-3xl font-semibold">
                Transcribe Tibetan Text
              </div>
            </div>
            <div className="text-md font-medium">
              Empowering Tibetan Translators, Connecting Cultures
            </div>
            <Button color="neutral" className=" py-2 px-4">
              <Link to={user ? "/dashboard" : "/login"}> Get Started </Link>
            </Button>
          </div>
        </div>
  );
}
