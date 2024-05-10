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
        <a href="#" className={styles.button}>Get Started</a>
      </div>

      <div className={styles.container}>
        <p><strong>Unleash the Power of Lexaly AI: Revolutionizing Your Digital Experience</strong></p>
        <p>
          Welcome to the future of digital interaction with Lexaly AI.
          <p>Lexaly AI is more than just another artificial intelligence platform; it's your gateway to seamless, intuitive, and transformative experiences. Powered by cutting-edge machine learning algorithms and natural language processing, Lexaly AI is designed to understand, interpret, and respond to human language with unparalleled accuracy and efficiency.
            At its core, Lexaly AI empowers businesses and individuals to streamline operations, enhance customer engagement, and unlock new possibilities in productivity.</p> Whether you're looking to automate customer support, optimize content creation, or personalize user experiences, Lexaly AI is your ultimate solution.
          With its adaptive learning capabilities, Lexaly AI evolves alongside your needs, continuously improving its performance and delivering results that exceed expectations. Trust Lexaly AI to elevate your digital presence, amplify efficiency, and drive growth in today's dynamic landscape.
          Discover the endless possibilities with Lexaly AI and embark on a journey towards innovation and success. Join the ranks of leading enterprises and forward-thinkers who have already embraced the future with Lexaly AI at their helm.
          Experience the future of AI. Experience Lexaly AI today.
        </p>
      </div>

      <div className={styles.footer}>
          <p>
          &copy; 2024 Lexaly Dev. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}
