import React from "react";
import Link from "next/link";
import Head from "next/head";

function CurrentConstructionPlan() {
  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <div className="  my-3 text-black">
        <button className="btn btn-secondary my-3">
          <Link href="/">back to homepage</Link>
        </button>
      </div>

      <h2>CurrentConstructionPlan</h2>
      <li className="d-grid gap-2 col-1 ">
        <button className="btn btn-primary">
          <Link href="/game_play/TerritoryPage">TerritoryPage</Link>
        </button>
      </li>
      <div>
        <textarea rows={22} cols={100}></textarea>
      </div>

      <li className="d-grid gap-2 col-1">
        <button className="btn btn-primary">
          <Link href="/game_play/UpdateConstructionPlan">
            UpdateConstructionPlan
          </Link>
        </button>
      </li>
    </div>
  );
}

export default CurrentConstructionPlan;
