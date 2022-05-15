interface Props {
  src: string;
  caption: string;
}
export const Pic: React.FC<Props> = ({
  src = "",
  caption = "image caption here",
}) => {
  return (
    <div
      className="border rounded-md p-6 flex flex-col bg-white"
      style={{ width: 480 }}
    >
      <img src={src} className="h-full w-full object-cover" />
      <p className="text-gray-500 italic">{caption}</p>
    </div>
  );
};
