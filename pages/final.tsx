import { Next } from "../components/Next";
import { Pic } from "../components/Pic";

const Final = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl">Promises</h1>

      <p className="max-w-lg text-blue-600">
        finally, where Observables fit into the broader context of javascript
        event handling is that it can be used as an additional piece to the
        promise puzzle, for when you need to request, and then get back changing
        data over time (e.g. weather, async progress bar, chat message
        notifications)
      </p>

      <Pic
        src="images/asyncList.png"
        caption="think of it as promises that give multiple updates over time."
      />

      <div className="max-w-lg flex flex-col gap-4 text-sm">
        <h2 className="font-bold text-gray-700 text-lg mb-2">
          Further reading
        </h2>

        <a
          className="font-semibold underline text-pink-600"
          href="https://kafka.apache.org/documentation.html#design_pull"
        >
          link to Apache Kafka's docs on their system design, and comparisons
          between push and pull systems, of which observables are part of the
          conversation.
        </a>

        <a
          className="font-semibold underline text-pink-600"
          href="https://www.youtube.com/watch?v=ewcoEYS85Co"
        >
          Fireship's video on how to use RxJS without shooting yourself in the
          foot
        </a>
        <a
          className="font-semibold underline text-pink-600"
          href="https://www.youtube.com/watch?v=GSI7iyK_ju4"
        >
          The original video that was the basis for this explainer, in video
          form.
        </a>
      </div>
      <Next
        href="/"
        title="Back to the Beginning"
        description="If you wanna go through this all over again..."
      />
    </main>
  );
};

export default Final;
