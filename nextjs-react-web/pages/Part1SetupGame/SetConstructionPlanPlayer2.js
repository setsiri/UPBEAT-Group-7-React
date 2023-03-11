import React from "react";
import Link from "next/link";
import Head from "next/head";

function SetConstructionPlanPlayer2() {
  return (
    <div class="d-grid gap-2 col-1 mx-5">
      
<Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
     
        <Link href="/">Home</Link>
      
      <h2>SetConstructionPlanPlayer2</h2>
      <div><textarea rows={25} cols={100}></textarea></div>
        
      
      <li class="d-grid gap-2 col-1 "> <button class="btn btn-primary">
          <Link href="/Part1SetupGame/SetConstructionPlanPlayer1">Back</Link>
        </button> </li>
        <li class="d-grid gap-2 col-1 "> <button class="btn btn-primary">
          <Link href="/Part2Gameplay/TerritoryPage">Start</Link></button></li>
       
      
     
    </div>
  );
}

export default SetConstructionPlanPlayer2;
