import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Card = (props) => {
  const { occupation, name, imagePath, cardRef } = props;

  return (
    <div
      ref={cardRef}
      className="ml-12 flex flex-col items-center justify-center rounded-md bg-gray-200 p-12 transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg"
    >
      <div className="overflow-hidden rounded-full">
        <img src={imagePath} alt="" height="150rem" width="150rem" />
      </div>
      <div className="flex flex-col items-center py-5">
        <h2 className="text-xl">{name}</h2>
        <p className="tracking-[0.5rem]">{occupation}</p>
      </div>
      <div className="flex">
        <a className="a-github" href="https://github.com/">
          <AiFillGithub className="connection github" size={50} />
        </a>
        <a className="a-linkedin" href="https://nz.linkedin.com/">
          <AiFillLinkedin className="connection linkedin" size={50} />
        </a>
      </div>
    </div>
  );
};

export default Card;
