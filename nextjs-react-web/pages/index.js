import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>UPBEAT-G7</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
      <div class="d-grid gap-2 col-1 mx-auto my-5 text-black">  <h1 color="dark">Homepage</h1></div>
    
      <div class="d-grid gap-2 col-1 mx-auto ">
      <button class="btn btn-primary"><Link href="/HowtoPlay">how to play</Link></button>
      <button class="btn btn-primary"><Link href="/Part1SetupGame/SetConfigurationPlan">start game</Link></button>
      </div>
     
    </div>
  );
}

