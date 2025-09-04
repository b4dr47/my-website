"use client"

import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  return (
    <TypeAnimation
      sequence={[
        "$ Oh hi!🪶",
        1000,
        "$ b4dr47",
        1000,
        "$ Badrat🐀",
        1000,
        "$ Taiwan🇹🇼",
        1000,
        "$ Student🎓",
        1000,
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.3em', display: 'inline-block' }}
    />
  );
};

export default Loader;
