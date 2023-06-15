import { DocumentCard } from "../components/DocumentCard";

export const ResearchUpskilling = () => {
  const feasibilityReport = [
    {
      title: "Feasibility Report v1",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/Feasibility%20Report%20v1.docx?d=w19fc7a9736554b3d97b56acf21f9ebd6&csf=1&web=1&e=PLM1hv",
    },
    {
      title: "Feasibility Report v2",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/Feasibility%20Report%20v2.docx?d=w0537fbc88cda4b1385bf05b7862e3859&csf=1&web=1&e=vjdD5E",
    },
    {
      title: "Feasibility Report v3",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/Feasibility%20Report%20v3.docx?d=w4c170cc3bd4043b593f1c7931de26a32&csf=1&web=1&e=acbT5y",
    },
  ];
  const zetaInvestigation = [
    {
      title: "Zeta Project Scope",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/Zeta%20Investigation%20Project%20Scope.docx?d=w35bc7646917e4c8bbad8d22390a49b7e&csf=1&web=1&e=PeWOPH",
    },
    {
      title: "Zeta Report v1",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/Zeta%20Investigation%20report%20v1.docx?d=w4d781ce97e8148aca3ff7756fd3a25de&csf=1&web=1&e=zfIxaA",
    },
    {
      title: "Zeta Report v1",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/Zeta%20Investigation%20report%20v2.docx?d=we6c333814fae4eafb714061a96dc7100&csf=1&web=1&e=dwibuV",
    },
  ];
  const otherDocuments = [
    {
      title: "Change Request v1",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/email%20draft,%20intergration%20and%20refactor%20v1.docx?d=wd2a72c3f6e6e4c529f40eab0db5e6585&csf=1&web=1&e=BnRoej",
    },
    {
      title: "Change Request v2",
      url: "https://autuni-my.sharepoint.com/:w:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/email%20draft,%20intergration%20and%20refactor%20v2.docx?d=w81e5b53b0b144d23b234c49acba64cf1&csf=1&web=1&e=oCBe82",
    },
    {
      title: "Change Request v3",
      url: "https://autuni-my.sharepoint.com/:p:/r/personal/ykx5915_autuni_ac_nz/Documents/COMP702/Finappster-Delta-V2/Project%20Portfolio/Research%20and%20Upskilling/Research/Finappster%20Delta%20v2%20Revision%20Meeting.pptx?d=w3379f0602cde49698befd68fcbc62ac2&csf=1&web=1&e=yYne4L",
    },
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="my-4 text-center text-3xl text-black">
        Feasibility Report
      </h1>
      <div className="flex h-fit w-2/3 place-content-between rounded bg-primary-500 p-8">
        {feasibilityReport.map((feasibilityReport) => (
          <DocumentCard
            title={feasibilityReport.title}
            url={feasibilityReport.url}
          />
        ))}
      </div>
      <h1 className="my-3 text-center text-3xl text-black">
        Zeta Investigation
      </h1>

      <div className="flex h-fit w-2/3 place-content-between rounded  bg-primary-500 p-8">
        {zetaInvestigation.map((zetaInvestigation) => (
          <DocumentCard
            title={zetaInvestigation.title}
            url={zetaInvestigation.url}
          />
        ))}
      </div>
      <h1 className="my-3 text-center text-3xl text-black">Other Documents</h1>

      <div className="flex h-fit w-2/3 place-content-between rounded bg-primary-500 p-8">
        {otherDocuments.map((otherDocuments) => (
          <DocumentCard title={otherDocuments.title} url={otherDocuments.url} />
        ))}
      </div>
    </div>
  );
};
