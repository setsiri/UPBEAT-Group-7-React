import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import mypic from "../public/webmap.png";
import mainPagePic from "../public/howToPlay/main.png";
import comFigPagePic from "../public/howToPlay/configuration.png";
import player1ConstructionPlanPic from "../public/howToPlay/constructionPlanP1.png";
import player2ConstructionPlanPic from "../public/howToPlay/constructionPlanP2.png";
import { motion, AnimatePresence } from "framer-motion";

function homeButton() {
  return (
    <Link href="/">
      <div className="text-center">
        <button className="btn btn-secondary">back to homepage</button>
      </div>
    </Link>
  );
}

function displayText(item: string) {
  return (
    <div>
      {item.split("\n").map((e) => (
        <p>{e}</p>
      ))}
    </div>
  );
}

function getBox(src, text) {
  let width = 1050;
  console.log(width);
  return (
    <div
      className="d-flex flex-row"
      style={{
        width: width,
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        alignItems: "center",
      }}
    >
      <Image
        src={src}
        height={500}
        width={500}
        style={{
          height: "auto",
          objectFit: "contain",
          borderRadius: "1rem",
          margin: "1rem",
        }}
        alt={""}
      />
      <h4 style={{ margin: "auto" }}>{displayText(text)}</h4>
    </div>
  );
}

function HowtoPlay() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        {" "}
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossOrigin="anonymous"
          ></link>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <div className=" mx-5 my-3 text-black position-relative ">
          {homeButton()}
          <div className="text-center text-black my-3">
            <h1 color="dark">How to Play</h1>
          </div>

          <div
            className="d-flex flex-column"
            style={{ alignItems: "center", textAlign: "center" }}
          >
            {/*getBox(mypic, "test\ntest\ntest")*/}
            {getBox(
              mainPagePic,
              "Welcome to UPBEAT!\nWe see you need some help to get around." +
                "\n The first page is home page we hope get in to this page by press how to play button \n"
            )}
            {getBox(comFigPagePic, "")}
            {getBox(player1ConstructionPlanPic, "")}
            {getBox(player2ConstructionPlanPic, "")}
          </div>

          <p className="text-center  mx-5" style={{ margin: "1rem" }}>
            งานกลุ่มของวิชา 261200 oop programming เสนอ อ.ชินวัตร อิศราดิสัยกุล
          </p>
          {homeButton()}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default HowtoPlay;
