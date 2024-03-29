import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Client } from "@stomp/stompjs";
import bg from "../../public/bg1.gif";
import Image from "next/image";
import Bganimation from "../../public/bganimation";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Ring } from "@uiball/loaders";
import Router from "next/router";
import { useDelay } from "react-use-precision-timer";

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
  const [isFrist, setIsFrist] = useState(true);

  const handleClickHomepage = () =>
    Router.push({
      pathname: "/",
    });

  useEffect(() => {
    if (isFrist) {
      setIsFrist(false);
      client = new Client({
        brokerURL: "ws://localhost:8080/demo-websocket",
        onConnect: () => {},
      });
      client.activate();
    }
  }, []);

  const handleClickSetConstructionPlanPlayer1 = useDelay(200, () => {
    Router.push({
      pathname: "/game_setup/SetConstructionPlanPlayer1",
    });
  });

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

    handleClickSetConstructionPlanPlayer1.start();
  };

  return (
    <AnimatePresence>
      {" "}
      <div className=" position-fill ">
        <Bganimation />
      </div>{" "}
      <motion.div
        initial={{ y: 50, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <div className="position-relative">
          <div className="text-center my-4">
            <button
              className="btn btn-secondary fs-5"
              style={{ width: "12rem", height: "3rem" }}
              onClick={() => handleClickHomepage()}
            >
              back to homepage
            </button>
          </div>
          <h2 className="text-center text-light my-4">
            Setup ConfigurationPlan
          </h2>
          <div className="d-grid gap-2 col-3 mx-auto">
            {" "}
            <div className="input-group">
              <span className="input-group-text fs-5">M & N</span>
              <input
                type="number"
                min="5"
                max="15"
                aria-label="First name"
                className="form-control fs-5"
                placeholder={m}
                value={m}
                onChange={(event) => {
                  if (Number(event.target.value) < 5) setM(5);
                  else if (Number(event.target.value) > 15) setM(15);
                  else setM(Number(event.target.value));
                }}
              ></input>

              <span className="input-group-text fs-5">X</span>
              <input
                type="number"
                min="5"
                max="20"
                aria-label="Last name"
                className="form-control fs-5"
                placeholder={n}
                value={n}
                onChange={(event) => {
                  if (Number(event.target.value) < 5) setN(5);
                  else if (Number(event.target.value) > 20) setN(20);
                  else setN(Number(event.target.value));
                  //setN(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">Planning Time (min)</span>
              <input
                type="number"
                min="0"
                max="60"
                aria-label="First name"
                className="form-control fs-5"
                placeholder={init_plan_min}
                value={init_plan_min}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setInit_plan_min(0);
                  else if (Number(event.target.value) > 60)
                    setInit_plan_min(60);
                  else setInit_plan_min(Number(event.target.value));
                  //setInit_plan_min(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">Plannig Time (sec)</span>
              <input
                type="number"
                min="0"
                max="59"
                aria-label="Last name"
                className="form-control fs-5"
                placeholder={init_plan_sec}
                value={init_plan_sec}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setInit_plan_sec(0);
                  else if (Number(event.target.value) > 59)
                    setInit_plan_sec(59);
                  else setInit_plan_sec(Number(event.target.value));
                  //setInit_plan_sec(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">Amount Of Budget</span>
              <input
                type="number"
                min="0"
                max="1000000"
                aria-label="First name"
                className="form-control fs-5"
                placeholder={init_budget}
                value={init_budget}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setInit_budget(0);
                  else if (Number(event.target.value) > 1000000)
                    setInit_budget(1000000);
                  else setInit_budget(Number(event.target.value));
                  //setInit_budget(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">
                Amount Of Center Deposite
              </span>
              <input
                type="number"
                min="0"
                max="100000"
                aria-label="Last name"
                className="form-control fs-5"
                placeholder={init_center_dep}
                value={init_center_dep}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setInit_center_dep(0);
                  else if (Number(event.target.value) > 100000)
                    setInit_center_dep(100000);
                  else setInit_center_dep(Number(event.target.value));
                  //setInit_center_dep(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">
                RevisePlan Time (min)
              </span>
              <input
                type="number"
                min="0"
                max="60"
                aria-label="First name"
                className="form-control fs-5"
                placeholder={plan_rev_min}
                value={plan_rev_min}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setPlan_rev_min(0);
                  else if (Number(event.target.value) > 60) setPlan_rev_min(60);
                  else setPlan_rev_min(Number(event.target.value));
                  //setPlan_rev_min(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">
                RevisePlan Time (sec)
              </span>
              <input
                type="number"
                min="0"
                max="59"
                aria-label="Last name"
                className="form-control fs-5"
                placeholder={plan_rev_sec}
                value={plan_rev_sec}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setPlan_rev_sec(0);
                  else if (Number(event.target.value) > 59) setPlan_rev_sec(59);
                  else setPlan_rev_sec(Number(event.target.value));
                  //setPlan_rev_sec(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">Revise Cost</span>
              <input
                type="number"
                min="0"
                max="100000"
                aria-label="Last name"
                className="form-control fs-5"
                placeholder={rev_cost}
                value={rev_cost}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setRev_cost(0);
                  else if (Number(event.target.value) > 100000)
                    setRev_cost(100000);
                  else setRev_cost(Number(event.target.value));
                  //setRev_cost(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">
                Max Deposit Per Region
              </span>
              <input
                type="number"
                min="0"
                max="1000000"
                aria-label="First name"
                className="form-control fs-5"
                placeholder={max_dep}
                value={max_dep}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setMax_dep(0);
                  else if (Number(event.target.value) > 1000000)
                    setMax_dep(1000000);
                  else setMax_dep(Number(event.target.value));
                  //setMax_dep(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
            <div className="input-group">
              <span className="input-group-text fs-5">Interest Rate %</span>
              <input
                type="number"
                min="0"
                max="1000"
                aria-label="Last name"
                className="form-control fs-5"
                placeholder={interest_pct}
                value={interest_pct}
                onChange={(event) => {
                  if (Number(event.target.value) < 0) setInterest_pct(0);
                  else if (Number(event.target.value) > 1000)
                    setInterest_pct(1000);
                  else setInterest_pct(Number(event.target.value));
                  //setInterest_pct(Number.parseInt(Number(event.target.value)));
                }}
              ></input>
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn btn-primary text-center fs-3 my-3"
              style={{ width: "12rem", height: "4rem" }}
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SetConfigurationPlan;
