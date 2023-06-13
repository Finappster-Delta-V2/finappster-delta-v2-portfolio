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
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-20">
        <div className="flex justify-center">
          {planningControlContent.slice(0, 3).map((document, index) => (
            <div key={index} className="mr-12">
              <DocumentCard title={document.title} url={document.url} />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {planningControlContent.slice(3).map((document, index) => (
            <div key={index} className="mr-12">
              <DocumentCard title={document.title} url={document.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
