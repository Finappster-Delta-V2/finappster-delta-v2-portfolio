import { motion } from "framer-motion";
import { TeamCard } from "../components/TeamCard";

const teamCardContent = [
  {
    occupation: "Student",
    name: "Peter",
    imagePath: "/public/assets/image/peter.jpg",
    gitHubUsername: "Exotica0122",
    linkedInUsername: "peteransoftware",
    delay: 0,
  },
  {
    occupation: "Student",
    name: "Chris",
    imagePath: "/public/assets/image/chris.jpg",
    gitHubUsername: "christo834",
    linkedInUsername: "christopher-l-27b4bb1b9",
    delay: 0.25,
  },
  {
    occupation: "Student",
    name: "Renjo",
    imagePath: "/public/assets/image/renjo.jpg",
    gitHubUsername: "angeles-renjo",
    linkedInUsername: "jo-angel-558b18235/",
    delay: 0.5,
  },
  {
    occupation: "Student",
    name: "Jameson",
    imagePath: "/public/assets/image/jameson.jpg",
    gitHubUsername: "yeoj1092",
    linkedInUsername: "jameson-yeo",
    delay: 0.75,
  },
];

export const Home = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-slate-800 text-white">
        <motion.div
          className="flex items-center justify-center gap-36"
          initial={{ opacity: 0, y: "-10%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-8xl">
            Delta V2 <br />
            <p className="mt-6 ml-4 text-2xl">2022-2023</p>
          </h1>
          <div className="relative flex h-[30rem] w-[30rem] items-center justify-center overflow-hidden rounded-full object-cover drop-shadow-2xl">
            <img
              className="h-full object-cover"
              src="/public/assets/image/team-photo.png"
              alt="Image 1"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex h-screen flex-col items-center justify-center gap-24 bg-slate-400 text-black">
        <h1 className=" text-6xl font-bold ">The Team</h1>
        <div className="flex items-center justify-center gap-28">
          {teamCardContent.map((team) => (
            <TeamCard
              key={team.name}
              occupation={team.occupation}
              name={team.name}
              imagePath={team.imagePath}
              gitHubUsername={team.gitHubUsername}
              linkedInUsername={team.linkedInUsername}
              delay={team.delay}
            />
          ))}
        </div>
      </div>
    </>
  );
};
