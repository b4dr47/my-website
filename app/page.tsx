import Image from "next/image";
import React from "react";
import Tooltip from "./components/tooltip";
import Loader from "./components/loader";
import { socialLinks } from "./lib/config";


export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="pfp"
          className="rounded-full lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl"><b><Loader /></b></h1>
      <div className="flex items-center mt-3">
        <Tooltip />
      </div>
    </section>
  );
}
