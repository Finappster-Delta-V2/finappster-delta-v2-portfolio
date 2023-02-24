import { useRef } from "react";
import Card from "../components/UIElements/Card";
import useIntersectionAnimation from "../utils/useIntersectionAnimation";

const team = [
  {
    name: "Peter An",
    occupation: "developer",
    imagePath: "/assets/image/peter.jpg",
    animation: "fade-left",
  },
  {
    name: "Jameson Yeo",
    occupation: "developer",
    imagePath: "/assets/image/jameson.jpg",
    animation: "fade-top",
  },
  {
    name: "Christopher Li",
    occupation: "developer",
    imagePath: "/assets/image/chris.jpg",
    animation: "fade-bottom",
  },
  {
    name: "Renjo Angeles",
    occupation: "developer",
    imagePath: "/assets/image/renjo.jpg",
    animation: "fade-right",
  },
];

const cardAnimations = team.map((teamCard) => teamCard.animation);

const Third = () => {
  const cardRefs = useRef([]);

  useIntersectionAnimation(cardRefs, cardAnimations, 0);

  return (
    <div className="section" data-anchor="page2">
      <div className="flex h-[90vh] items-center justify-center">
        <div className="flex content-center items-center justify-center gap-24 px-12 pt-7">
          {team.map((member, index) => (
            <Card
              key={member.name}
              occupation={member.occupation}
              name={member.name}
              imagePath={member.imagePath}
              ref={(newRef) => (cardRefs.current[index] = newRef)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Third;
