import * as Comlink from "comlink";
import type { Calculator } from "@/workers/class-instance.worker";

let worker: Worker | null = null;
let calculatorProxy: Comlink.Remote<Calculator> | null = null;

export async function getSingletonCalculator() {
  if (!calculatorProxy) {
    worker = new Worker(
      new URL("@/workers/class-instance.worker.ts", import.meta.url),
      { type: "module" }
    );
    calculatorProxy = Comlink.wrap(worker);
  }

  return calculatorProxy;
}
