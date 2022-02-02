import styles from "styles/Home.module.scss";
import { TextTyping } from "pages/components/organisms/home/textTyping";
import { Typing } from "pages/components/organisms/home/typing";
import { Title } from "pages/components/organisms/home/title";

export const Home = () => {
  return (
    <main className={styles.main}>
      <div id="souseki">
        <TextTyping section="souseki">Yosuke Kato</TextTyping>
        <Typing section="tomato"></Typing>
      </div>
      <Title />
    </main>
  );
};
