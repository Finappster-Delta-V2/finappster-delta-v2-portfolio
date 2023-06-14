import React from "react";
import { AiOutlineFile } from "react-icons/ai";

export const DocumentIcon = ({ title, url, size }) => {
  let sizeNumValue;

  if (size === "sm") {
    sizeNumValue = 12;
  } else if (size === "md") {
    sizeNumValue = 24;
  } else if (size === "lg") {
    sizeNumValue = 48;
  }

  return (
    <a
      href={url}
      target="_blank"
      className={`relative flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-gray-300 bg-secondary-500 p-8 shadow-2xl transition-transform duration-200 ease-in-out hover:scale-110`}
    >
      <AiOutlineFile size={100} />
      <h3 className="absolute bottom-10 text-center font-bold">{title}</h3>
    </a>
  );
};
