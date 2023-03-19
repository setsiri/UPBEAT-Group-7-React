import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Canvas from "@/components/Canvas";
import dynamic from "next/dynamic";
import Editor, { Monaco } from "@monaco-editor/react";
import React, { useRef } from "react";
import mypic2 from "../public/logo.png";
import Image from "next/image";
import bg from "../public/bg1.gif";
import Bganimation from "../public/bganimation";

export default function Home() {
  return (
    <div >


      {" "}
      <div
       className=" position-fill "
      >
        {" "}
        <Bganimation/>
      </div>
      <div
        className=" position-relative "
      >
        <Head>
          <title>UPBEAT-G7</title>
        </Head>

        {/*backgroud gif 
<div style={{
  zIndex: -1,
  position: "fixed",
  width: "100vw",
  height: "100vh"
}}><Image src={bg} alt={""}  />
</div>
*/}

        <div className="text-center mx-auto ">
          <Image src={mypic2} alt={""} />
        </div>

        <div className="text-center my-4 text-black ">
          <h3 color="dark">Homepage</h3>
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
    </div>
  );
}
