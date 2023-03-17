import React from "react";
import Link from "next/link";
import Head from "next/head";

function SetConstructionPlanPlayer2() {
  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <div className="  my-3 text-black">
        <button className="btn btn-secondary my-3">
          <Link href="/">back to homepage</Link>
        </button>
      </div>

      <h2>SetConstructionPlanPlayer2</h2>
      <div>
        <textarea rows={25} cols={100}></textarea>
      </div>

      <h5>
        state : computing...<i className="bi bi-hourglass-split"></i> / compute
        finished <i className="bi bi-check-circle-fill"></i> / syntax error
        please check again <i className="bi bi-emoji-frown-fill"></i>
      </h5>
      <li className="d-grid gap-2 col-1 ">
        <button className="btn btn-info my-3">check</button>
      </li>

      <div className="d-grid gap-2 col-1 ">
        <div className="d-flex gap-2" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            <Link href="/game_setup/SetConfigurationPlan">Back</Link>
          </button>

          <button type="button" className="btn btn-primary">
            <Link href="/game_play/TerritoryPage">Start</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetConstructionPlanPlayer2;
