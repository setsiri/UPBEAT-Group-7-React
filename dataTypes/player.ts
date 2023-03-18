export class player {
  budget: number;
  cityCenterPos: number[];
  crewPos: number[];
  playerIndex: number;
  status: string;

  constructor(
    playerIndex: number,
    budget: number,
    cityCenterPos: number[],
    crewPos: number[],
    status: string
  ) {
    this.budget = budget;
    this.cityCenterPos = cityCenterPos;
    this.crewPos = crewPos;
    this.playerIndex = playerIndex;
    this.status = status;
  }
}
export default player;
