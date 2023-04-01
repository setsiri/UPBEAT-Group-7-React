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

function UpdateConstructionPlan() {
  const [curPlan, setCurPlan] = useState("done");
  const [newPlan, setNewPlan] = useState("done \ndone \ndone");
  const [curPlayer, setCurPlayer] = useState(1);
  const [isCorrectSyntax, setIsCorrectSyntax] = useState(false);

  useEffect(() => {
    if (!client) {
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
            setIsCorrectSyntax(body);
            console.log(body);
          });

          client.subscribe("/game/get/changePlan", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
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
        console.log("wantData");
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

  //ของ code editor
  function handleEditorChange(newPlan: any, event: any) {
    setNewPlan(newPlan);
    console.log("here is the current newPlan:", newPlan);
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
          <h2 className="my-5 text-center text-black">
            Update ConstructionPlan : Player {curPlayer}
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

            {/* <div>
        <textarea
          rows={22}
          cols={100}
          value={curPlan}
          onChange={() => {}}
        ></textarea>
      </div>
      */}

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

          {/*  <div>
        <textarea
          rows={22}
          cols={100}
          value={newPlan}
          onChange={(event) => {
            setNewPlan(event.target.value);
            setIsCorrectSyntax(false);
          }}
        ></textarea>
      </div> */}

    <div className="text-center my-3 text-black">

    <h5 className="text-black my-4">
        state : computing <Ring 
 size={22}
 lineWeight={5}
 speed={2} 
 color="black" 
/> / compute
        finished <i className="bi bi-check-circle-fill"></i> / syntax error
        please check again <i className="bi bi-emoji-frown-fill"></i>  </h5>

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
    </div></div></motion.div></AnimatePresence>



   
   
  );
}

export default UpdateConstructionPlan;
