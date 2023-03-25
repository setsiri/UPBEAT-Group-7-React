import React from "react";
import Link from "next/link";
import Head from "next/head";
import Bganimation from "../../public/bganimation";
import {motion, AnimatePresence} from "framer-motion"

function FinishPage() {
  return (<AnimatePresence> <div className=" position-fill ">
        <Bganimation />
      </div><motion.div  initial={{ y:100,x: 0,opacity: 0 , }}
    animate={{y:0,x:0, opacity: 1, }}
    exit={{ opacity: 0 }}
    transition={{duration: 0.75,}}>
     
      <div className="position-relative p-5 ">
        <div className=" text-center my-5 text-black p-5 ">
          <h5>Result of the game</h5>
          <h1 className="my-2">the winner is player 1 !!</h1>

          <div className="text-center">
            <button className="btn btn-primary my-3">
              <Link href="/">go to homepage</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div></AnimatePresence>
    
  );
}

export default FinishPage;
