import React, { useEffect, useState } from "react";
import { HexGrid, Layout, Hexagon, Hex, Text } from "../grid";
import region from "@/dataTypes/territory";

function Test3(props: any) {
  const hexagons: Hex[] = [];
  // 7*7 for 8*10
  // 5*5 for 10*15
  // 3.5*3.5 for 15*20
  const hexagonSize = { x: 3.5, y: 3.5 };

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
        let text = "";

        if (
          pos[0] === props.players[props.turn]?.crewPos[0] &&
          pos[1] === props.players[props.turn]?.crewPos[1]
        ) {
          if (props.turn === 0) text = "🧑🏻‍🌾";
          else if (props.turn === 1) text = "🤴🏽";
        } else text = Math.floor(props.territory[pos[0]][pos[1]]?.deposit);

        return <Text type={props.territory[pos[0]][pos[1]].type}>{text}</Text>;
      } else {
        if (
          pos[0] === props.players[props.turn]?.crewPos[0] &&
          pos[1] === props.players[props.turn]?.crewPos[1]
        ) {
          let text = "";
          if (props.turn === 0) text = "🧑🏻‍🌾";
          else if (props.turn === 1) text = "🤴🏽";
          return (
            <Text type={props.territory[pos[0]][pos[1]]?.type}>{text}</Text>
          );
        } else return <Text type={"empty"}>{""}</Text>;
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
    // grid(8, 10);
    // grid(10, 15);
    grid(15, 20);
  } else {
    grid(props.territory.length, props.territory[0].length);
  }

  /** console.log(hexagons); */
  // "-4 -50 1 135"
  return (
    <div className="App">
      <HexGrid width={1200} height={1200} viewBox="-4 -42 1 135">
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
