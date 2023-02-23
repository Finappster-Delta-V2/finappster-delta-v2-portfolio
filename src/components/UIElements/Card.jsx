import { forwardRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Card = forwardRef((props, ref) => {
  const { occupation, name, imagePath } = props;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-md bg-gradient-to-tl from-gray-900 to-black p-12 text-white outline outline-1 transition-transform duration-200 ease-in-out"
    >
      <div className="overflow-hidden rounded-full outline outline-1 outline-offset-4 ">
        <img src={imagePath} alt="" height="150rem" width="150rem" />
      </div>
      <div className="flex flex-col items-center py-5">
        <h2 className="text-xl">{name}</h2>
        <p className="tracking-[0.5rem]">{occupation}</p>
      </div>
      <div className="flex gap-6">
        <a
          className="transition-transform duration-300 ease-in-out hover:scale-125"
          href="https://github.com/"
        >
          <AiFillGithub className="" size={50} />
        </a>
        <a
          className="transition-transform duration-300 ease-in-out hover:scale-125"
          href="https://nz.linkedin.com/"
        >
          <AiFillLinkedin className="" size={50} />
        </a>
      </div>
    </div>
  );
});

export default Card;
