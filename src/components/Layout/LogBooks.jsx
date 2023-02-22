import { useEffect, useRef } from "react";
import LogBook from "../UIElements/LogBook";

const LogBooks = () => {
  const peterLogRef = useRef();
  const jamesonLogRef = useRef();
  const chrisLogRef = useRef();
  const renjoLogRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-left");
        } else {
          entry.target.classList.remove("fade-left");
        }
      });
    });

    observer.observe(peterLogRef.current);
    observer.observe(jamesonLogRef.current);
    observer.observe(chrisLogRef.current);
    observer.observe(renjoLogRef.current);

    // Clean up function to disconnect the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section" data-anchor="page3">
      <div className="flex items-center justify-center">
        <h1 className="text-8xl text-white">Log Books</h1>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-12">
          <LogBook name="Peter An" ref={peterLogRef} />
          <LogBook name="Jameson Yeo" ref={jamesonLogRef} />
          <LogBook name="Christopher Li" ref={chrisLogRef} />
          <LogBook name="Renjo Angeles" ref={renjoLogRef} />
        </div>
      </div>
    </div>
  );
};

export default LogBooks;
