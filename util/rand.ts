/* eslint-disable no-param-reassign */
export function rand(min: number, max: number) {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
