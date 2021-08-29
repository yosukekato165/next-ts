import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.scss";
import useMousePosition from "pages/components/atoms/mouse";

export const Tomato = () => {
  const { x, y } = useMousePosition();
  const [res, setRes] = useState("");
  const changeColor = () => {
    document.querySelector("#tomato").classList.toggle(styles.blue);

    axios
      .get("http://localhost:50500/")
      .then((re) => {
        console.log(re);
        setRes(String(re.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <p id="tomato" className={styles.text}>
        {x}
        <br />
        {y}
      </p>
      <button type="button" onClick={changeColor}>
        ボタン
      </button>
      <h3>{res}</h3>
    </>
  );
};
