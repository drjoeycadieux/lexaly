import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <ul>
          <li><p>Lexaly Dev</p></li>
          <li><a href="/">Welcome</a></li>
        </ul>
      </div>

      <div className={styles.header}>
        <p>
          Lexaly Dev
        </p>
        <a href="#" className={styles.button}>Get Started</a>
      </div>

      <div className={styles.container}>
        <p>
          In Development
        </p>
      </div>

      {/* <div className={styles.footer}>
          <p>
          &copy; 2024 Lexaly Dev. All Rights Reserved.
        </p>
      </div> */}
    </main>
  );
}
