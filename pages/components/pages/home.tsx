import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "styles/Home.module.scss";

import { Home as Template } from "pages/components/templates/home";
import { Tomato } from "pages/components/atoms/tomato";

export const Home = () => {
  const [move, setMove] = useState(styles.box);
  const router = useRouter();
  const style = {
    width: 100,
    height: 100,
    color: "black",
  };

  const handleClick = (e) => {
    e.preventDefault();
    setMove(styles.box_move);

    setTimeout(() => {
      router.push("/about");
    }, 1300);
  };
  return (
    <div className={`${styles.container} ${styles.bgbk}`}>
      <Head>
        <title>19960216</title>
        <meta name="description" content="YOSUKE KATO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template />
      <Tomato />
      <Link href="/about">
        <a>about</a>
      </Link>
      <div className={`${styles.box} ${move}`}></div>
      <h2 onClick={handleClick} className={`${styles.white}`}>
        about
      </h2>
    </div>
  );
};
