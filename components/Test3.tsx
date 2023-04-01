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
import region from "@/dataTypes/territory";

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
    return [row, col];
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

  const deposit = (pos: number[]) => {
    if (pos[0] < props.territory.length && pos[1] < props.territory[0].length) {
      /* "cityCenter" */

      if (props.territory[pos[0]][pos[1]] !== null) {
        return (
          <Text type={props.territory[pos[0]][pos[1]].type}>
            {Math.floor(props.territory[pos[0]][pos[1]]?.deposit)}
          </Text>
        );
      } else {
        return <Text type={"empty"}>{""}</Text>;
      }
    }
  };

  const region = (hex: Hex, i: number) => {
    let pos = axial_to_evenq(hex);
    if (pos[0] < props.territory.length && pos[1] < props.territory[0].length) {
      return (
        <Hexagon
          key={i}
          q={hex.q}
          r={hex.r}
          s={hex.s}
          playerIndex={props.territory[pos[0]][pos[1]]?.playerOwnerIndex}
        >
          {deposit(pos)}
        </Hexagon>
      );
    } else {
      return (
        <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} playerIndex={-1}>
          {deposit(pos)}
        </Hexagon>
      );
    }
  };

  if (props.territory[0].length === 0) {
    grid(10, 10);
  } else {
    grid(props.territory.length, props.territory[0].length);
  }

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
          {hexagons.map((hex, i) => region(hex, i))}
        </Layout>
      </HexGrid>
    </div>
  );
}

export default Test3;
