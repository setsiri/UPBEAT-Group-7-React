import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import mypic from "../public/webmap.png";
import mainPagePic from "../public/howToPlay/main.png";
import comFigPagePic from "../public/howToPlay/configuration.png";
import player1ConstructionPlanPic from "../public/howToPlay/constructionPlanP1.png";
import player2ConstructionPlanPic from "../public/howToPlay/constructionPlanP2.png";
import betweenTurnPic from "../public/howToPlay/betweenTurn.png";
import editPlanPic from "../public/howToPlay/editPlan.png";
import territoryPic from "../public/howToPlay/territory.png";
import finishPic from "../public/howToPlay/finish.png";
import { motion, AnimatePresence, color } from "framer-motion";

function homeButton() {
  return (
    <Link href="/">
      <div className="text-center my-4">
        <button
          className="btn btn-secondary fs-5"
          style={{ width: "12rem", height: "3rem" }}
        >
          back to homepage
        </button>
      </div>
    </Link>
  );
}

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="top-to-btm"
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
      }}
    >
      {" "}
      {showTopBtn && (
        <button
          className="btn btn-secondary fs-5"
          style={{
            height: "60px",
            width: "60px",
            color: "white",
          }}
          onClick={goToTop}
        >
          Top
        </button>
      )}{" "}
    </div>
  );
};

function displayText(item: string) {
  if (!item) item = "test\ntest\ntest";
  return (
    <div>
      {item.split("\n").map((e) => (
        <p>{e}</p>
      ))}
    </div>
  );
}

function getBox(src, text) {
  return (
    <div
      className="d-flex flex-row"
      style={{
        width: "80%",
        marginTop: "1rem",
        padding: "1rem",
        backgroundColor: "white",
        borderRadius: "1rem",
        alignItems: "center",
      }}
    >
      <Image
        src={src}
        height={400}
        width={400}
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
        <div className=" mx-5 my-3 text-black position-relative ">
          {homeButton()}
          <div className="text-center text-white my-3">
            <h1 color="dark">How to Play</h1>
          </div>

          <div
            className="d-flex flex-column"
            style={{ alignItems: "center", textAlign: "center" }}
          >
            {/*getBox(mypic, "test\ntest\ntest")*/}
            {getBox(
              mainPagePic,
              "Welcome to UPBEAT!" + "\nYou can start game by press start game."
            )}
            {getBox(
              comFigPagePic,
              "This is game config page.\n You can specify all parameter in here." +
                "To change value you can select value then key new value. Or you can press up or down button."
            )}
            {getBox(
              player1ConstructionPlanPic,
              "Next is construction plan of players. This page is for player 1." +
                "\n What you see is default construction plan. You can edit it or continue using this plan." +
                "\n After finish editing press check to verify plan. There are status for show the correctness of plan" +
                "\n When status is correct syntax you will be able to continue by press Next."
            )}
            {getBox(
              player2ConstructionPlanPic,
              "This page is for player 2 construction plan.\n After finish verify you can press next for final verification."
            )}
            {getBox(
              betweenTurnPic,
              "On the start of turn current player can edit their construction plan. \n If want press UpdateConstructionPlan. If don't press Play."
            )}
            {getBox(
              editPlanPic,
              "This page is use to edit plan during game play." +
                "\n The left is old plan and right is new plan.\n Edit in the Editior to change plan."
            )}
            {getBox(
              territoryPic,
              "This is Territory page where player observe their game.\n This is done automatic so players don't need to do anything."
            )}
            {getBox(
              finishPic,
              "After only 1 players remain the game will end.\n This is game result page."
            )}
          </div>

          <p
            className="text-center text-white mx-5 fs-3"
            style={{ margin: "1rem" }}
          >
            งานกลุ่มของวิชา 261200 oop programming เสนอ อ.ชินวัตร อิศราดิสัยกุล
            <p className="text-center  mx-5">
              สมาชิกกลุ่มที่ 7 : com, new ,stamp
            </p>
          </p>
          {homeButton()}
          <ScrollToTop />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default HowtoPlay;
