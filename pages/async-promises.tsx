import { useState } from "react";
import { Example } from "../components/Example";
import { More } from "../components/More";
import { Next } from "../components/Next";
import { Pic } from "../components/Pic";

const fetchAsync = () =>
  new Promise<string>((res) => {
    //fetch data...
    setTimeout(() => {
      res("it's sunny!");
    }, 1000);
  });

const AsyncPromises = () => {
  const [value, setValue] = useState<string>();
  const handleClick = () => {
    fetchAsync().then((res) => {
      setValue(res);
    });
  };

  return (
    <main className="min-h-screen py-20 flex flex-col items-center justify-center gap-8 overflow-y-auto">
      <h1 className="text-6xl">Promises</h1>

      <Pic src="/images/async01.png" caption="asking for info" />
      <Pic
        src="/images/async02.png"
        caption="doing something else while info is being retrieved"
      />
      <Pic src="/images/async03.png" caption="getting info after a while" />

      <p className="max-w-lg text-blue-600">
        To know about the weather asynchronously, you ask your friend to check
        the weather, and while your friend is checking the weather, you go on
        reading. then after a while, your friend comes back to you with the
        answer "It's sunny"
      </p>

      <More
        title="there is an issue with this though..."
        content="lets say you decide to pack for a beach day based on the result, and then while you're packing... the clouds roll in."
      >
        <Pic
          src="/images/async03.png"
          caption="after resolving the promise..."
        />
        <Pic
          src="/images/async-aside-01.png"
          caption="you make the decision to go to the beach cause you believe it will be sunny."
        />
        <Pic
          src="/images/async-aside-02.png"
          caption="but while you're packing up, the clouds roll in. turns out the prediction was wrong."
        />
      </More>

      <Example onClick={handleClick} value={value} />

      <More content="promises are an example of PUSH messaging, where you ask for something, and wait for data from the other party. then that party PUSHes data to you. a PUSH system is when the consumer of the data doesn't know when it will receive that data. In this case, you never know when your friend is gonna get back to you with the weather info." />

      <Next
        href="/async-observables"
        title="Observables"
        description="and finally, a different way of getting asynchronous data."
      />
    </main>
  );
};

export default AsyncPromises;
