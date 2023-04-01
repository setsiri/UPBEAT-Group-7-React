import React from "react";
import Link from "next/link";
import Head from "next/head";
import Bganimation from "../../public/bganimation";
import { motion, AnimatePresence } from "framer-motion";
import catfunny from "../../public/catfunny.gif";
import Image from "next/image";
import rb from "../../public/rb.js";

function FinishPage() {
  return (
    <AnimatePresence>
      {" "}
      <div className=" position-fill ">
        <Bganimation />
      </div>
      <motion.div
        initial={{ y: 100, x: 0, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <div className="position-relative p-5 ">
          <div className=" text-center my-5 text-light p-5 ">
            <h4>Result of the game</h4>

            <div className="my-3">
              <Image
                style={{ border: "6px outset " }}
                src={catfunny}
                alt={""}
              />
            </div>

            <h1 className="animate-charcter">the winner is player 1 !!</h1>

            <div className="text-center">
              <button className="btn btn-primary my-3 btn-lg">
                <Link href="/">go to homepage</Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FinishPage;
