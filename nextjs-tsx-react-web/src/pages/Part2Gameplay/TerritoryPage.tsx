import React from "react";
import Link from "next/link";
import Hextagontable from "../../../companent/Hextagontable";
import Head from "next/head";


function TerritoryPage() {
  return (
    <div >
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
       
      </Head>
      <div className="d-grid gap-2 col-1 mx-5  text-black">  <div className="  my-3 text-black">
        <button className="btn btn-secondary my-3">
          <Link href="/">back to homepage</Link>
        </button>
      </div></div>
     
      
      <h2 className="d-grid gap-2 col-1 mx-5 my-2  text-black">Territory</h2>
      <li className="d-grid gap-2 col-1 mx-5 my-3">
        <button className="btn btn-primary">
          <Link href="/Part2Gameplay/CurrentConstructionPlan">
            CurrentConstructionPlan
          </Link>
        </button>
      </li>
      <Hextagontable/>
    </div>
  );
}

export default TerritoryPage;
