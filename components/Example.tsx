import { useState } from "react";

interface Props {
  onClick: () => void;
  value?: string;
}
export const Example: React.FC<Props> = ({ onClick, value = "no data" }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <div className="border rounded-md bg-pink-600 w-full max-w-lg p-6">
      <h1 className="text-white font-semibold mb-3">
        Example: try clicking on the button below
      </h1>

      <div className="flex justify-between">
        <button
          disabled={isClicked}
          className="select-none disabled:text-gray-300 disabled:cursor-not-allowed rounded-sm hover:bg-white hover:text-pink-600 bg-gray-50 py-2 px-4 shadow-md text-sm font-bold text-gray-700"
          onClick={handleClick}
        >
          GET DATA
        </button>

        <p className="ml-2 mt-4 text-yellow-200 text-sm">{value}</p>
      </div>
    </div>
  );
};
