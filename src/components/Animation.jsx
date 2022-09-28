
import Dev from "../assets/hero.json";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Devanimate = () => {
  const container = useRef(null);
  useEffect(()=>{
    lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: Dev,
      });
},[]);

  return (
      <div
        ref={container}
      ></div>
   
  );
};

export default Devanimate;