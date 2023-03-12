import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function SetConfigurationPlan() {
  return (
    <div class="d-grid gap-2 col-1 mx-5">
      
<Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
        
        <Link href="/">Home</Link>
      
      <h2>SetConfigurationPlan</h2>
      
      <div><textarea rows={25} cols={100}>m=20
n=15
init_plan_min=5
init_plan_sec=0
init_budget=10000
init_center_dep=100
plan_rev_min=30
plan_rev_sec=0
rev_cost=100
max_dep=1000000
interest_pct=5

</textarea></div>
    
      <li class="d-grid gap-2 col-1 ">

        <button class="btn btn-primary">
        <Link href="/Part1SetupGame/SetConstructionPlanPlayer1">Next</Link>
        </button>
      </li>
      
    </div>
  )
}

export default SetConfigurationPlan