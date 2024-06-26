import styles from "./page.module.css";

import Link from "next/link";

// Components
// import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.alert}>
        <p>
          <strong>FYI</strong> We will launch much later than what is supposed
          to be our first product Lexaly AI!
        </p>
      </div>
      <div className={styles.navbar}>
        <ul>
          <li>
            <p>Lexaly AI</p>
          </li>
          <Link className={styles.linknav} href="/">
            Home
          </Link>
          <Link className={styles.linknav} href="/contact/">
            Contact
          </Link>
          <Link className={styles.linknav} href="/search/">
            Search
          </Link>
          {/* <SearchInput /> */}
        </ul>
      </div>

      <div className={styles.header}>
        <p>Welcome to our AI Intelligence.</p>
        <h3>
          Discover Lexaly AI, your essential language companion for the modern
          age, empowering you to excel in today's dynamic world.
        </h3>
        <a href="#" className={styles.button}>
          Get Started
        </a>
      </div>

      <div className={styles.container}>
        <h1>Welcome to Lexaly AI</h1>
        <p>Master language skills effortlessly with Lexaly AI.</p>

        <p>
          Create high-quality content, refine your style, and communicate with
          confidence.
        </p>

        <p>Join us today and unlock your linguistic potential!</p>
      </div>

      <div className={styles.footer}>
        <p>
          &copy; 2024 Lexaly AI. All Rights Reserved.{" "}
          <strong className={styles.contact}>
            Contact: Joey@techtack-technologies.info
          </strong>
        </p>
      </div>
    </main>
  );
}
