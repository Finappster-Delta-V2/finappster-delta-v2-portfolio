import React, { useEffect, useRef } from "react";
import ProposalCard from "../components/UIElements/ProposalCard";

const ProjectProposal = () => {
  const ProposalV1Ref = useRef();
  const ProposalV2Ref = useRef();
  const ProposalV3Ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-top");
        } else {
          entry.target.classList.remove("fade-top");
        }
      });
    });

    observer.observe(ProposalV1Ref.current);
    observer.observe(ProposalV2Ref.current);
    observer.observe(ProposalV3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="section" data-anchor="page5">
      <div className="absolute top-0 left-0 mt-20 w-full text-center text-8xl font-bold text-white">
        Project Proposals
      </div>
      <div className="mt-24 flex items-center justify-center gap-12">
        <ProposalCard
          name="Proposal v1"
          link="https://drive.google.com"
          ref={ProposalV1Ref}
        />
        <ProposalCard
          name="Proposal v2"
          link="https://drive.google.com"
          ref={ProposalV2Ref}
        />
        <ProposalCard
          name="Proposal v3"
          link="https://drive.google.com"
          ref={ProposalV3Ref}
        />
      </div>
    </div>
  );
};

export default ProjectProposal;
