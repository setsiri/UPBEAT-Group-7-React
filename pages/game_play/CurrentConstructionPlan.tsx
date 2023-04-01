import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";
import { useDelay } from "react-use-precision-timer";
import Editor, { Monaco } from "@monaco-editor/react";
import Bganimation from "../../public/bganimation";
import { motion, AnimatePresence } from "framer-motion";

let client: Client;
let body: any;

function CurrentConstructionPlan() {
  const [curPlan, setCurPlan] = useState("");
  const [curPlayer, setCurPlayer] = useState(0);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/get/data", (message) => {
            /* console.log("get message"); */
            body = JSON.parse(message.body);
            setCurPlayer(body["index"]);
            setCurPlan(body["configurationPlan"]);
            console.log(curPlan);
          });
          /* console.log("sub"); */
          wantData();
        },
      });
      /* console.log("activate"); */
      client.activate();
    }
  }, []);

  const wantData = () => {
    if (client) {
      if (client.connected) {
        console.log("wantData");
        client.publish({
          destination: "/player/want/data",
        });
      }
    }
  };

  console.log("send message");

  //ของ code editor
  function handleEditorChange(curPlan: any, event: any) {
    setCurPlan(curPlan);
    console.log("here is the current curPlan:", curPlan);
    // setIsCorrectSyntax(false);
  }

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
        <div className=" position-relative">
          <div className="  my-4 text-center">
            <button className="btn btn-secondary my-3">
              <Link href="/">back to homepage</Link>
            </button>
            <h2 className="text-black my-3">
              Current ConstructionPlan : Player {curPlayer + 1}
            </h2>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="my-3"
          >
            <div style={{ border: "6px outset " }}>
              <div style={{ border: "3px inset " }}>
                <Editor
                  height="60vh"
                  width="115vh"
                  language="java"
                  options={{
                    scrollBeyondLastLine: false,
                    fontSize: "17px",
                  }}
                  defaultValue={curPlan}
                  onChange={handleEditorChange}
                />
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center my-3">
            <button className="btn btn-primary">
              <Link href="/game_play/UpdateConstructionPlan">
                UpdateConstructionPlan
              </Link>
            </button>

            <button type="button" className="btn btn-primary">
              <Link href="/game_play/TerritoryPage">Start</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CurrentConstructionPlan;
