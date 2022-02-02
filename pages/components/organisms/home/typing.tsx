import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { EasePack } from "gsap/EasePack";
import styles from "styles/Home.module.scss";

export const Typing = (props) => {
  // const textRef = useCallback((node) => {
  //   if (node !== null) {
  //     // const text = node.innerHTML; //テキストを読み込む
  //     const height = node.clientHeight; //高さを取得する
  //     node.innerHTML = ""; //テキストを削除する
  //     node.style.height = height + "px"; //高さを設定する
  //     setAnimation();
  //   }
  // }, []);

  const setAnimation = () => {
    const words = ["Jesse.", "A Father.", "A Husband.", "A Developer."];
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(EasePack);
    let masterTl = gsap.timeline({ repeat: -1 }).pause();

    words.forEach(async (word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(`.animation-textt`, { duration: 1, text: word });
      masterTl.add(tl);
    });
  };

  useEffect(() => {
    setAnimation();
  });

  return (
    <p
      // ref={textRef}
      className={`animation-textt ${styles.white} ${styles.title}`}
    ></p>
  );
};
