import { forwardRef } from "react";
import { BsFileEarmarkWord } from "react-icons/bs";

const LogBook = forwardRef((props, ref) => {
  const { link = "https://github.com", name, size = 50 } = props;

  return (
    <div
      className="my-10 flex items-center justify-between gap-4 rounded-md bg-gradient-to-tl from-gray-900 to-black p-8 opacity-0 outline outline-1 outline-white"
      ref={ref}
    >
      <div className="text-4xl font-light text-white">{name}</div>
      <a
        className="rounded-full bg-gray-700 p-3 text-white outline outline-1 outline-offset-4 outline-white transition-transform duration-300 ease-in-out hover:scale-125"
        href={link}
      >
        <BsFileEarmarkWord size={size} />
      </a>
    </div>
  );
});

export default LogBook;
