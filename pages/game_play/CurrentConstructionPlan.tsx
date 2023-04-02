import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";
import { useDelay } from "react-use-precision-timer";
import Editor, { Monaco } from "@monaco-editor/react";
import Bganimation from "../../public/bganimation";
import { motion, AnimatePresence, delay } from "framer-motion";
import Router from "next/router";

let client: Client;
let body: any;

function CurrentConstructionPlan() {
  const [curPlayer, setCurPlayer] = useState(-1);
  const [isFrist, setIsFrist] = useState(true);

  const handleClickHomepage = () =>
    Router.push({
      pathname: "/",
    });

  const handleClickUpdateConstructionPlan = () =>
    Router.push({
      pathname: "/game_play/UpdateConstructionPlan",
    });

  const handleClickTerritoryPage = () =>
    Router.push({
      pathname: "/game_play/TerritoryPage",
    });

  useEffect(() => {
    if (isFrist) {
      setIsFrist(false);
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/get/data", (message) => {
            body = JSON.parse(message.body);
            setCurPlayer(body["index"]);
            /* console.log(body); */
          });
          wantData();
        },
      });
      client.activate();
    }
  }, []);

  const wantData = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/want/data",
        });
      }
    }
  };

  const displayPlayer = () => {
    if (curPlayer === 0) return "🧑🏻‍🌾";
    else if (curPlayer === 1) return "🤴🏽";
    else "";
  };

  return (
    <AnimatePresence>
      <div className=" position-fill ">
        <Bganimation />
      </div>
      <motion.div
        initial={{ y: 100, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Bganimation />
        <div className=" position-relative">
          <div className="  my-4 text-center">
            <button
              className="btn btn-secondary my-3"
              onClick={() => handleClickHomepage()}
            >
              back to homepage
            </button>

            <p style={{ fontSize: "200px" }}>{displayPlayer()}</p>
            <h2 className="text-black my-3">Turn : Player {curPlayer + 1}</h2>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center my-3">
            <button
              className="btn btn-primary"
              onClick={() => handleClickUpdateConstructionPlan()}
            >
              UpdateConstructionPlan
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleClickTerritoryPage()}
            >
              Play
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CurrentConstructionPlan;
