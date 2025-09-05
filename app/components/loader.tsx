"use client"

import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  return (
    <TypeAnimation
      sequence={[
        "$ Oh hi!🪶",
        1000,
        "$ I'm b4dr47",
        1000,
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={0}
      style={{ fontSize: '1.3em', display: 'inline-block' }}
    />
  );
};

export default Loader;
