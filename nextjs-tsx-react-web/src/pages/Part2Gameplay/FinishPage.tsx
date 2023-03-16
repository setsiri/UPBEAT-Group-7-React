import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function FinishPage() {
  return (
    <div className=" d-grid gap-2 col-3 mx-auto my-5 text-black">
      
<Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
       
      </Head><h5 >Result of the game</h5>
      <h1 className="my-2">the winner is player 1 !!</h1>
 

      <div >
      <button className="btn btn-primary my-3"><Link href="/">go to homepage</Link></button>
      
</div>
        
    </div>
  )
}

export default FinishPage