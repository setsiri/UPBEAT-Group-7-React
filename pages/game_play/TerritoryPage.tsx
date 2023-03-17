import React from "react";
import Link from "next/link";
import Test3 from "@/components/Test3";

function TerritoryPage() {
  return (
    <div>
      <div className="d-grid gap-2 col-1 mx-5  text-black">
        {" "}
        <div className="  my-3 text-black">
          <button className="btn btn-secondary my-3">
            <Link href="/">back to homepage</Link>
          </button>
        </div>
      </div>

      <h2 className="d-grid gap-2 col-1 mx-5 my-2  text-black">Territory</h2>
      <li className="d-grid gap-2 col-1 mx-5 my-3">
        <button className="btn btn-primary">
          <Link href="/game_play/CurrentConstructionPlan">
            CurrentConstructionPlan
          </Link>
        </button>
      </li>
      <Test3></Test3>
    </div>
  );
}

export default TerritoryPage;
