import React from "react";
import { DocumentCard } from "../components/DocumentCard";

const planningControlContent = [
  {
    title: "Proposal v1",
    url: "https://www.example.com/planning_document1",
  },
  {
    title: "Proposal v2",
    url: "https://www.example.com/planning_document2",
  },
  {
    title: "Proposal v3",
    url: "https://www.example.com/planning_document3",
  },
  {
    title: "Proposal v4",
    url: "https://www.example.com/planning_document4",
  },
  {
    title: "Proposal v5",
    url: "https://www.example.com/planning_document5",
  },
];

export const Proposal = () => {
  return (
    <div className="dynamic-bg flex h-screen flex-col items-center justify-center pt-12">
      <h1 className="mb-12 text-4xl font-bold">Project Proposal</h1>
      <div className="flex items-center justify-center">
        {/* Left side */}
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-primary-500 p-12">
          <img
            className="w-72 bg-white"
            src="/public/assets/image/project-portfolio.png"
            alt="Project Proposal"
          />
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex justify-center gap-12">
            {planningControlContent.slice(0, 3).map((document, index) => (
              <DocumentCard title={document.title} url={document.url} />
            ))}
          </div>
          <div className="flex justify-center gap-12">
            {planningControlContent.slice(3).map((document, index) => (
              <DocumentCard title={document.title} url={document.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
