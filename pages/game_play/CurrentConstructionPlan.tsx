import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";

let client: Client;

function CurrentConstructionPlan() {
  const [curPlan, setCurPlan] = useState("done");
  const [curPlayer, setCurPlayer] = useState(1);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/get/data", (message) => {
            const body = JSON.parse(message.body);
            setCurPlayer(body["index"]);
            setCurPlan(body["configurationPlan"]);
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

  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <div className="  my-3 text-black">
        <button className="btn btn-secondary my-3">
          <Link href="/">back to homepage</Link>
        </button>
      </div>

      <h2>CurrentConstruction Plan Of Player {curPlayer}</h2>
      <div>
        <textarea rows={22} cols={100} value={curPlan}></textarea>
      </div>

      <li className="d-flex gap-2">
        <button className="btn btn-primary">
          <Link href="/game_play/UpdateConstructionPlan">
            UpdateConstructionPlan
          </Link>
        </button>

        <button type="button" className="btn btn-primary">
          <Link href="/game_play/TerritoryPage">Start</Link>
        </button>
      </li>
    </div>
  );
}

export default CurrentConstructionPlan;
