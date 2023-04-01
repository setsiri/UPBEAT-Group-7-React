import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";
import Editor, { Monaco } from "@monaco-editor/react";
import Bganimation from "../../public/bganimation";
import { useRef } from "react";
import style from "styled-jsx/style";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import CountDown from "../../components/CountDownTimer";
import { Ring } from "@uiball/loaders";

let client: Client;

function SetConstructionPlanPlayer1() {
  const [plan1, setPlan1] = useState(
    "t = t + 1  # keeping track of the turn number \nm = 0  # number of random moves \nwhile (deposit) { # still our region \n  if (deposit - 100) \n  then collect (deposit / 4)  # collect 1/4 of available deposit \n  else if (budget - 25) then invest 25 \n  else {} \n  if (budget - 100) then {} else done  # too poor to do anything else \n  opponentLoc = opponent \n  if (opponentLoc / 10 - 1) \n  then  # opponent afar \n    if (opponentLoc % 10 - 5) then move downleft \n    else if (opponentLoc % 10 - 4) then move down \n    else if (opponentLoc % 10 - 3) then move downright \n    else if (opponentLoc % 10 - 2) then move upleft \n    else if (opponentLoc % 10 - 1) then move upright \n    else move up \n  else if (opponentLoc) \n  then  # opponent adjacent to city crew \n    if (opponentLoc % 10 - 5) then { \n      cost = 10 ^ (nearby upleft % 100 + 1) \n      if (budget - cost) then shoot upleft cost else {} \n    } \n    else if (opponentLoc % 10 - 4) then { \n      cost = 10 ^ (nearby downleft % 100 + 1) \n      if (budget - cost) then shoot downleft cost else {} \n    } \n    else if (opponentLoc % 10 - 3) then { \n      cost = 10 ^ (nearby down % 100 + 1) \n      if (budget - cost) then shoot down cost else {} \n    } \n    else if (opponentLoc % 10 - 2) then { \n      cost = 10 ^ (nearby downright % 100 + 1) \n      if (budget - cost) then shoot downright cost else {} \n    } \n    else if (opponentLoc % 10 - 1) then { \n      cost = 10 ^ (nearby upright % 100 + 1) \n      if (budget - cost) then shoot upright cost else {} \n    } \n    else { \n      cost = 10 ^ (nearby up % 100 + 1) \n      if (budget - cost) then shoot up cost else {} \n    } \n  else {  # no visible opponent; move in a random direction \n    dir = random % 6 \n    if (dir - 4) then move upleft \n    else if (dir - 3) then move downleft \n    else if (dir - 2) then move down \n    else if (dir - 1) then move downright \n    else if (dir) then move upright \n    else move up \n    m = m + 1 \n  } \n}  # end while \n# city crew on a region belonging to nobody, so claim it \nif (budget - 1) then invest 1 else {} \n"
  );
  const [isCorrectSyntax, setIsCorrectSyntax] = useState(false);

  useEffect(() => {
    setIsCorrectSyntax(true);
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/get/checkSyntax", (message) => {
            const body = JSON.parse(message.body);
            setIsCorrectSyntax(body);
            console.log(body);
          });
        },
      });

      client.activate();
    }
  }, []);

  const onCheck = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/checkSyntax",
          body: JSON.stringify({
            message: plan1,
          }),
        });
      }
    }
  };

  const onNext = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/constructionPlan",
          body: JSON.stringify({
            index: 0,
            configurationPlan: plan1,
          }),
        });
      }
    }
  };

  //ของ code editor
  function handleEditorChange(plan1: any, event: any) {
    setPlan1(plan1);
    console.log("here is the current plan1:", plan1);
    // setIsCorrectSyntax(false);
  }

  return (
    <AnimatePresence>
      {" "}
      <div className=" position-fill ">
        <Bganimation />
      </div>
      <motion.div
        initial={{ y: 50, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <div className=" position-relative">
          <div className="text-center my-4">
            <button className="btn btn-secondary">
              <Link href="/">back to homepage</Link>
            </button>
            <h2 className="text-black my-3">
              Setup ConstructionPlan : Player1
            </h2>
          </div>
          <div className="text-center">
            {/* 
  <div>
        <textarea
          rows={25}
          cols={100}
          value={plan1}
          onChange={(event) => {
            setPlan1(event.target.value);
            setIsCorrectSyntax(false);
          }}
        ></textarea>
      </div> 
*/}

            <div
              style={{ display: "flex", justifyContent: "center" }}
              className="my-3"
            >
              <div style={{ border: "6px outset " }}>
                <div style={{ border: "3px inset " }}>
                  <Editor
                    height="50vh"
                    width="90vh"
                    options={{
                      scrollBeyondLastLine: false,
                      fontSize: "17px",
                    }}
                    language="java"
                    defaultValue={plan1}
                    onChange={handleEditorChange}
                  />
                </div>
              </div>
            </div>
            <CountDown seconds={5} />
            <h5 className="text-black my-4">
              state : computing{" "}
              <Ring size={22} lineWeight={5} speed={2} color="black" /> /
              compute finished <i className="bi bi-check-circle-fill"></i> /
              syntax error please check again{" "}
              <i className="bi bi-emoji-frown-fill"></i>{" "}
            </h5>
          </div>

          <div className="text-center">
            {" "}
            <button className="btn btn-info my-3" onClick={onCheck}>
              check
            </button>
          </div>

          <div
            className="d-grid gap-2 d-md-flex justify-content-md-center"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary">
              <Link href="/game_setup/SetConfigurationPlan">Back</Link>
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={onNext}
              disabled={!isCorrectSyntax}
            >
              <Link href="/game_setup/SetConstructionPlanPlayer2">Next</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SetConstructionPlanPlayer1;
