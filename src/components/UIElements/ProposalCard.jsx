import { forwardRef } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

const ProposalCard = forwardRef((props, ref) => {
  const { name, link, size = 200 } = props;

  return (
    <div
      className="flex items-center justify-center rounded-lg border-2 border-black p-8"
      ref={ref}
    >
      <a className=" text-red-700" href={link}>
        <AiOutlineFilePdf size={size} />
        <p className="pt-2 text-center text-3xl text-white">{name}</p>
      </a>
    </div>
  );
});

export default ProposalCard;
