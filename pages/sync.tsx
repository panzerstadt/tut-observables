import { Next } from "../components/Next";

const Sync = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Synchronous</h1>

      <p>
        Get started by editing <code>pages/index.tsx</code>
      </p>

      <Next
        href="/async-promises"
        title="Promises"
        description="Now let's see how we usually get data asynchronously in JS"
      />
    </main>
  );
};

export default Sync;
