"use client";

import { useEffect, useRef, useState } from "react";
import { getSingletonCalculator } from "@/lib/singletonCalculator";
import * as Comlink from "comlink";
import type { Calculator } from "@/workers/class-instance.worker";

export default function SingletonExamplePage() {
  const firstWorkerRef = useRef<Comlink.Remote<Calculator> | null>(null);
  const [firstTotal, setFirstTotal] = useState<number>(0);

  const secondWorkerRef = useRef<Comlink.Remote<Calculator> | null>(null);
  const [secondTotal, setSecondTotal] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const instance1 = await getSingletonCalculator();
      firstWorkerRef.current = instance1;
    })();

    (async () => {
      const instance2 = await getSingletonCalculator();
      secondWorkerRef.current = instance2;
    })();
  }, []);

  const updateTotalForBothWorkers = async () => {
    const firstWorkerTotal = await firstWorkerRef.current?.getTotal();
    const secondWorkerTotal = await secondWorkerRef.current?.getTotal();
    setFirstTotal(firstWorkerTotal ?? 0);
    setSecondTotal(secondWorkerTotal ?? 0);
  };

  const addTwoToFirstWorker = async () => {
    firstWorkerRef.current?.add(2);
    await updateTotalForBothWorkers();
  };

  const subtractTwoFromFirstWorker = async () => {
    firstWorkerRef.current?.subtract(2);
    await updateTotalForBothWorkers();
  };

  const addThreeToSecondWorker = async () => {
    secondWorkerRef.current?.add(3);
    await updateTotalForBothWorkers();
  };

  const subtractThreeFromSecondWorker = async () => {
    secondWorkerRef.current?.subtract(3);
    await updateTotalForBothWorkers();
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
      <h1>Two Worker Refs (Shared Thread via Singleton)</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <button onClick={addTwoToFirstWorker}>Add 2 to first worker ref</button>
        <button onClick={subtractTwoFromFirstWorker}>
          Subtract 2 from first worker ref
        </button>
        <button onClick={addThreeToSecondWorker}>
          Add 3 to second worker ref
        </button>
        <button onClick={subtractThreeFromSecondWorker}>
          Subtract 3 from second worker ref
        </button>
      </div>
      <p>
        Because a singleton instance is shared between the two worker refs, the
        total between the two worker refs should be identical.
      </p>
      <p>
        <strong>First Worker Ref&apos;s Total</strong>: {firstTotal}
      </p>
      <p>
        <strong>Second Worker Ref&apos;s Total</strong>: {secondTotal}
      </p>
    </div>
  );
}
