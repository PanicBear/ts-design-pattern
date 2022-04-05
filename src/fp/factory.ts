namespace FP {
  type Product = string;

  interface Creator {
    factoryMethod: () => Product;
  }

  const creator1: Creator = {
    factoryMethod: () => "{Result of the ConcreteProduct1}",
  };
  const creator2: Creator = {
    factoryMethod: () => "{Result of the ConcreteProduct2}",
  };

  function clientCode(
    creator: Creator,
    consumer: (creator: Creator) => string
  ) {
    // ...
    console.log(
      "Client: I'm not aware of the creator's class, but it still works."
    );
    console.log(consumer(creator));
    // ...
  }

  console.log("App: Launched with the ConcreteCreator1.");
  clientCode(
    creator1,
    (creator) =>
      `Creator: The same creator's code has just worked with ${creator.factoryMethod()}`
  );
  console.log("");

  console.log("App: Launched with the ConcreteCreator2.");
  clientCode(
    creator2,
    (creator) =>
      `Creator: The same creator's code has just worked with ${creator.factoryMethod()}`
  );
}
