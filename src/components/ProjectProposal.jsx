import React, { useEffect } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

function ProjectProposal() {

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

    document.querySelectorAll(".square").forEach((row) => {
      observer.observe(row);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="section" data-anchor="page5">
      <div className="title">Project Proposals</div>
      <div className="container">
        <div className="square">
          <a className="proposal-icon" href="https://drive.google.com">
            <AiOutlineFilePdf size={200} />
            <p>Proposal v1</p>
          </a>
        </div>
        <div className="square">
          <a className="proposal-icon" href="https://drive.google.com">
            <AiOutlineFilePdf size={200} />
            <p>Proposal v2</p>
          </a>
        </div>
        <div className="square">
          <a className="proposal-icon" href="https://drive.google.com">
            <AiOutlineFilePdf size={200} />
            <p>Proposal v3</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectProposal;
