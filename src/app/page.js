import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <ul>
          <li><p>Lexaly</p></li>
          <li><a href="/">Welcome</a></li>
        </ul>
      </div>

      <div className={styles.header}>
        <p>
          Lexaly
        </p>
        <h3>
          "Welcome to LexaLy AI, your ultimate language solution for the digital era! LexaLy AI, built on the latest Next.js framework, is your indispensable tool for mastering language skills in today's fast-paced world.
        </h3>
        <a href="#" className={styles.button}>Get Started</a>
      </div>

      <div className={styles.container}>
        <h1>Welcome to Lexaly AI</h1>
        <p>Master language skills effortlessly with Lexaly AI.</p>

        <p>Create high-quality content, refine your style, and communicate with confidence.</p>

        <p>Join us today and unlock your linguistic potential!</p>
      </div>

      <div className={styles.footer}>
          <p>
          &copy; 2024 Lexaly Dev. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}
