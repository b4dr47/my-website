import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Oh hi!🪶</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          A high school student from Taiwan.
        </p>
        <p>
          Not a pro developer.
        </p>
        <p>
          Currently learning Rust/C++.
        </p>
      </div>
    </section>
  );
}
