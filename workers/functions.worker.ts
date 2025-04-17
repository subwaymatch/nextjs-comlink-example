import * as Comlink from "comlink";

async function multiplyByTwo(value: number) {
  return value * 2;
}

Comlink.expose({
  multiplyByTwo,
});
