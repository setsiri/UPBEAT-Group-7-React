import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

function SetConfigurationPlan() {
  const [configText, setConfigText] = useState(
    "m=20 \nn=15 \ninit_plan_min=5 \ninit_plan_sec=0 \ninit_budget=10000 \ninit_center_dep=100 \nplan_rev_min=30 \nplan_rev_sec=0 \nrev_cost=100 \nmax_dep=1000000 \ninterest_pct=5"
  );

  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        ></link>
       
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        ></link>
      </Head>
      <div className="  my-3 text-black">
        <button className="btn btn-secondary my-3">
          <Link href="/">back to homepage</Link>
        </button>
      </div>

      <h2>SetConfigurationPlan</h2>

      <div>
        <textarea
          rows={25}
          cols={100}
          value={configText}
          style={{
            fontSize: "30px",
            width: "1000px",
            height: "550px",
          }}
        ></textarea>
      </div>

      <h5>
        state : computing...<i className="bi bi-hourglass-split"></i> / compute
        finished <i className="bi bi-check-circle-fill"></i> / syntax error please
        check again <i className="bi bi-emoji-frown-fill"></i>
      </h5>
      <li className="d-grid gap-2 col-1 ">
        <button className="btn btn-info my-3">
          <Link href="/Part1SetupGame/SetConstructionPlanPlayer1"></Link>check
        </button>
      </li>
      <li className="d-grid gap-2 col-1 ">
        <button className="btn btn-primary">
          <Link href="/Part1SetupGame/SetConstructionPlanPlayer1">Next</Link>
        </button>
      </li>
    </div>
  );
}

export default SetConfigurationPlan;
