import { useEffect } from "react";

import styles from "styles/Home.module.scss";
import { gsap } from "gsap";
import { Text_animation } from "pages/components/molecules/text_animation";

export const Title = () => {
  useEffect(() => {
    gsap.from("#title", {
      opacity: 0,
      y: 100,
      duration: 1,
    });
  });
  return (
    <>
      <h1 id="title" className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Text_animation />
    </>
  );
};
