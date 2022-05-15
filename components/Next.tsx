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
    if (e.code === "ArrowRight") {
      window.location.href = href;
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
