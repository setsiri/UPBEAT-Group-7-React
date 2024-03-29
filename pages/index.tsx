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
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { result, setResult } from "../dataTypes/configulation";
import Router from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClickHowtoPlay = () =>
    Router.push({
      pathname: "/HowtoPlay",
    });

  const handleClickSetConfigurationPlan = () =>
    Router.push({
      pathname: "/game_setup/SetConfigurationPlan",
    });

  return (
    <AnimatePresence>
      <div className=" position-fill ">
        {" "}
        <Bganimation />
      </div>
      <motion.div
        initial={{ y: 15, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ y: 0, x: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <div className=" position-relative ">
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
</div> 1
*/}

          <div className="text-center mx-auto ">
            <Image src={mypic2} alt={""} />
          </div>

          <div className="text-center my-4 text-light">
            <h1 color="dark">Homepage</h1>
          </div>
          <div className="d-grid gap-3 justify-content-center">
            <button
              className="btn btn-primary btn-lg fs-3"
              style={{ width: "12rem", height: "4rem" }}
              onClick={() => handleClickHowtoPlay()}
            >
              how to play
            </button>

            <button
              className="btn btn-primary btn-lg fs-3"
              style={{ width: "12rem", height: "4rem" }}
              onClick={() => handleClickSetConfigurationPlan()}
            >
              start game
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
