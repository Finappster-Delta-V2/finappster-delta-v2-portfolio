import React from "react";
import { AiOutlineFile } from "react-icons/ai";

export const DocumentCard = ({ title, url }) => {
  return (
    <div className="flex h-60 w-48 flex-col items-center justify-between rounded-md border-2 border-gray-300 bg-secondary-500 p-8 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110">
      <a href={url} target="_blank">
        <AiOutlineFile size={80} />
      </a>
      <h3 className="mt-4 text-center">{title}</h3>
    </div>
  );
};
