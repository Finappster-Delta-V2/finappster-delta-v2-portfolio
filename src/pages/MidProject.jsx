import { useRef } from "react";
import ProposalCard from "../components/UIElements/ProposalCard";
import useIntersectionAnimation from "../utils/useIntersectionAnimation";

const proposals = [
  {
    name: "MidProject Review",
    link: "https://drive.google.com/drive/u/3/folders/16Rk9qBRSpyt43GaucDJaKG_pq1zc373f",
    animation: "fade-top",
  },
];

const proposalAnimations = proposals.map((proposal) => proposal.animation);

const ProjectProposal = () => {
  const proposalRefs = useRef([]);

  useIntersectionAnimation(proposalRefs, proposalAnimations, 100);

  return (
    <div className="section" data-anchor="page7">
      <div className="absolute top-0 left-0 mt-72 w-full text-center text-5xl font-bold text-white">
        Mid Project Review
      </div>
      <div className="mt-24 flex items-center justify-center gap-12">
        {proposals.map((proposal, index) => (
          <ProposalCard
            key={proposal.name}
            name={proposal.name}
            link={proposal.link}
            ref={(newRef) => (proposalRefs.current[index] = newRef)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectProposal;
