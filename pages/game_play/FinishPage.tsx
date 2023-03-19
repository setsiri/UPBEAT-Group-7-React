import React from "react";
import Link from "next/link";
import Head from "next/head";
import Bganimation from "../../public/bganimation";

function FinishPage() {
  return (
    <div>
      <div className=" position-fill ">
        <Bganimation />
      </div>
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
    </div>
  );
}

export default FinishPage;
