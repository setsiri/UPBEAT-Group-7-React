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
import Router from "next/router";
import { useDelay } from "react-use-precision-timer";

let client: Client;

function UpdateConstructionPlan() {
  const [curPlan, setCurPlan] = useState("done");
  const [newPlan, setNewPlan] = useState("done \ndone \ndone");
  const [curPlayer, setCurPlayer] = useState(1);
  const [isCorrectSyntax, setIsCorrectSyntax] = useState(false);
  const [isFrist, setIsFrist] = useState(true);
  const [countDown, setCountDown] = useState(
    <h5 className="text-light fs-4">⏳ : 0</h5>
  );
  const [isWait, setIsWait] = useState(true);
  const [time, setTime] = useState(60);

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
            setTime(body);
            // consoleDelay.start();
            setCountDown(<CountDown seconds={body} setTimer={setTime} />);
          });

          getTime();
          wantData();
        },
      });
      client.activate();
    }
  }, []);

  const backPage = useDelay(200, () => {
    Router.push({
      pathname: "/game_play/CurrentConstructionPlan",
    });
  });

  useEffect(() => {
    if (time === 0) {
      setTimer(0);
      backPage.start();
    }
  }, [time]);

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

  const nextPage = useDelay(200, () => {
    Router.push({
      pathname: "/game_play/CurrentConstructionPlan",
    });
  });

  const consoleDelay = useDelay(100, () => {
    console.log(time);
  });

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
    delaySetTime.start();
    nextPage.start();
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

  const setTimer = (sec: number) => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/plan_rev_sec",
          body: JSON.stringify({
            sec: sec,
          }),
        });
      }
    }
  };

  const delaySetTime = useDelay(100, () => {
    setTimer(time);
  });

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
        <div className="text-light fs-4">
          state : waiting{" "}
          <Ring size={22} lineWeight={5} speed={2} color="white" />
        </div>
      );
    } else {
      if (isCorrectSyntax) {
        return (
          <div className="text-light fs-4">
            state : correct syntax <i className="bi bi-patch-check"></i>
          </div>
        );
      } else {
        return (
          <div className="text-light fs-4">
            state : incorrect syntax <i className="bi bi-patch-exclamation"></i>
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
          <h2 className="my-5 text-center text-light">
            Update Construction Plan : Player {curPlayer + 1}
          </h2>

          <div
            className="text-black d-flex gap-4 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <h4 className="mx-5 text-light">
                Current ContructionPlan "Read only"{" "}
              </h4>
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
                        fontSize: "19px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mx-5 text-light">New ContructionPlan "Editor"</h4>
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
                        fontSize: "19px",
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
                className="text-black  mt-2 mb-3 "
                style={{ marginRight: "100px" }}
              >
                {displayState()}
              </h5>
              {countDown}
            </div>
            <div className="d-grid gap-4 d-md-flex justify-content-md-center my-3">
              {" "}
              <button
                className="btn btn-info my-3 fs-3"
                style={{ width: "12rem", height: "4rem" }}
                onClick={onCheck}
              >
                check
              </button>{" "}
              <button
                className="btn btn-primary fs-3"
                onClick={onChange}
                style={{ width: "16rem", height: "4rem" }}
                disabled={!isCorrectSyntax}
              >
                finished changing
              </button>
              <div className="text-center"></div>
              <div className="text-center"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default UpdateConstructionPlan;
