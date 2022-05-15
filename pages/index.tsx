import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Next } from "../components/Next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow h-screen flex flex-col items-center justify-center">
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Rx.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <Next
          href="/sync"
          title="Synchronous"
          description="let's start by understanding how you get data synchronously"
        />
      </main>
    </div>
  );
};

export default Home;
