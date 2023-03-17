import React, { useEffect, useState } from "react";
import { HexGrid, Layout, Hexagon, GridGenerator, Hex } from "../grid";

function Test1() {
  const hexagons: Hex[] = [];
  const evenq_to_cube = (row: number, col: number) => {
    var q = col;
    var r = row - (col + (col & 1)) / 2;
    return new Hex(q, r, -q - r);
  };

  const grid = () => {
    for (let i = -2; i < 2; i++) {
      for (let j = -4; j < 5; j++) {
        hexagons.push(evenq_to_cube(i, j));
      }
    }
  };

  const centerGrid = (
    left: number,
    right: number,
    top: number,
    botton: number
  ) => {
    for (let q = left; q <= right; q++) {
      let q_offset = q >> 1;
      for (let r = top - q_offset; r <= botton - q_offset; r++) {
        hexagons.push(new Hex(q, r, -q - r));
      }
    }
  };

  centerGrid(-3, 3, -3, 3);
  console.log(hexagons);

  return (
    <div className="App">
      <h1>Basic example of HexGrid usage.</h1>
      <HexGrid width={1200} height={1000}>
        <Layout size={{ x: 7, y: 7 }}>
          {hexagons.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}

export default Test1;
