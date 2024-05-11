// pages/index.js
import Head from 'next/head';
import OpenaiChat from '../components/openaichat'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Chat with OpenAI</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Next.js Chat with OpenAI</h1>
                <OpenaiChat />
            </main>
        </div>
    );
}
