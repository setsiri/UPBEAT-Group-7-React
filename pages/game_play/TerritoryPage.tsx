import React, { useState, useEffect } from "react";
import Link from "next/link";
import Test3 from "@/components/Test3";
import { Client } from "@stomp/stompjs";
import Action from "@/dataTypes/Action";
import region from "@/dataTypes/territory";
import player from "@/dataTypes/player";
import StatusDisplay from "@/components/StatusDisplsy";
import { useDelay } from "react-use-precision-timer";
import { useTimer } from "react-use-precision-timer";

let client: Client;
let body: any;

function TerritoryPage() {
  const [curPlayer, setCurPlayer] = useState(null);
  const [status, setStatus] = useState("");
  const [action, setAction] = useState(null);
  const [players, setPlayers] = useState([]);
  const [territory, setTerritory] = useState([[]]);
  const [speed, setSpeed] = useState(1000);

  const callback = () => {
    nextAction();
  };
  // The callback will be called every speed milliseconds.
  const timer = useTimer({ delay: speed }, callback);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {
          client.subscribe("/game/display", (message) => {
            body = JSON.parse(message.body);
            console.log(body);
            setCurPlayer(body["index"]);
            setStatus(body["status"]);

            setAction(
              new Action(
                body["action"]["action"],
                body["action"]["direction"],
                body["action"]["value"]
              )
            );

            let result1 = [];
            body["players"].map((p: any, i: number) => {
              result1[i] = new player(
                p["playerIndex"],
                p["budget"],
                [p["cityCenterPosM"], p["cityCenterPosN"]],
                [p["crew"]["posM"], p["crew"]["posN"]],
                p["status"]
              );
            });
            setPlayers(result1);
            /* console.log(players); */

            let result = [[]];
            body["territory"].map((row: any, i: number) => {
              let resultRow = [];
              row.map((col: any, j: number) => {
                if (col !== null) {
                  resultRow[j] = new region(
                    col["deposit"],
                    col["playerOwnerIndex"],
                    col["type"]
                  );
                } else {
                  resultRow[j] = null;
                }
                /* console.log(i * 10 + j); */
              });
              result[i] = resultRow;
            });
            setTerritory(result);
            /* console.log(territory); */

            if (body["action"]["action"] === "done") {
              timer.stop();
              nextTurn();
              timer.start();
            }
          });
        },
      });
      client.activate();
    }
    timer.start();
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
        <div className="  my-3 text-black" onClick={nextAction}>
          <button className="btn btn-danger my-3">next action</button>
        </div>
        <div className="  my-3 text-black" onClick={nextTurn}>
          <button className="btn btn-danger my-3">Done</button>
        </div>
      </div>

      <h2 className="d-grid gap-2 mx-5 my-2  text-black">
        Territory : Player {curPlayer + 1}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            marginLeft: " 1rem",
            marginRight: "1rem",
            padding: "1rem",
            backgroundColor: "white",
            borderRadius: "1rem",
            width: "25rem",
            height: "45rem",
          }}
        >
          <StatusDisplay
            curPlayer={curPlayer}
            status={status}
            action={action}
            players={players}
          ></StatusDisplay>
        </div>
        <Test3
          territory={territory}
          players={players}
          turn={curPlayer}
          action={action}
        ></Test3>
      </div>
    </div>
  );
}

export default TerritoryPage;
