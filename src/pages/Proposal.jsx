import React from "react";
import { DocumentIcon } from "../components/DocumentIcon";

const projectProposal = [
  {
    url: "https://www.example.com/planning_document1",
  },
  {
    url: "https://www.example.com/planning_document2",
  },
  {
    url: "https://www.example.com/planning_document3",
  },
];

const midProgressReview = [
  {
    url: "https://www.example.com/planning_document4",
  },
  {
    url: "https://www.example.com/planning_document5",
  },
];

export const Proposal = () => {
  return (
    <div className="dynamic-bg flex h-screen flex-col items-center justify-center pt-12">
      <h1 className="mb-12 text-4xl font-bold">Project Proposal</h1>
      <div className="flex w-full flex-col items-center justify-around px-24 lg:flex-row">
        {/* Left side */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-primary-500 p-12">
          <img
            className="w-80 bg-white"
            src="/public/assets/image/project-portfolio.png"
            alt="Project Proposal"
          />
        </div>

        <div className="flex flex-col gap-20">
          {/* Project Proposal */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Project Proposal</h1>
            <div className="flex justify-center gap-12 rounded-lg bg-primary-500 py-8 px-12">
              {projectProposal.map((document, index) => (
                <DocumentIcon
                  title={`v${index + 1}`}
                  url={document.url}
                  size="md"
                />
              ))}
            </div>
          </div>

          {/* Mid Progress Review */}
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Mid Progress Review</h1>
            <div className="flex justify-center gap-12 rounded-lg bg-primary-500 py-8 px-12">
              {midProgressReview.map((document, index) => (
                <DocumentIcon
                  title={`v${index + 1}`}
                  url={document.url}
                  size="md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
