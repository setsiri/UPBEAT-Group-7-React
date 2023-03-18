import React, { useState, useEffect } from "react";
import Link from "next/link";
import Test3 from "@/components/Test3";
import { Client } from "@stomp/stompjs";

let client: Client;

function TerritoryPage() {
  const [curPlayer, setCurPlayer] = useState(1);
  const [status, setStatus] = useState("normal");
  const [action, setAction] = useState();
  const [players, setPlayers] = useState([]);
  const [territory, setTerritory] = useState([[]]);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/display", (message) => {
            const body = JSON.parse(message.body);
            setCurPlayer(body["index"]);
            setStatus(body["status"]);
            setAction(body["action"]);
            setPlayers(body["players"]);
            setTerritory(body["territory"]);
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
      <Test3></Test3>
    </div>
  );
}

export default TerritoryPage;
