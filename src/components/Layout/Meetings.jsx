import React from "react";
import { useRef } from "react";
import MeetingImage from "../UIElements/MeetingImage";

const imagePaths = [
  "/assets/image/meetings/1.jpg",
  "/assets/image/meetings/2.jpg",
  "/assets/image/meetings/3.jpg",
  "/assets/image/meetings/4.jpg",
  "/assets/image/meetings/5.jpg",
  "/assets/image/meetings/6.jpg",
  "/assets/image/meetings/7.jpg",
];

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

  return (
    <div className="section" data-anchor="page4">
      <div className="ml-52">
        <h1 className="text-left text-7xl text-white">
          Meetings <br />
          Minutes
        </h1>
        <a
          className="text-sm italic text-white"
          href="https://www.google.com/drive/"
        >
          <br />
          click here for documents
        </a>
      </div>
      <div
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        ref={trackRef}
        // @todo plz change this css (NO TRANSATION PLEASE!!!)
        className="absolute top-1/2 left-1/2 flex w-max translate-y-[-50%] select-none gap-10"
        onMouseDown={handleOnDown}
        onMouseUp={handleOnUp}
        onMouseMove={handleOnMove}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onTouchEnd={(e) => handleOnUp(e.touches[0])}
        onTouchMove={(e) => handleOnMove(e.touches[0])}
      >
        {imagePaths.map((imagePath, index) => (
          <MeetingImage imagePath={imagePath} alt={index} />
        ))}
      </div>
    </div>
  );
};

export default Meetings;
