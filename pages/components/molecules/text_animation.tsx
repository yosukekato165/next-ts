import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export const Text_animation = () => {
  gsap.registerPlugin(TextPlugin);

  const text = {
    title: "title",
  };

  const splitedText = text.title.split("");
  const splitedTextInSpan = splitedText.map((e) => <span key={e}>{e}</span>);
  useEffect(() => {
    gsap.fromTo(
      "#subtitle span",
      {
        y: 50,
        opacity: 0,
      },
      {
        delay: 0, // 1秒後に発火
        duration: 1, // 1秒間
        y: 0,
        opacity: 1,
        ease: "power2.easeOut",
        stagger: {
          from: "start", // 左側から
          amount: 0.5, // 0.5秒おきに
        },
      }
    );
  });

  return (
    <>
      <h2 id="subtitle">{splitedTextInSpan}</h2>
    </>
  );
};
