import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Canvas from "@/components/Canvas";
import dynamic from "next/dynamic";
import Editor, { Monaco } from "@monaco-editor/react";
import React, { useRef } from "react";
import mypic2 from "../public/logo.png"
import Image from "next/image";



export default function Home() {

 

  return (
    <div>
      <Head>
        <title>UPBEAT-G7</title>
       
      </Head>

      <div className="text-center mx-auto my-3">
        <Image src={mypic2}  alt={""} />
      </div>
      

      <div className="text-center my-4 text-black">
        <h4 color="dark">Homepage</h4>
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
