import { forwardRef } from "react";
import { BsFileEarmarkWord } from "react-icons/bs";

const LogBook = forwardRef((props, ref) => {
  const { link = "https://github.com", name } = props;

  return (
    <div className="my-10 flex items-center gap-4" ref={ref}>
      <a
        className="text-sky-300 transition-transform duration-300 ease-in-out hover:scale-125"
        href="https://github.com"
      >
        <BsFileEarmarkWord size={75} />
      </a>
      <div className="text-4xl text-white">{name}</div>
    </div>
  );
});

export default LogBook;
