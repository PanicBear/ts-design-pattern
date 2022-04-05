namespace FP {
  interface Strategy {
    (data: string[]): string[];
  }
  interface Context {
    (data: string[], strategy: Strategy): void;
  }

  const strategyA: Strategy = (data) => data.sort();
  const strategyB: Strategy = (data) => data.reverse();

  const fpContext: Context = (data, callbackFn) => {
    const result = callbackFn(data).join(",");
    console.log(result);
  };

  console.log("Client: Strategy is set to normal sorting.");
  fpContext(["a", "b", "c", "d", "e"], strategyA);
  console.log("");
  console.log("Client: Strategy is set to reverse sorting.");
  fpContext(["a", "b", "c", "d", "e"], strategyB);
}
