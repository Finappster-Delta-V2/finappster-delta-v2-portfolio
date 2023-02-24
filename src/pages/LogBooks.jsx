import { useRef } from "react";
import LogBook from "../components/UIElements/LogBook";
import useIntersectionAnimation from "../utils/useIntersectionAnimation";

const logBooks = [
  { name: "Peter An", animation: "fade-left" },
  { name: "Jameson Yeo", animation: "fade-left" },
  { name: "Christopher Li", animation: "fade-left" },
  { name: "Renjo Angeles", animation: "fade-left" },
];

const logAnimations = logBooks.map((logBook) => logBook.animation);

const LogBooks = () => {
  const logRefs = useRef([]);

  useIntersectionAnimation(logRefs, logAnimations, 100);

  return (
    <div className="section" data-anchor="page3">
      <div className="flex items-center justify-center">
        <h1 className="text-8xl text-white">Log Books</h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-y-12 gap-x-32">
          {logBooks.map((logBook, index) => (
            <LogBook
              key={logBook.name}
              name={logBook.name}
              ref={(newRef) => (logRefs.current[index] = newRef)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogBooks;
