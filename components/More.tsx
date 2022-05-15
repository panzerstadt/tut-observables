import { Disclosure } from "@headlessui/react";
import { PropsWithChildren } from "react";

interface Props {
  title?: string;
  content?: string;
}
export const More: React.FC<PropsWithChildren<Props>> = ({
  title = "more",
  content = "expanded contents",
  children,
}) => {
  return (
    <div className="w-full max-w-lg flex flex-col gap-2 items-start">
      <Disclosure>
        <Disclosure.Button className="py-1 px-2 border rounded-md hover:bg-blue-50 transition-colors font-semibold text-md">
          {title}
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-700 w-full max-w-lg flex flex-col gap-2 bg-gray-50 p-2 rounded-md">
          {content}
          {children}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};
