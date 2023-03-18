export class region {
  deposit: number;
  playerOwnerIndex: number;
  type: string;

  constructor(deposit: number, playerOwnerIndex: number, type: string) {
    this.deposit = deposit;
    this.playerOwnerIndex = playerOwnerIndex;
    this.type = type;
  }
}
export default region;
