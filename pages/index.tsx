import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Canvas from "@/components/Canvas";

export default function Home() {
  return (
    <div>
      <Head>
        <title>UPBEAT-G7</title>
      </Head>
      <div className="d-grid gap-2 col-1 mx-auto my-5 text-black">
        <h1 color="dark">Homepage</h1>
      </div>
      <div className="d-grid gap-2 col-1 mx-auto ">
        <button className="btn btn-primary">
          <Link href="/HowtoPlay">how to play</Link>
        </button>
        <button className="btn btn-primary">
          <Link href="/game_setup/SetConfigurationPlan">start game</Link>
        </button>
      </div>
    </div>
  );
}
