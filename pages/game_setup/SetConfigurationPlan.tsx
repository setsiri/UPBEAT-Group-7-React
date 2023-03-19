import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";
import bg from "../../public/bg1.gif"
import Image from "next/image";
import Bganimation from "../../public/bganimation"

let client: Client;

function SetConfigurationPlan() {
  const [m, setM] = useState(10);
  const [n, setN] = useState(10);
  const [init_plan_min, setInit_plan_min] = useState(5);
  const [init_plan_sec, setInit_plan_sec] = useState(0);
  const [init_budget, setInit_budget] = useState(10000);
  const [init_center_dep, setInit_center_dep] = useState(100);
  const [plan_rev_min, setPlan_rev_min] = useState(30);
  const [plan_rev_sec, setPlan_rev_sec] = useState(0);
  const [rev_cost, setRev_cost] = useState(100);
  const [max_dep, setMax_dep] = useState(1000000);
  const [interest_pct, setInterest_pct] = useState(5);

  useEffect(() => {
    if (!client) {
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {},
      });
      client.activate();
    }
  }, []);

  const onNext = () => {
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/player/set/configuration",
          body: JSON.stringify({
            m: m,
            n: n,
            init_plan_min: init_plan_min,
            init_plan_sec: init_plan_sec,
            init_budget: init_budget,
            init_center_dep: init_center_dep,
            plan_rev_min: plan_rev_min,
            plan_rev_sec: plan_rev_sec,
            rev_cost: rev_cost,
            max_dep: max_dep,
            interest_pct: interest_pct,
          }),
        });
      }
    }
  };

  return (
    <div>
        <div
       className=" position-fill "
      >
       <Bganimation/>
      </div>
       <div className="position-relative">
  
      
      <div className="text-center my-4">
    <button className="btn btn-secondary">
      <Link href="/">back to homepage</Link>
    </button>
   
  </div>
  <h2 className="text-center text-black my-4">Setup ConfigurationPlan</h2>
  <div className="d-grid gap-2 col-3 mx-auto" >  <div className="input-group">
        <span className="input-group-text">M & N</span>
        <input
          type="number"
          min="5"
          max="15"
          aria-label="First name"
          className="form-control"
          placeholder={m}
          value={m}
          onChange={(event) => {
            setM(Number.parseInt(event.target.value));
          }}
        ></input>

        <span className="input-group-text">X</span>
        <input
          type="number"
          min="5"
          max="15"
          aria-label="Last name"
          className="form-control"
          placeholder={n}
          value={n}
          onChange={(event) => {
            setN(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">init_plan_min</span>
        <input
          type="number"
          aria-label="First name"
          className="form-control"
          placeholder={init_plan_min}
          value={init_plan_min}
          onChange={(event) => {
            setInit_plan_min(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">init_plan_sec</span>
        <input
          type="number"
          aria-label="Last name"
          className="form-control"
          placeholder={init_plan_sec}
          value={init_plan_sec}
          onChange={(event) => {
            setInit_plan_sec(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>

      <div className="input-group">
        <span className="input-group-text">init_budget</span>
        <input
          type="number"
          aria-label="First name"
          className="form-control"
          placeholder={init_budget}
          value={init_budget}
          onChange={(event) => {
            setInit_budget(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">init_center_dep</span>
        <input
          type="number"
          aria-label="Last name"
          className="form-control"
          placeholder={init_center_dep}
          value={init_center_dep}
          onChange={(event) => {
            setInit_center_dep(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>

      <div className="input-group">
        <span className="input-group-text">plan_rev_min</span>
        <input
          type="number"
          aria-label="First name"
          className="form-control"
          placeholder={plan_rev_min}
          value={plan_rev_min}
          onChange={(event) => {
            setPlan_rev_min(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">plan_rev_sec</span>
        <input
          type="number"
          aria-label="Last name"
          className="form-control"
          placeholder={plan_rev_sec}
          value={plan_rev_sec}
          onChange={(event) => {
            setPlan_rev_sec(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">rev_cost</span>
        <input
          type="number"
          aria-label="Last name"
          className="form-control"
          placeholder={rev_cost}
          value={rev_cost}
          onChange={(event) => {
            setRev_cost(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>

      <div className="input-group">
        <span className="input-group-text">max_dep</span>
        <input
          type="number"
          aria-label="First name"
          className="form-control"
          placeholder={max_dep}
          value={max_dep}
          onChange={(event) => {
            setMax_dep(Number.parseInt(event.target.value));
          }}
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">interest_pct</span>
        <input
          type="number"
          aria-label="Last name"
          className="form-control"
          placeholder={interest_pct}
          value={interest_pct}
          onChange={(event) => {
            setInterest_pct(Number.parseInt(event.target.value));
          }}
        ></input>
      </div><h5 className="text-black">
        state : computing...<i className="bi bi-hourglass-split"></i> / compute
        finished <i className="bi bi-check-circle-fill"></i> / syntax error
        please check again <i className="bi bi-emoji-frown-fill"></i>
      </h5> </div>

  
  <div className="d-grid gap-2 col-1 mx-5 text-black">


      

  

     
     
    </div> <div className=" text-center">
        <button className="btn btn-info my-3 text-center">check</button>
      </div>
      <div className="text-center">
        <button className="btn btn-primary text-center" onClick={onNext}>
          <Link href="/game_setup/SetConstructionPlanPlayer1">Next</Link>
        </button>
      </div></div>
    </div>
   
    
  );
}

export default SetConfigurationPlan;
