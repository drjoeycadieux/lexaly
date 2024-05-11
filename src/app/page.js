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
          Join the conversation revolution with Lexaly AI and redefine the way you engage with your audience. Whether you're building chatbots, virtual assistants, or intelligent customer support systems, Lexaly is your trusted partner in the era of conversational AI. Start your journey today and unlock limitless possibilities with Lexaly.
        </h3>
        <a href="#" className={styles.button}>Get Started</a>
      </div>

      <div className={styles.container}>
        <h1>Discover the Future of Conversational AI with Lexaly</h1>
        <div>
          <p>
            Welcome to Lexaly, where innovation meets seamless communication. Lexaly AI is your cutting-edge solution for natural and engaging conversations. Harnessing the power of advanced language processing and machine learning technologies, Lexaly empowers businesses and individuals alike to unlock the full potential of conversational interfaces.
          </p>
        </div>
        <div>
          <p>
            At Lexaly, we understand the importance of meaningful interactions. Whether you're looking to enhance customer support, streamline workflows, or create dynamic chat experiences, our AI platform is designed to adapt and evolve with your needs.

            Key features of Lexaly AI include:
          </p>
        </div>
        <div>
          <li><strong>Natural Language Understanding: </strong>Say goodbye to scripted responses. Lexaly comprehends natural language queries, enabling fluid and authentic conversations with users.</li>
        </div>
        <br />
        <div>
          <li>
            <strong>Contextual Understanding:</strong> From context switching to follow-up questions, Lexaly maintains context throughout the conversation, providing a personalized experience for every interaction.
          </li>
        </div>
        <br />
        <div>
          <li>
            <strong> Multi-Platform Integration:</strong> Seamlessly integrate Lexaly AI into your website, mobile app, messaging platform, or voice-enabled device, ensuring a consistent experience across all channels.
          </li>
        </div>
        <br />
        <div>
          <li>
            <strong>Scalability and Customization:</strong> Whether you're a small startup or a global enterprise, Lexaly scales to meet your needs. Tailor the AI to your specific industry, vocabulary, and use cases for maximum efficiency.
          </li>
        </div>
        <br />
        <div>
          <li>
            <strong>Insightful Analytics:</strong> Gain valuable insights into user behavior and interaction patterns with Lexaly's comprehensive analytics dashboard. Identify trends, optimize workflows, and drive business growth with data-driven decision-making.
          </li>
        </div>
        <br />
        <div>
          <li>
            <strong>Security and Compliance: </strong>Rest easy knowing that your data is protected with industry-leading security protocols and compliance standards. Lexaly AI prioritizes data privacy and confidentiality at every step.
          </li>
        </div>
      </div>

      <div className={styles.footer}>
          <p>
          &copy; 2024 Lexaly Dev. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}
