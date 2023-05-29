import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";

function Documents() {
  const documents = [
    {
      title: "Gantt Chart",
      link: "https://drive.google.com/file/d/1xTwWa8VyFQeePMDtQprUUuv_hDi8AZPh/view?usp=drive_link",
    },
    {
      title: "Burndown Chart",
      link: "https://drive.google.com/drive/folders/17ahvIKMK2kXRtR9e9es-7OBo3X4kK0MB?usp=drive_link",
    },
    { title: "Change Request", link: "https://example.com/document3.pdf" },
    { title: "Issue Form", link: "https://example.com/document4.pdf" },
    { title: "Issue Log", link: "https://example.com/document5.pdf" },
    { title: "WBS", link: "https://example.com/document6.pdf" },
    { title: "Trello Board", link: "https://example.com/document7.pdf" },
    {
      title: "Zeta Investigation Report",
      link: "https://example.com/document8.pdf",
    },
  ];

  const handleFileClick = (link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.target = "_blank"; // Open the link in a new tab/window
    linkElement.download = true; // Add the download attribute
    linkElement.click();
  };

  const rows = Math.ceil(documents.length / 3); // Calculate the number of rows needed based on the number of documents

  return (
    <div className="section" data-anchor="page9">
      <h1 className="mb-4 flex justify-center text-8xl text-gray-50">
        Documents
      </h1>
      <div className="container mx-auto">
        <table className="w-full table-auto">
          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 3 }).map((_, colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  if (index >= documents.length) return null; // Skip empty cells for documents that don't exist
                  const document = documents[index];
                  return (
                    <td
                      key={index}
                      className="cursor-pointer rounded border-4 p-4 text-center"
                      onClick={() => handleFileClick(document.link)}
                    >
                      <div className="flex flex-col items-center">
                        <AiOutlineFilePdf className="mb-2 text-8xl" />
                        <span className="text-white">{document.title}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Documents;
