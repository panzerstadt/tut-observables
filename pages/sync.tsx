import { useState } from "react";
import { Example } from "../components/Example";
import { More } from "../components/More";
import { Next } from "../components/Next";
import { Pic } from "../components/Pic";

const Sync = () => {
  const [value, setValue] = useState<string>();
  const handleClick = () => {
    setValue("its cloudy!");
  };
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Synchronous</h1>

      <Pic
        src="/images/sync.png"
        caption="you look out the window and see clouds and droplets of water"
      />

      <p className="max-w-lg text-blue-600">
        To know about the weather synchronously, you would turn your head and
        look out the window, and you see that it's cloudy.
      </p>

      <More
        title="More"
        content="this is a form of PULL based messaging, because you are pulling the data directly from somewhere, in this case the window in your house. a PULL system is when the producer of the data doesn't know when its data is consumed (the window doesn't know when you are gonna look at it)"
      />

      <Example onClick={handleClick} value={value} />

      <Next
        href="/async-promises"
        title="Promises"
        description="Now let's see how we usually get data asynchronously in JS"
      />
    </main>
  );
};

export default Sync;
