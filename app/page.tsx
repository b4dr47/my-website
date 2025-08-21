import Image from "next/image";
import { socialLinks } from "./lib/config";
import {FaSchool, FaCode, FaGamepad} from 'react-icons/fa';

export default function Page() {
    return (
        <section>
            <a href={socialLinks.twitter} target="_blank">
                <Image
                    src="/profile.png"
                    alt="pfp"
                    className="rounded-lg block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
                    unoptimized
                    width={160}
                    height={160}
                    priority
                />
            </a>
            <h1 className="mb-8 text-2xl"><b>b4dr47</b></h1>
            <div className="flex items-center mt-3">
                <span className="flex text-lg gap-3.5 float-right transition-opacity duration-300 items-center hover:opacity-90"><FaSchool/>Student</span>
            </div>
            <div className="flex items-center mt-3">
                <span className="flex text-lg gap-3.5 float-right transition-opacity duration-300 items-center hover:opacity-90"><FaCode/>Dev</span>
            </div>
            <div className="flex items-center mt-3">
                <span className="flex text-lg gap-3.5 float-right transition-opacity duration-300 items-center hover:opacity-90"><FaGamepad/>Gamer</span>
            </div>
        </section>
    );
}