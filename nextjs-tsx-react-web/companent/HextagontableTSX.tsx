import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

let client: Client;
let index: any;

function Hextagontable() {
  const [synbolGrid, setSynbolGrid] = useState([[]]);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/websocket",
        onConnect: () => {
        client.subscribe("/app/players", (message => {
          const body = JSON.parse(message.body);
          index = body;
          console.log(index);
        }))

        client.subscribe("/app/UPBEAT", (message) => {
          const body = JSON.parse(message.body);
          console.log(body);
          setSynbolGrid(body["symbolGrid"]);
        });

        client.subscribe("/topic/UPBEAT", (message) => {
          const body = JSON.parse(message.body);
          console.log(body);
          setSynbolGrid(body["symbolGrid"]);
        });
      }});
      client.activate();
    }
  }, []);

  return (
    <div className="d-grid mx-5 my-5">
        <div className="T1">
            <div className="T2">
              <div/>
              <div/>
              <div/>
            </div>
        </div>
        <div className="T1">
            <div className="T2">
              <div/>
              <div/>
              <div/>
            </div>
        </div>
    </div>
   
  )
}

export default Hextagontable;
