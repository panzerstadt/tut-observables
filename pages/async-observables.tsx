import { useEffect, useRef, useState } from "react";
import { Example } from "../components/Example";
import { Next } from "../components/Next";
import { Pic } from "../components/Pic";
import { BehaviorSubject } from "rxjs";

// this observable is somewhere else in an API (its the weather radio station)
const weather = new BehaviorSubject("it's sunny!");

const getWeather = () => {
  const flipflop = Math.round(Math.random());
  return flipflop ? "wait, it's sunny!" : "wait, it's cloudy!";
};

const AsyncObservables = () => {
  const [value, setValue] = useState<string>();
  const interval = useRef<NodeJS.Timer>();
  const handleClick = () => {
    weather.subscribe((res) => {
      setValue(res);
    });
    interval.current = setInterval(() => {
      weather.next(getWeather());
    }, 1000);
  };
  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <main className="min-h-screen py-20 flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Observables</h1>

      <p className="max-w-lg text-blue-600">
        so what you really needed was updates on the same data, but over time.
        using observables, you get to do that.
      </p>

      <Pic
        src="/images/async01.png"
        caption="so instead of asking for info once..."
      />
      <p className="max-w-lg text-blue-600">
        you turn on your radio, and tune it to the channel that provides
        up-to-date weather information.
      </p>
      <Pic
        src="/images/beach.png"
        caption="the radio says its sunny, so you decide to go to the beach"
      />
      <Pic src="/images/observable01.png" caption="so you start packing" />
      <Pic
        src="/images/observable02.png"
        caption="while you're packing, you get another update, and now it turns out its gonna rain after all..."
      />
      <Pic
        src="/images/observable03.png"
        caption="and with this new information, you can decide to do something else and not waste time packing for a beach day that was not gonna happen"
      />

      <Example onClick={handleClick} value={value} />

      <Next
        href="/final"
        title="Final"
        description="wrap up, and how it fits into your use cases at work."
      />
    </main>
  );
};

export default AsyncObservables;
