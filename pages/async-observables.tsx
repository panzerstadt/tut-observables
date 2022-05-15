import { Next } from "../components/Next";

const AsyncObservables = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Observables</h1>

      <p>
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <Next
        href="/"
        title="Back to the Beginning"
        description="go back to the start"
      />
    </main>
  );
};

export default AsyncObservables;
