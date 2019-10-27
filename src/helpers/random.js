import { GRID } from "../constants";

export const generateRandomMove = function() {
  return Math.floor((Math.random() * GRID.SIZE));
}
