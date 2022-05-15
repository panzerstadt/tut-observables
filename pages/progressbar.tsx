import { Next } from "../components/Next";
import { Pic } from "../components/Pic";

/**
 * POC:
 * there will be an API that will let you subscribe to an observable, and you will receive updates on the build progress
 * based on the n/189 thing that the pw builder returns
 *
 * write that API, and also
 * write the consumer here that will:
 * - subscribe to that observable, and consume the incoming progress as messages
 * - and update the UI to reflect the current prograss of the build in percentages, with the actual console log.
 */

const ProgressBar = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Progress Bar POC</h1>

      <p className="max-w-lg text-blue-600">POC here todo</p>

      <Next href="/" title="Go Home" description="homepage" />
    </main>
  );
};

export default ProgressBar;
