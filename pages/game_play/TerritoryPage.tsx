import React, { useState, useEffect } from "react";
import Link from "next/link";
import Test3 from "@/components/Test3";
import { Client } from "@stomp/stompjs";

let client: Client;

function TerritoryPage() {
  const [curPlayer, setCurPlayer] = useState(1);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/display", (message) => {
            const body = JSON.parse(message.body);
            console.log(body);
          });
          client.activate();
        },
      });
    }
  }, []);

  const nextAction = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/nextAction",
        });
      }
    }
  };

  const nextTurn = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/nextTurn",
        });
      }
    }
  };

  return (
    <div>
      <div className="d-flex gap-2 mx-5  text-black">
        <div className="  my-3 text-black">
          <button className="btn btn-secondary my-3">
            <Link href="/">back to homepage</Link>
          </button>
        </div>
      </div>

      <h2 className="d-grid gap-2 mx-5 my-2  text-black">
        Territory : Player {curPlayer}
      </h2>
      <li className="d-flex gap-2  mx-5 my-3">
        <button className="btn btn-primary">
          <Link href="/game_play/CurrentConstructionPlan">
            CurrentConstructionPlan
          </Link>
        </button>
      </li>
      <Test3></Test3>
    </div>
  );
}

export default TerritoryPage;
