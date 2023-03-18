export class Action {
  action: string;
  direction: string;
  value: number;

  constructor(action: string, direction: string, value: number) {
    this.action = action;
    this.direction = direction;
    this.value = value;
  }
}
export default Action;
