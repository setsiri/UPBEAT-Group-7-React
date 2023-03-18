import React, { useEffect, useState } from "react";
import {
  HexGrid,
  Layout,
  Hexagon,
  GridGenerator,
  Hex,
  Text,
  HexUtils,
} from "../grid";

function Test3(props: any) {
  /* console.log(props.territory); */
  const hexagons: Hex[] = [];
  const hexagonSize = { x: 7, y: 7 };

  const evenq_to_cube = (row: number, col: number) => {
    var q = col;
    var r = row - (col + (col & 1)) / 2;
    return new Hex(q, r, -q - r);
  };

  const axial_to_evenq = (hex: Hex) => {
    let col = hex.q;
    let row = hex.r + (hex.q + (hex.q & 1)) / 2;
    return row + ", " + col;
  };

  const grid = (m: number, n: number) => {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
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

  grid(10, 10);
  /** console.log(hexagons); */

  return (
    <div className="App">
      <HexGrid width={1525} height={1200} viewBox="-4 -50 1 135">
        <Layout
          size={hexagonSize}
          flat={true}
          spacing={1.0}
          origin={{ x: -50, y: -35 }}
        >
          {hexagons.map((hex, i) => (
            <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s}>
              <Text>{axial_to_evenq(hex)}</Text>
            </Hexagon>
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
}

export default Test3;
