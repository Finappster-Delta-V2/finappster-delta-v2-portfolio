import { useEffect, useRef } from "react";
import Card from "./Card/Card";

const animTypes = ["fade-left", "fade-top", "fade-bottom", "fade-right"];

const Third = () => {
  const teamWrapperRef = useRef();

  const peterCardRef = useRef();
  const jamesonCardRef = useRef();
  const chrisCardRef = useRef();
  const renjoCardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          peterCardRef.current.classList.add(animTypes[0]);
          jamesonCardRef.current.classList.add(animTypes[1]);
          chrisCardRef.current.classList.add(animTypes[2]);
          renjoCardRef.current.classList.add(animTypes[3]);
        } else {
          peterCardRef.current.classList.remove(animTypes[0]);
          jamesonCardRef.current.classList.remove(animTypes[1]);
          chrisCardRef.current.classList.remove(animTypes[2]);
          renjoCardRef.current.classList.remove(animTypes[3]);
        }
      });
    });

    if (teamWrapperRef.current) {
      observer.observe(teamWrapperRef.current);
    }

    // Clean up function to disconnect the observer when the component unmounts
    return () => {
      if (teamWrapperRef.current) observer.unobserve(teamWrapperRef.current);
    };
  }, []);

  return (
    <div className="section" data-anchor="page2">
      <div
        className="team-wrapper flex items-center justify-center"
        ref={teamWrapperRef}
      >
        <div className="flex content-center items-center justify-center px-12 pt-7">
          <Card
            occupation="developer"
            name="Peter An"
            imagePath="/assets/image/peter.jpg"
            cardRef={peterCardRef}
          />
          <Card
            occupation="developer"
            name="Jameson Yeo"
            imagePath="/assets/image/jameson.jpg"
            cardRef={jamesonCardRef}
          />
          <Card
            occupation="developer"
            name="Christopher Li"
            imagePath="/assets/image/chris.jpg"
            cardRef={chrisCardRef}
          />
          <Card
            occupation="developer"
            name="Renjo Angeles"
            imagePath="/assets/image/renjo.jpg"
            cardRef={renjoCardRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Third;
