import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function UpdateConstructionPlan() {
  return (
    <div className="d-grid gap-2 col-1 mx-5  text-black">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
       
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
      <h2 className="my-2">UpdateConstructionPlan</h2>
        
        <h5>contructionplan editor</h5>
        <div><textarea
          rows={22}
          cols={100}
        ></textarea></div>
       
      
      
        <h5>contructionplan editor</h5>
        <div>   <textarea
          rows={22}
          cols={100}
        ></textarea></div>
    
    <h5>state : computing...<i className="bi bi-hourglass-split"></i> / compute finished <i className="bi bi-check-circle-fill"></i> / syntax error please check again <i className="bi bi-emoji-frown-fill"></i></h5>
      <li className="d-grid gap-2 col-1 ">

        <button className="btn btn-info my-3">
        <Link href="/Part1SetupGame/SetConstructionPlanPlayer1"></Link>check
        </button>
       
      </li>
        <div className='mx-0'><button className="btn btn-primary">
        <Link href="/Part2Gameplay/CurrentConstructionPlan">finished changing</Link>
        </button></div>
             
        
        
    </div>
  )
}

export default UpdateConstructionPlan