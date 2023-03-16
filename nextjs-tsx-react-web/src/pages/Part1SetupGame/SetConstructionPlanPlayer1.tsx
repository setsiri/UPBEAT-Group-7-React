import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function SetConstructionPlanPlayer1() {
  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black" >
      
<Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
       
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
          
      <div className="  my-3 text-black">
        <button className="btn btn-secondary my-3">
          <Link href="/">back to homepage</Link>
        </button>
      </div>
      
      <h2>SetConstructionPlanPlayer1</h2>
      
      <div><textarea rows={25} cols={100}></textarea></div>
      <h5>state : computing...<i className="bi bi-hourglass-split"></i> / compute finished <i className="bi bi-check-circle-fill"></i> / syntax error please check again <i className="bi bi-emoji-frown-fill"></i></h5>
      <li className="d-grid gap-2 col-1 ">

        <button className="btn btn-info my-3">
        <Link href="/Part1SetupGame/SetConstructionPlanPlayer1"></Link>check
        </button>
       
      </li>
      <div className="d-grid gap-2 col-1 ">
          <div className="d-flex gap-2" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">
              <Link href="/Part1SetupGame/SetConfigurationPlan">Back</Link>
            </button>

            <button type="button" className="btn btn-primary">
              <Link href="/Part1SetupGame/SetConstructionPlanPlayer2">
                Next
              </Link>
            </button>
          </div>
        </div>
     
    </div>
  )
}

export default SetConstructionPlanPlayer1