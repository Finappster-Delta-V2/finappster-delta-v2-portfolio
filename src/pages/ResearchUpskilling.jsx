import { DocumentIcon } from "../components/DocumentIcon";

export const ResearchUpskilling = () => {
  const documents = [
    {
      id: 1,
      title: "Document 1",
      url: "https://example.com/document1.pdf",
    },
    {
      id: 2,
      title: "Document 2",
      url: "https://example.com/document2.pdf",
    },
    {
      id: 3,
      title: "Document 3",
      url: "https://example.com/document2.pdf",
    },
    {
      id: 4,
      title: "Document 4",
      url: "https://example.com/document2.pdf",
    },
    {
      id: 5,
      title: "Document 5",
      url: "https://example.com/document2.pdf",
    },
    {
      id: 6,
      title: "Document 6",
      url: "https://example.com/document2.pdf",
    },
    {
      id: 7,
      title: "Document 7",
      url: "https://example.com/document2.pdf",
    },
    {
      id: 8,
      title: "Document 8",
      url: "https://example.com/document2.pdf",
    },
    {
      id: 9,
      title: "Document 9",
      url: "https://example.com/document9.pdf",
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="mt-20 text-center text-3xl text-black">Container 1</h1>
      <div className="flex h-fit w-3/4 place-content-between rounded bg-primary-500 p-8">
        {documents.slice(0, 3).map((document) => (
          <DocumentIcon
            key={document.id}
            title={document.title}
            url={document.url}
          />
        ))}
      </div>
      <h1 className="text-center text-3xl text-black">Zeta</h1>

      <div className="flex h-fit w-3/4 place-content-between rounded  bg-primary-500 p-8">
        {documents.slice(3, 6).map((document) => (
          <DocumentIcon
            key={document.id}
            title={document.title}
            url={document.url}
          />
        ))}
      </div>
      <h1 className="text-center text-3xl text-black">Something</h1>

      <div className="flex h-fit w-3/4 place-content-between rounded bg-primary-500 p-8">
        {documents.slice(6, 9).map((document) => (
          <DocumentIcon
            key={document.id}
            title={document.title}
            url={document.url}
          />
        ))}
      </div>
    </div>
  );
};
