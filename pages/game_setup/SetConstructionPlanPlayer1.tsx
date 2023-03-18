import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";

let client: Client;

function SetConstructionPlanPlayer1() {
  const [plan1, setPlan1] = useState(
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

  const onCheck = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/checkSyntax",
          body: JSON.stringify({
            message: plan1,
          }),
        });
      }
    }
  };

  const onNext = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/constructionPlan",
          body: JSON.stringify({
            index: 0,
            configurationPlan: plan1,
          }),
        });
      }
    }
  };

  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <div className="  my-3 text-black">
        <button className="btn btn-secondary my-3">
          <Link href="/">back to homepage</Link>
        </button>
      </div>

      <h2>SetConstructionPlanPlayer1</h2>

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
      <div className="d-grid gap-2 col-1 ">
        <div className="d-flex gap-2" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            <Link href="/game_setup/SetConfigurationPlan">Back</Link>
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={onNext}
            disabled={!isCorrectSyntax}
          >
            <Link href="/game_setup/SetConstructionPlanPlayer2">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetConstructionPlanPlayer1;
