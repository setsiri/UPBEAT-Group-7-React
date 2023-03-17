import React from "react";
import Link from "next/link";
import Head from "next/head";

function UpdateConstructionPlan() {
  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <h2 className="my-2">UpdateConstructionPlan</h2>

      <h5>contructionplan editor</h5>
      <div>
        <textarea rows={22} cols={100}></textarea>
      </div>

      <h5>contructionplan editor</h5>
      <div>
        <textarea rows={22} cols={100}></textarea>
      </div>

      <h5>
        state : computing...<i className="bi bi-hourglass-split"></i> / compute
        finished <i className="bi bi-check-circle-fill"></i> / syntax error
        please check again <i className="bi bi-emoji-frown-fill"></i>
      </h5>
      <li className="d-grid gap-2 col-1 ">
        <button className="btn btn-info my-3">check</button>
      </li>
      <div className="mx-0">
        <button className="btn btn-primary">
          <Link href="/game_play/CurrentConstructionPlan">
            finished changing
          </Link>
        </button>
      </div>
    </div>
  );
}

export default UpdateConstructionPlan;
