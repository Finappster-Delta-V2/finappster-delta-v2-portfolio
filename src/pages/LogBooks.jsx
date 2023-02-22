import { useEffect, useRef } from "react";
import LogBook from "../components/UIElements/LogBook";

const LogBooks = () => {
  const peterLogRef = useRef();
  const jamesonLogRef = useRef();
  const chrisLogRef = useRef();
  const renjoLogRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          peterLogRef.current.classList.add("fade-left");
          setTimeout(() => {
            jamesonLogRef.current.classList.add("fade-left");
          }, 100);
          setTimeout(() => {
            chrisLogRef.current.classList.add("fade-left");
          }, 200);
          setTimeout(() => {
            renjoLogRef.current.classList.add("fade-left");
          }, 300);
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
        <div className="grid grid-cols-2 gap-y-12 gap-x-32">
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
