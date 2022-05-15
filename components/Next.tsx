import Link from "next/link";
import { useEffect } from "react";

interface Props {
  href: string;
  title: string;
  description: string;
}
export const Next: React.FC<Props> = ({
  href = "/",
  title = "Next",
  description = "go to the next page",
}) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKBNext);
    return () => window.removeEventListener("keydown", handleKBNext);
  }, []);

  const handleKBNext = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowRight":
        window.location.href = href;
        break;
      case "ArrowLeft":
        window.history.back();
        break;
      case "Home":
        window.location.href = "/";
        break;
      default:
        console.log("keydown: ", e.code);
        return;
    }
  };

  return (
    <Link href={href}>
      <a className="font-sans border rounded-md p-6">
        <h2 className="text-xl font-semibold text-gray-900">{title} &rarr;</h2>
        <p className="text-lg font-medium text-gray-800">{description}</p>
      </a>
    </Link>
  );
};
