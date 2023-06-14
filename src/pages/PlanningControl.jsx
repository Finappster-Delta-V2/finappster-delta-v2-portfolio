import { MdOutlineFolder } from "react-icons/md";

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
    title: "Change Request Form",
    url: "https://autuni-my.sharepoint.com/:f:/g/personal/ykx5915_autuni_ac_nz/EvRwXBVpQ3xPg7KoPLr3ZkcBzBbAddV2ATIAQTRsgGeumw?e=hMXFzX",
  },
  {
    title: "Gantt Chart",
    url: "https://autuni-my.sharepoint.com/:f:/g/personal/ykx5915_autuni_ac_nz/EuW2ma3xJY9BqNjfnRnfJ4ABti0DblIsEGcHZJRY1bxMjg?e=uu6N8d",
  },
  {
    title: "WBS",
    url: "https://autuni-my.sharepoint.com/:f:/g/personal/ykx5915_autuni_ac_nz/Ep3IlnA3ygxGuoyrgBhyKC8Bp7cPkJHkiCJDw06RRDo59A?e=RCaDas",
  },
  {
    title: "Major Milestone",
    url: "https://autuni-my.sharepoint.com/:f:/g/personal/ykx5915_autuni_ac_nz/EueLmQHXiX5GgOJ5vWnPnroBzCXC5P0gEjn0Zmpg9YQ99A?e=Flu2Ya",
  },
  {
    title: "Project Rational",
    url: "https://autuni-my.sharepoint.com/:f:/g/personal/ykx5915_autuni_ac_nz/EjOs5b6tr6dDjWav5DFNADsBU4WHFSPFu63c_6aDsQ_Luw?e=U9LHNo",
  },
  {
    title: "Research for Revision",
    url: "https://autuni-my.sharepoint.com/:f:/g/personal/ykx5915_autuni_ac_nz/EiMQSfL6TnRAvC-8QpVqCSsBDQO2mLy7sG8cCP-h8iYHgQ?e=advWAK",
  },
];

const DocumentCard = ({}) => {
  return <div>hello</div>;
};

export const PlanningControl = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-12 text-4xl font-bold">Planning and Control</h1>

      {/* Folders */}
      <div className="grid grid-cols-3 gap-4">
        {folders.map((folder) => (
          <IconBadge key={folder} title={folder.title} url={folder.url} />
        ))}
      </div>

      {/* Documents */}
      <div>
        <DocumentCard />
      </div>
    </div>
  );
};
