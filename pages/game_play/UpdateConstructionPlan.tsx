import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";
import Editor, { Monaco } from "@monaco-editor/react";
import DiffEditor from "@monaco-editor/react";
import Bganimation from "../../public/bganimation";
import { motion, AnimatePresence } from "framer-motion";
import { Ring } from "@uiball/loaders";
import CountDown from "../../components/CountDownTimer";

let client: Client;
let time: number;

function UpdateConstructionPlan() {
  const [curPlan, setCurPlan] = useState("done");
  const [newPlan, setNewPlan] = useState("done \ndone \ndone");
  const [curPlayer, setCurPlayer] = useState(1);
  const [isCorrectSyntax, setIsCorrectSyntax] = useState(false);
  const [isFrist, setIsFrist] = useState(true);
  const [countDown, setCountDown] = useState(<h5>⏳ : 0</h5>);
  const [isWait, setIsWait] = useState(true);

  useEffect(() => {
    if (isFrist) {
      setIsFrist(false);
      setIsCorrectSyntax(false);
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/get/data", (message) => {
            const body = JSON.parse(message.body);
            setCurPlayer(body["index"]);
            setCurPlan(body["configurationPlan"]);
            setNewPlan(body["configurationPlan"]);
            console.log(body);
          });

          client.subscribe("/game/get/checkSyntax", (message) => {
            const body = JSON.parse(message.body);
            setIsWait(false);
            setIsCorrectSyntax(body);
          });

          client.subscribe("/game/get/changePlan", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
          });

          client.subscribe("/game/get/plan_rev_sec", (message) => {
            const body = JSON.parse(message.body);
            time = body;
            console.log(body);
            setCountDown(<CountDown seconds={time} />);
          });

          getTime();
          wantData();
        },
      });
      client.activate();
    }
  }, []);

  const wantData = () => {
    if (client) {
      if (client.connected) {
        // console.log("wantData");
        client.publish({
          destination: "/player/want/data",
        });
      }
    }
  };

  const onCheck = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/checkSyntax",
          body: JSON.stringify({
            message: newPlan,
          }),
        });
      }
    }
  };

  const onChange = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/changePlan",
          body: JSON.stringify({
            message: newPlan,
          }),
        });
      }
    }
  };

  const getTime = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/get/plan_rev_sec",
        });
      }
    }
  };

  //ของ code editor
  function handleEditorChange(newPlan: any, event: any) {
    setNewPlan(newPlan);
    // console.log("here is the current newPlan:", newPlan);
    setIsCorrectSyntax(false);
    setIsWait(true);
  }

  function displayState() {
    if (isWait) {
      return (
        <div>
          state : waiting{" "}
          <Ring size={22} lineWeight={5} speed={2} color="black" />
        </div>
      );
    } else {
      if (isCorrectSyntax) {
        return (
          <div>
            state : correct syntax <i className="bi bi-check-circle-fill"></i>
          </div>
        );
      } else {
        return (
          <div>
            state : incorrect syntax <i className="">x</i>
          </div>
        );
      }
    }
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
          <h2 className="my-5 text-center text-black">
            Update Construction Plan : Player {curPlayer + 1}
          </h2>

          <div
            className="text-black d-flex gap-4 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <h5 className="mx-5">Current ContructionPlan "Read only" </h5>
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="my-1"
              >
                <div style={{ border: "6px outset " }}>
                  <div style={{ border: "3px inset " }}>
                    {" "}
                    <Editor
                      height="50vh"
                      width="75vh"
                      language="java"
                      value={curPlan}
                      options={{
                        readOnly: true,
                        scrollBeyondLastLine: false,
                        fontSize: "17px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="mx-5">New ContructionPlan "Editor"</h5>
              <div
                style={{ display: "flex", justifyContent: "center" }}
                className="my-1"
              >
                <div style={{ border: "6px outset " }}>
                  <div style={{ border: "3px inset " }}>
                    <Editor
                      height="50vh"
                      width="75vh"
                      language="java"
                      options={{
                        scrollBeyondLastLine: false,
                        fontSize: "17px",
                      }}
                      value={newPlan}
                      onChange={handleEditorChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center my-3 text-black">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5
                className="text-black  mt-2 mb-3"
                style={{ marginRight: "100px" }}
              >
                {displayState()}
              </h5>
              {countDown}
            </div>

            <div className="text-center">
              <button className="btn btn-info my-3" onClick={onCheck}>
                check
              </button>
            </div>
            <div className="text-center">
              <Link href="/game_play/CurrentConstructionPlan">
                <button
                  className="btn btn-primary"
                  onClick={onChange}
                  disabled={!isCorrectSyntax}
                >
                  finished changing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default UpdateConstructionPlan;
