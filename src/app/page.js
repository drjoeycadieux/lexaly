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
        <p>
          Harnessing the power of advanced artificial intelligence, LexaLy AI offers a comprehensive suite of language services tailored to elevate your writing, speaking, and comprehension abilities. Whether you're a student, professional, or language enthusiast, LexaLy AI is your go-to platform for achieving linguistic excellence effortlessly.

          With LexaLy AI, you can effortlessly craft high-quality content, refine your writing style, and express yourself with clarity and confidence. Our user-friendly interface and state-of-the-art algorithms empower you to create captivating essays, compelling stories, and persuasive arguments in record time.
        </p>
      </div>

      <div className={styles.container}>
        <p>
          But LexaLy AI goes beyond mere writing assistance. Our platform provides robust language analysis tools to help you grasp the nuances of any text, pinpoint grammar and spelling errors, and enhance the overall quality of your writing. Moreover, with our language translation feature, you can transcend linguistic barriers and connect with individuals worldwide.

          Whether you seek to excel academically, advance professionally, or simply communicate more effectively, LexaLy AI is your trusted partner for unlocking your linguistic potential. Join the thriving community of users who rely on LexaLy AI to accomplish their language aspirations – sign up today and embrace the future of communication!"
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
