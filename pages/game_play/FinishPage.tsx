import React from "react";
import Link from "next/link";
import Head from "next/head";

function FinishPage() {
  return (
    <div className=" text-center my-5 text-black">
      <h5>Result of the game</h5>
      <h1 className="my-2">the winner is player 1 !!</h1>

      <div className="text-center">
        <button className="btn btn-primary my-3">
          <Link href="/">go to homepage</Link>
        </button>
      </div>
    </div>
  );
}

export default FinishPage;
