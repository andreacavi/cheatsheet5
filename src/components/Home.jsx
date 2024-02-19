import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.heading}>
        Looking for a way to learn React Hooks?!
      </h1>
      <h2 className={styles.subheading}>Pick your favorite Hook!</h2>
      <div className={styles.container}>
        <a href="/useState">
          <div className={styles.card} id={styles.card1}>
            <h2>useState</h2>
          </div>
        </a>
        <a href="/useEffect">
          <div className={styles.card} id={styles.card2}>
            <h2>useEffect</h2>
          </div>
        </a>
        <a href="/useContext">
          <div className={styles.card} id={styles.card3}>
            <h2>useContext</h2>
          </div>
        </a>
      </div>
    </div>
  );
}
