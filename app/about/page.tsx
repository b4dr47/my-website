import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resource",
  description: "Introducing resource",
};

export default function Resource() {
  return (
    <section>
      <h1 className="text-2xl mx-auto sm:float-start sm:ml-5 sm:mb-5 font-medium">About me</h1>
        <Image
            src="/opengraph-image.png"
            alt="Moom!"
            className="rounded-lg lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-left sm:ml-5 sm:mb-5"
            unoptimized
            width={1600}
            height={900}
            priority
        />
        <div className="prose prose-neutral dark:prose-invert mx-auto sm:float-start sm:ml-5 sm:mb-5">
            <h2>
                I'm b4dr47(It's called Badrat)
            </h2>
            <p>
                FPS Gamer
            </p>
            <p>
                VTuber/Anime Enjoyer
            </p>
                <h3>
                   Education
                </h3>
                    <ul>
                        <li>
                            Taipei Municipal Chien Kuo High School
                        </li>
                    </ul>
                <h3>
                    Skills
                </h3>
                    <ul>
                        <li>
                            Fullstack Developer
                        </li>
                        <li>
                            Discord Bot Developer
                        </li>
                        <li>
                            Currently Learning Rust & C++
                        </li>
                    </ul>
        </div>
    </section>
  );
}
