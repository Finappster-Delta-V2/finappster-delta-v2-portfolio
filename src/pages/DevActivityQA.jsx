import { MdOutlineFolder } from "react-icons/md";
import { DocumentCard } from "../components/DocumentCard";

const IconBadge = ({ title, url }) => {
  return (
    <div className="flex items-center justify-start gap-3 rounded-lg bg-slate-300 px-4 py-2">
      <a
        href={url}
        target="_blank"
        className="m-2 rounded-full bg-slate-400 p-2 transition-transform duration-200 ease-in-out hover:scale-110"
      >
        <MdOutlineFolder size={50} />
      </a>

      <h2 className="text-md">{title}</h2>
    </div>
  );
};

const folders = [
  {
    title: "Architecture Diagram",
    url: "https://autuni-my.sharepoint.com/:f:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Architecture%20diagram?csf=1&web=1&e=IkfSCq",
  },
  {
    title: "Bug Report Video",
    url: "https://autuni-my.sharepoint.com/:f:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Architecture%20diagram?csf=1&web=1&e=IkfSCq",
  },
  {
    title: "Burnup Charts",
    url: "https://autuni-my.sharepoint.com/:f:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Burnup%20charts?csf=1&web=1&e=enzMNe",
  },
  {
    title: "Training Guide Videos",
    url: "https://autuni-my.sharepoint.com/:f:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Training%20Guide%20Videos?csf=1&web=1&e=LI7Nsh",
  },
];

const otherQADocuments = [
  {
    title: "Code Review",
    url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Code%20Review.docx?d=we866e124f7274d6eb9609e73243c3b06&csf=1&web=1&e=T94eFA",
  },
  {
    title: "Docker Installation",
    url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Docker%20Installation.docx?d=wc6bd8a4ceb2c4791bdac7a95de09a4d6&csf=1&web=1&e=pKREgk",
  },
  {
    title: "Final System Testing",
    url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Final%20System%20Testing.docx?d=w358d95dfe075476fa27602638a4fe6f6&csf=1&web=1&e=zBG0Oq",
  },
  {
    title: "Finappster Standards",
    url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Finappster%20Standards.docx?d=wc408bcb5e8c840819bbd1f12d9db74aa&csf=1&web=1&e=7bESsU",
  },
  {
    title: "Finappster Backend ERD",
    url: "https://autuni-my.sharepoint.com/:i:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/finappster_backend%20ERD.png?csf=1&web=1&e=CJJ2JO",
  },
  {
    title: "Finappster DEvelopment Pipeline",
    url: "https://autuni-my.sharepoint.com/:i:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/finappster_backend%20ERD.png?csf=1&web=1&e=CJJ2JO",
  },
  {
    title: "Peer Mob Programming",
    url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Peer%20Mob%20Programming.docx?d=wce8613f90f87442f80f675f371267117&csf=1&web=1&e=hqIodC",
  },
  {
    title: "Product Backlog",
    url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/Product%20backlog(trello%20board%20documentation).docx?d=w6e7b0a5da4d04f8aa5e7d98356bc17a2&csf=1&web=1&e=meJivK",
  },
  {
    title: "User Manual",
    url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/User%20Manual.docx?d=w08e1f90da7f94d0d9a52c2bdd8716a32&csf=1&web=1&e=yE7q4m",
  },
  {
    title: "XLS Backend ERD Diagram",
    url: "https://autuni-my.sharepoint.com/:i:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Development%20Activities%20and%20Quality%20Assurance/XLS%20backend%20ERD%20diagram.png?csf=1&web=1&e=NoFTuB",
  },
];

export const DevActivityQA = () => {
  return (
    <div className="flex h-screen flex-col items-center ">
      <h1 className="my-8 mb-12 text-4xl font-bold">Planning and Control</h1>
      {/* Folders */}
      <div className="grid grid-cols-4 gap-4">
        {folders.map((folder) => (
          <IconBadge key={folder} title={folder.title} url={folder.url} />
        ))}
      </div>
      {/* Documents */}
      <h3 className="my-8 text-center text-3xl font-bold">Other Documents</h3>
      <div className="grid grid-cols-5 gap-20 bg-primary-500 p-8">
        {otherQADocuments.map((otherQADocuments) => (
          <DocumentCard
            title={otherQADocuments.title}
            url={otherQADocuments.url}
          />
        ))}
      </div>
    </div>
  );
};
