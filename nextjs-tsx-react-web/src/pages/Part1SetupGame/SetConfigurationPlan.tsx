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

     
      <div className="input-group">
  <span className="input-group-text">M & N</span>
  <input type="number" min="5" max="15" aria-label="First name" className="form-control" placeholder="M"></input>
  
  <span className="input-group-text">X</span>
  <input type="number" min="5" max="15" aria-label="Last name" className="form-control" placeholder="N"></input>
  
</div>
<div className="input-group">
  <span className="input-group-text">init_plan_min</span>
  <input type="number" aria-label="First name" className="form-control" placeholder="5"></input>
  
</div>
<div className="input-group">
 
  <span className="input-group-text">init_plan_sec</span>
  <input type="number" aria-label="Last name" className="form-control" placeholder="0"></input>
</div>

<div className="input-group">
  <span className="input-group-text">init_budget</span>
  <input type="number" aria-label="First name" className="form-control" placeholder="10000"></input>
 
</div>
<div className="input-group">
 
  <span className="input-group-text">init_center_dep</span>
  <input type="number" aria-label="Last name" className="form-control" placeholder="100"></input>
</div>

<div className="input-group">
  <span className="input-group-text">plan_rev_min</span>
  <input type="number" aria-label="First name" className="form-control" placeholder="30"></input>
 
</div>
<div className="input-group">
  
  <span className="input-group-text">plan_rev_sec</span>
  <input type="number" aria-label="Last name" className="form-control" placeholder="0"></input>
  
</div>
<div className="input-group">
  
  <span className="input-group-text">rev_cost</span>
  <input type="number" aria-label="Last name" className="form-control" placeholder="100"></input>
</div>

<div className="input-group">
  <span className="input-group-text">max_dep</span>
  <input type="number" aria-label="First name" className="form-control" placeholder="1000000"></input>
  
</div>
<div className="input-group">
 
  <span className="input-group-text">interest_pct</span>
  <input type="number" aria-label="Last name" className="form-control" placeholder="5"></input>
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
