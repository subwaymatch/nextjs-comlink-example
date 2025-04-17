"use client";

import { useEffect, useRef } from "react";
import * as Comlink from "comlink";

type WorkerApi = {
  multiplyByTwo: (value: number) => Promise<number>;
};

export default function SimpleExamplePage() {
  const workerRef = useRef<Comlink.Remote<WorkerApi> | null>(null);

  useEffect(() => {
    const init = async () => {
      const worker = new Worker(
        new URL("@/workers/functions.worker.ts", import.meta.url),
        { type: "module" }
      );
      workerRef.current = Comlink.wrap(worker);
    };

    init();
  }, []);

  const handleClick = async () => {
    const result = await workerRef.current!.multiplyByTwo(5);
    alert(`5 multiplied by 2 is ${result}`);
  };

  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h1>Simple Example</h1>

      <button onClick={handleClick}>Multiply 5 by 2</button>
    </div>
  );
}
