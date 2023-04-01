import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { useDelay } from "react-use-precision-timer";
import Editor, { Monaco } from "@monaco-editor/react";
import Bganimation from "../../public/bganimation";
import CountDown from "../../components/CountDownTimer";
import { motion, AnimatePresence } from "framer-motion";
import { Ring } from "@uiball/loaders";

let client: Client;

function SetConstructionPlanPlayer2() {
  const [plan2, setPlan2] = useState(
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

  function displayState(input) {
    if (input == "onGoing") {
      return (
        <div>
          state : computing{" "}
          <Ring size={22} lineWeight={5} speed={2} color="black" />
        </div>
      );
    } else if (input == "finsih") {
      return (
        <div>
          compute finished <i className="bi bi-check-circle-fill"></i>
        </div>
      );
    } else if (input == "error") {
      return (
        <div>
          syntax error please check again{" "}
          <i className="bi bi-emoji-frown-fill"></i>
        </div>
      );
    }
  }

  const onCheck = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/checkSyntax",
          body: JSON.stringify({
            message: plan2,
          }),
        });
      }
    }
  };

  const onceTimer = useDelay(100, () => {
    client.publish({
      destination: "/player/start",
    });
  });

  const onStart = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/constructionPlan",
          body: JSON.stringify({
            index: 1,
            configurationPlan: plan2,
          }),
        });
        onceTimer.start();
      }
    }
  };

  //ของ code editor
  function handleEditorChange(plan2: any, event: any) {
    setPlan2(plan2);
    console.log("here is the current plan2:", plan2);
    // setIsCorrectSyntax(false);
  }

  return (
    <AnimatePresence>
      <div className=" position-fill ">
        <Bganimation />
      </div>
      <motion.div
        initial={{ y: 50, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <div
          className="position-relative text-center"
          style={{ marginTop: "1rem" }}
        >
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
          <Link href="/">
            <button className="btn btn-secondary">back to homepage</button>
          </Link>
          <h2 className="text-black my-3">Setup ConstructionPlan : Player2</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className="my-3"
          >
            <div style={{ border: "6px outset " }}>
              <div style={{ border: "3px inset " }}>
                <Editor
                  height="65vh"
                  width="110vh"
                  language="java"
                  defaultValue={plan2}
                  onChange={handleEditorChange}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5 className="text-black my-4" style={{ marginRight: "100px" }}>
              {displayState("onGoing")}
            </h5>
            <CountDown seconds={5} />
          </div>

          <div className="text-center">
            <Link href="/game_setup/SetConstructionPlanPlayer1">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "10rem" }}
              >
                Back
              </button>
            </Link>
            <button
              className="btn btn-info my-3"
              style={{ marginInline: "3rem", width: "10rem" }}
              onClick={onCheck}
            >
              check
            </button>
            <Link href="/game_play/CurrentConstructionPlan" onClick={onStart}>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "10rem" }}
                disabled={!isCorrectSyntax}
              >
                Start
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SetConstructionPlanPlayer2;
