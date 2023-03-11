import React from 'react'
import Link from 'next/link'
import Head from 'next/head'


function FinishPage() {
  return (
    <div class="d-grid gap-2 col-1 mx-5 my-2">
      
<Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head><h2>FinishPage</h2>
 <p>the winner is player 1 !!</p>

      <div >
      <button class="btn btn-primary my-3"><Link href="/">go to homepage</Link></button>
      
</div>
        
    </div>
  )
}

export default FinishPage