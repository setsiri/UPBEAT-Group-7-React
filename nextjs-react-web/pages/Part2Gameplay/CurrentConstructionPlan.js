import React from "react";
import Link from "next/link";
import Head from "next/head";

function CurrentConstructionPlan() {
  return (
    <div>
      
<Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
      <li>
        <Link href="/">Home</Link>
      </li>
      <h1>CurrentConstructionPlan</h1>
      <li>
        <button class="btn btn-primary">
          <Link href="/Part2Gameplay/TerritoryPage">TerritoryPage</Link>
        </button>
      </li>
      <li>
        <textarea rows={22} cols={100}></textarea>
      </li>
      <li>
        <button class="btn btn-primary">
          <Link href="/Part2Gameplay/UpdateConstructionPlan">
            UpdateConstructionPlan
          </Link>
        </button>
      </li>
    </div>
  );
}

export default CurrentConstructionPlan;
