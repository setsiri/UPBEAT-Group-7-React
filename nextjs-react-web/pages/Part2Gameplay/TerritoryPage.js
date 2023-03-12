import React from "react";
import Link from "next/link";
import Hextagontable from "@/companent/Hextagontable";
import Head from "next/head";


function TerritoryPage() {
  return (
    <div >
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
      <div class="d-grid gap-2 col-1 mx-5  text-black">  <li class="my-4">  <Link href="/">Go To Homepage</Link></li></div>
     
      
      <h2 class="d-grid gap-2 col-1 mx-5 my-2  text-black">Territory</h2>
      <li class="d-grid gap-2 col-1 mx-5">
        <button class="btn btn-primary">
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
