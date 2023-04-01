const { useState } = require("react");

const [a, setA] = useState(0);

export const result = a;
export function setResult(n) {
  setA(n);
}
