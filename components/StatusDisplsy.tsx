import React from "react";

function StatusDisplay(props: any) {
  return (
    <div className="p-4 mt-3 d-grid gap-3 text-center">
      <div className="text-warning-emphasis">
        <h2 className="fs-1">Turn : Player {props?.curPlayer + 1}</h2>
      </div>
      <div className="text-danger-emphasis">
        <h2 className="fs-1">Action : {props.action?.action}</h2>
      </div>
      <div className="text-success-emphasis">
        <h2 className="fs-1">
          Budget : {props.players[props?.curPlayer]?.budget}
        </h2>
      </div>
      {/*
      <div className="text-warning-emphasis">
        <h2>current player index : {props?.curPlayer}</h2>
        <h2>game status : {props?.status}</h2>
      </div>
      <div className="text-danger-emphasis">
        <h2>action : {props.action?.action}</h2>
        <h2>direction : {props.action?.direction}</h2>
        <h2>value : {props.action?.value}</h2>
      </div>
      <br />
      <div className="text-success-emphasis">
        <h2>player index {props.players[0]?.playerIndex}</h2>
        <h2>budget : {props.players[0]?.budget}</h2>
        <h2>
          city center : ({props.players[0]?.cityCenterPos[0]},
          {props.players[0]?.cityCenterPos[1]})
        </h2>
        <h2>
          crew pos : ({props.players[0]?.crewPos[0]},
          {props.players[0]?.crewPos[1]})
        </h2>
        <h2>status : {props.players[0]?.status}</h2>
      </div>
      <br />
      <div className="text-primary-emphasis">
        <h2>player index {props.players[1]?.playerIndex}</h2>
        <h2>budget : {props.players[1]?.budget}</h2>
        <h2>
          city center : ({props.players[1]?.cityCenterPos[0]},
          {props.players[1]?.cityCenterPos[1]})
        </h2>
        <h2>
          crew pos : ({props.players[1]?.crewPos[0]},
          {props.players[1]?.crewPos[1]})
        </h2>
        <h2>status : {props.players[1]?.status}</h2>
      </div>
      */}
    </div>
  );
}

export default StatusDisplay;
