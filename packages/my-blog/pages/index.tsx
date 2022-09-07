import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import BLOG_TITLE from "@monorepo/common";
import axios from "axios";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const Home: NextPage = () => {
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => setPostData(res.data));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{BLOG_TITLE}</title>
      </Head>

      <main className={styles.main}>
        {BLOG_TITLE}

        {postData != null ? (
          <section>
            <h3>{postData.title}</h3>
          </section>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
