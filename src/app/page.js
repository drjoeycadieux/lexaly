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
          Discover LexaLy AI, your essential language companion for the modern age, empowering you to excel in today's dynamic world.
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
