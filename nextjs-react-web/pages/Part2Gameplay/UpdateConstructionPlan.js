import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function UpdateConstructionPlan() {
  return (
    <div>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
      <h1>UpdateConstructionPlan</h1>
        
        <h5>contructionplan editor</h5>
       <textarea
          rows={22}
          cols={100}
        ></textarea>
      
      
        <h5>contructionplan editor</h5>
       <textarea
          rows={22}
          cols={100}
        ></textarea>
      
        <li>
             <button class="btn btn-primary">
        <Link href="/Part2Gameplay/CurrentConstructionPlan">finished changing</Link>
        </button>
        </li>
        
    </div>
  )
}

export default UpdateConstructionPlan