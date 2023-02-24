import React, { useEffect } from "react";
import { useRef } from "react";
import MeetingImage from "../components/UIElements/MeetingImage";
import useHorizontalScroll from "../utils/useHorizontalScroll";

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
  const trackRef = useRef();

  const { handleOnDown, handleOnUp, handleOnMove } =
    useHorizontalScroll(trackRef);

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
        className="absolute top-1/2 left-1/2 flex w-max translate-y-[-50%] select-none gap-10 bg-black"
        onMouseDown={handleOnDown}
        onMouseUp={handleOnUp}
        onMouseMove={handleOnMove}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onTouchEnd={(e) => handleOnUp(e.touches[0])}
        onTouchMove={(e) => handleOnMove(e.touches[0])}
        onMouseLeave={handleOnUp}
      >
        {imagePaths.map((imagePath, index) => (
          <MeetingImage key={imagePath} imagePath={imagePath} alt={index} />
        ))}
      </div>
    </div>
  );
};

export default Meetings;
