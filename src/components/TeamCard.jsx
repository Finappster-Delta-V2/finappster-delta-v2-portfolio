import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const card = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const TeamCard = ({
  occupation,
  name,
  imagePath,
  gitHubUsername,
  linkedInUsername,
  delay,
}) => {
  console.log(delay);
  return (
    <motion.div
      className="flex flex-col items-center justify-center rounded-md bg-white p-12 outline outline-1 outline-white"
      // variants={card}
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: "0" }}
      transition={{ duration: 1, delay: delay }}
    >
      <div className="overflow-hidden rounded-full outline outline-1 outline-offset-4 outline-white">
        <img src={imagePath} alt="" height="150rem" width="150rem" />
      </div>
      <div className="flex flex-col items-center py-5">
        <h2 className="text-xl">{name}</h2>
        <p className="tracking-[0.5rem]">{occupation}</p>
      </div>
      <div className="flex gap-6">
        <a
          target="_blank"
          className="transition-transform duration-300 ease-in-out hover:scale-125"
          href={`https://github.com/${gitHubUsername}/`}
        >
          <AiFillGithub className="" size={50} />
        </a>
        <a
          target="_blank"
          className="transition-transform duration-300 ease-in-out hover:scale-125"
          href={`https://www.linkedin.com/in/${linkedInUsername}/`}
        >
          <AiFillLinkedin className="" size={50} />
        </a>
      </div>
    </motion.div>
  );
};
