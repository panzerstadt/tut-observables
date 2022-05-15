import { Next } from "../components/Next";

const AsyncPromises = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Promises</h1>

      <p>
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <Next
        href="/async-observables"
        title="Observables"
        description="let's start by understanding how you get data synchronously"
      />
    </main>
  );
};

export default AsyncPromises;
