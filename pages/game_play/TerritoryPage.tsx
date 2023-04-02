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
import Bganimation from "../../public/bganimation";
import Router from "next/router";

let client: Client;
let body: any;

function TerritoryPage() {
  const [curPlayer, setCurPlayer] = useState(null);
  const [status, setStatus] = useState("");
  const [action, setAction] = useState(null);
  const [players, setPlayers] = useState([]);
  const [territory, setTerritory] = useState([[]]);
  const [speed, setSpeed] = useState(500);
  const [isFrist, setIsFrist] = useState(true);

  const callback = () => {
    nextAction();
  };
  // The callback will be called every speed milliseconds.
  const timer = useTimer({ delay: speed }, callback);

  const nextPlayer = useDelay(2000, () => {
    nextTurn();
    Router.push({
      pathname: "/game_play/CurrentConstructionPlan",
    });
  });

  useEffect(() => {
    if (isFrist) {
      setIsFrist(false);
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

            if (body["status"] === "won") {
              timer.stop();
              Router.push({
                pathname: "/game_play/FinishPage",
              });
            } else if (body["status"] === "done") {
              timer.stop();
              // next player
              // go to page current player
              nextPlayer.start();
            }
          });
        },
      });
      client.activate();
      timer.start();
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
    <div className=" position-fill ">
      {" "}
      <Bganimation />
      <div>
        {" "}
        <div className="ms-5 pt-4 position-relative">
          {/*          
          <div className="d-flex gap-2 mx-5  text-black">
            
        <div className="  my-3 text-black">
          <button className="btn btn-secondary my-3">
            <Link href="/">back to homepage</Link>
          </button>
        </div>

            <div
              className="  my-3 text-black"
              onClick={() => nextPlayer.start()}
            >
              <button className="btn btn-danger my-3">next action</button>
            </div>
          </div>
 */}
          <div
            className="d-flex gap-2 mx-5 my-5"
            style={{
              display: "flex",
              justifyContent: "left",
              marginTop: "2rem",
            }}
          >
            <div className="ms-5">
              <div
                style={{
                  marginLeft: " 1rem",
                  marginRight: "1rem",
                  padding: "1rem",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  width: "28rem",
                  height: "19rem",
                }}
              >
                <StatusDisplay
                  curPlayer={curPlayer}
                  status={status}
                  action={action}
                  players={players}
                ></StatusDisplay>
              </div>

              <div className="my-3 text-black text-center" onClick={nextTurn}>
                <button
                  className="btn btn-danger my-3 fs-3"
                  style={{ width: "12rem", height: "4.5rem" }}
                >
                  Done
                </button>
              </div>
            </div>
            <Test3
              territory={territory}
              players={players}
              turn={curPlayer}
              action={action}
            ></Test3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerritoryPage;
