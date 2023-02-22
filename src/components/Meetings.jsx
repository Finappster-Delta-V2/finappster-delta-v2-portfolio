import React from "react";
import { useRef, useEffect } from "react";

const Meetings = () => {
  const trackRef = useRef(null);

  const handleOnDown = (e) => {
    trackRef.current.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    trackRef.current.dataset.mouseDownAt = "0";
    trackRef.current.dataset.prevPercentage =
      trackRef.current.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (trackRef.current.dataset.mouseDownAt === "0") return;

    const mouseDelta =
        parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(trackRef.current.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    trackRef.current.dataset.percentage = nextPercentage;

    trackRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );

    const images = trackRef.current.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        {
          duration: 1200,
          fill: "forwards",
        }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e) =>
        handleOnDown(e.touches[0])
      );
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e) => handleOnUp(e.touches[0]));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, []);
  return (
    <div className="section" data-anchor="page4">
      <h1 className="meeting-title">
        Meetings <br />
        Minutes
        <a className="meeting-link" href="https://www.google.com/drive/">
          <br />
          click here for documents
        </a>
      </h1>
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        ref={trackRef}
        className="w-full"
      >
        <img
          className="image"
          src="/assets/image/meetings/1.jpg"
          draggable="false"
          alt="1"
        />
        <img
          className="image"
          src="./assets/image/meetings/2.jpg"
          draggable="false"
          alt="2"
        />
        <img
          className="image"
          src="./assets/image/meetings/3.jpg"
          draggable="false"
          alt="3"
        />
        <img
          className="image"
          src="./assets/image/meetings/4.jpg"
          draggable="false"
          alt="4"
        />
        <img
          className="image"
          src="./assets/image/meetings/5.jpg"
          draggable="false"
          alt="5"
        />
        <img
          className="image"
          src="./assets/image/meetings/6.jpg"
          draggable="false"
          alt="6"
        />
        <img
          className="image"
          src="./assets/image/meetings/7.jpg"
          draggable="false"
          alt="7"
        />
      </div>
    </div>
  );
};

export default Meetings;
