import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";

let client: Client;

function UpdateConstructionPlan() {
  const [curPlan, setCurPlan] = useState("done");
  const [newPlan, setNewPlan] = useState("done \ndone \ndone");
  const [curPlayer, setCurPlayer] = useState(1);
  const [isCorrectSyntax, setIsCorrectSyntax] = useState(false);

  useEffect(() => {
    if (!client) {
      setIsCorrectSyntax(true);
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/get/data", (message) => {
            const body = JSON.parse(message.body);
            setCurPlayer(body["index"]);
            setCurPlan(body["configurationPlan"]);
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

          client.activate();

          client.publish({
            destination: "/player/want/data",
          });
        },
      });
    }
  }, []);

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

  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <h2 className="my-2">Update Construction Plan Of Player {curPlayer}</h2>

      <h5>contructionplan editor</h5>
      <div>
        <textarea rows={22} cols={100} value={curPlan}></textarea>
      </div>

      <h5>contructionplan editor</h5>
      <div>
        <textarea
          rows={22}
          cols={100}
          value={newPlan}
          onChange={(event) => {
            setNewPlan(event.target.value);
            setIsCorrectSyntax(false);
          }}
        ></textarea>
      </div>

      <h5>
        state : computing...<i className="bi bi-hourglass-split"></i> / compute
        finished <i className="bi bi-check-circle-fill"></i> / syntax error
        please check again <i className="bi bi-emoji-frown-fill"></i>
      </h5>
      <li className="d-grid gap-2 col-1 ">
        <button className="btn btn-info my-3" onClick={onCheck}>
          check
        </button>
      </li>
      <div className="mx-0">
        <button
          className="btn btn-primary"
          onClick={onChange}
          disabled={!isCorrectSyntax}
        >
          <Link href="/game_play/CurrentConstructionPlan">
            finished changing
          </Link>
        </button>
      </div>
    </div>
  );
}

export default UpdateConstructionPlan;
