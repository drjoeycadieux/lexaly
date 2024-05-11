import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.alert}>
        <p><i class="bi bi-info-circle"></i>  <strong>FYI</strong>   We will launch very soon our first product Lexaly AI!</p>
      </div>
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
          Discover Lexaly AI, your essential language companion for the modern age, empowering you to excel in today's dynamic world.
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
          &copy; 2024 Lexaly AI. All Rights Reserved. <strong className={styles.contact}>Contact: Joey@techtack-technologies.info</strong>
        </p>
      </div>
    </main>
  );
}
