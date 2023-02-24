import { forwardRef } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

const ProposalCard = forwardRef((props, ref) => {
  const { name, link = "https://drive.google.com", size = 100 } = props;

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-2 border-black p-8 opacity-0"
      ref={ref}
    >
      <a className=" text-red-700" href={link}>
        <AiOutlineFilePdf size={size} />
      </a>
      <p className="mt-8 text-center text-3xl text-white">{name}</p>
    </div>
  );
});

export default ProposalCard;
