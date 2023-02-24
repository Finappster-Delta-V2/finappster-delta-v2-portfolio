import { useRef } from "react";
import ProposalCard from "../components/UIElements/ProposalCard";
import useIntersectionAnimation from "../utils/useIntersectionAnimation";

const proposals = [
  { name: "Proposal v1", link: "", animation: "fade-top" },
  { name: "Proposal v2", link: "", animation: "fade-top" },
  { name: "Proposal v3", link: "", animation: "fade-top" },
];

const proposalAnimations = proposals.map((proposal) => proposal.animation);

const ProjectProposal = () => {
  const proposalRefs = useRef([]);

  useIntersectionAnimation(proposalRefs, proposalAnimations, 100);

  return (
    <div className="section" data-anchor="page5">
      <div className="absolute top-0 left-0 mt-20 w-full text-center text-8xl font-bold text-white">
        Project Proposals
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
