import { ArtifactSection } from "./components/ArtifactSection";

const App = () => {
  return (
    <main className="mx-56 text-white">
      <img
        src="/public/dv2-logo.svg"
        alt="finappster Delta v2 logo"
        className="absolute top-8 left-12 w-32"
      />
      {/* Logo */}

      {/* Intro Section */}
      <div className="flex h-screen items-center justify-between">
        <div className="w-[40rem]">
          <h1 className="mb-2 text-3xl font-bold">finappster</h1>
          <h1 className="text-8xl font-bold">Delta v2</h1>
          <h2 className="text-3xl font-bold">
            Welcome to our showcase website.
          </h2>
          <h3 className="text-2xl font-bold text-primary">
            Research and Development
          </h3>
          <h3 className="mb-8 text-2xl font-bold text-primary">2022-2023</h3>
          <div className="mr-5 h-1 w-4/5 bg-white" />
        </div>

        <img
          className="w-[40rem]"
          src="/public/assets/image/team-photo.png"
          alt="Delta v2 team photo"
        />
      </div>

      <div className="h-12 w-full" />

      {/* Artifacts */}
      <div>
        <h1 className="mb-8 text-5xl font-bold">Artifacts</h1>
        <p className="w-1/2 text-lg">
          We integrated the following two features in the finappster main
          application and additionally created internal technical documentation.
        </p>

        <div className="mt-56 flex flex-col gap-56">
          <ArtifactSection
            title="Tau Admin Panel"
            videoUrl="/public/assets/video/Tau.mp4"
          >
            Enables companies to create customized questionnaires, visualize
            data through graphs, and easily search and retrieve customer data
            from multiple companies.
          </ArtifactSection>

          <ArtifactSection
            title="Zeta Form Builder"
            videoUrl="/public/assets/video/Zeta.mp4"
            side="right"
          >
            Create customized questionnaires using the form builders feature.
            Easy searching and retrieval of previous customer data entries from
            multiple companies.
          </ArtifactSection>

          <ArtifactSection
            title="Finappster Architecture"
            imageUrl="/public/assets/documents/Finappster_Research_Architecture_Diagram.png"
            imageAlt="Finappster Research Architecture Diagram"
          >
            Visual representation of the current finappster microservice
            architecture. Shows how each teams feature connect and communicates
            with each other.
          </ArtifactSection>
        </div>
      </div>

      <div className="h-56 w-full"></div>

      {/* Poster */}
      <div>
        <h1 className="mb-24 w-full text-center text-5xl font-bold">Poster</h1>
        <img
          className="mb-8"
          src="/public/assets/documents/poster_v3.1.png"
          alt="Finappster Delta v2 Poster"
        />
      </div>

      <div className="h-56 w-full"></div>

      {/* Meet the Team */}
      <div>
        <h1 className="mb-24 w-full text-center text-5xl font-bold">
          Meet the Team
        </h1>

        <div className="flex flex-col items-center  px-10 py-10 md:px-32">
          <div className="relative grid w-full grid-cols-1 grid-rows-3 gap-x-20 text-black xl:grid-cols-2">
            <div className="invisible absolute left-1/2 h-full w-2 -translate-x-1/2 transform bg-white xl:visible"></div>

            {/* Peter */}
            <div className="relative row-start-1 mb-24 flex w-full flex-col items-center bg-white p-10  lg:p-14 xl:col-start-1 xl:w-[30rem] xl:justify-self-end">
              <div className="overflow-hidden  rounded-full object-cover">
                <img
                  className="w-56"
                  src="/public/assets/image/peter.jpg"
                  alt="Peter An"
                />
              </div>
              <h1 className="text-4xl font-bold">Peter</h1>
              <h3 className="text-md font-light tracking-widest text-primary">
                S T U D E N T
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed amet mauris arcu in.
                Nam nisl porttitor id diam id dolor mauris cursus faucibus. Enim
                bibendum lacinia cursus lacus mauris neque consequat facilisi.
                Luctus integer felis lacinia diam rutrum egestas phasellus elit.
                Nec tristique facilisis aliquam penatibus consequat fermentum
                lacus eu. Risus posuere lectus magna sed eu dictum consequat
                velit. Vestibulum magna id est sollicitudin
              </p>
              <h6 className="self-end text-gray-400">16/06/2023</h6>
            </div>

            {/* Christopher */}
            <div className="relative row-start-2 mb-24 flex w-full flex-col items-center bg-white p-10 lg:p-14 xl:col-start-2 xl:w-[30rem]">
              <div className="overflow-hidden  rounded-full object-cover">
                <img
                  className="w-56"
                  src="/public/assets/image/chris.jpg"
                  alt="Christopher Li"
                />
              </div>
              <h1 className="text-4xl font-bold">Christopher Li</h1>
              <h3 className="text-md font-light tracking-widest text-primary">
                S T U D E N T
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed amet mauris arcu in.
                Nam nisl porttitor id diam id dolor mauris cursus faucibus. Enim
                bibendum lacinia cursus lacus mauris neque consequat facilisi.
                Luctus integer felis lacinia diam rutrum egestas phasellus elit.
                Nec tristique facilisis aliquam penatibus consequat fermentum
                lacus eu. Risus posuere lectus magna sed eu dictum consequat
                velit. Vestibulum magna id est sollicitudin
              </p>
              <h6 className="self-end text-gray-400">16/06/2023</h6>
            </div>

            {/* Renjo */}
            <div className="relative row-start-3 mb-24 flex w-full flex-col items-center bg-white p-10 lg:p-14 xl:col-start-1 xl:w-[30rem] xl:justify-self-end">
              <div className="overflow-hidden  rounded-full object-cover">
                <img
                  className="w-56"
                  src="/public/assets/image/renjo.jpg"
                  alt="Renjo Angeles"
                />
              </div>
              <h1 className="text-4xl font-bold">Renjo Angeles</h1>
              <h3 className="text-md font-light tracking-widest text-primary">
                S T U D E N T
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed amet mauris arcu in.
                Nam nisl porttitor id diam id dolor mauris cursus faucibus. Enim
                bibendum lacinia cursus lacus mauris neque consequat facilisi.
                Luctus integer felis lacinia diam rutrum egestas phasellus elit.
                Nec tristique facilisis aliquam penatibus consequat fermentum
                lacus eu. Risus posuere lectus magna sed eu dictum consequat
                velit. Vestibulum magna id est sollicitudin
              </p>
              <h6 className="self-end text-gray-400">16/06/2023</h6>
            </div>

            {/* Jameson */}
            <div className="relative row-start-4 mb-24 flex w-full flex-col items-center bg-white p-10 lg:p-14 xl:col-start-2 xl:w-[30rem]">
              <div className="overflow-hidden  rounded-full object-cover">
                <img
                  className="w-56"
                  src="/public/assets/image/jameson.jpg"
                  alt="Jameson Yeo"
                />
              </div>
              <h1 className="text-4xl font-bold">Jameson Yeo</h1>
              <h3 className="text-md font-light tracking-widest text-primary">
                S T U D E N T
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed amet mauris arcu in.
                Nam nisl porttitor id diam id dolor mauris cursus faucibus. Enim
                bibendum lacinia cursus lacus mauris neque consequat facilisi.
                Luctus integer felis lacinia diam rutrum egestas phasellus elit.
                Nec tristique facilisis aliquam penatibus consequat fermentum
                lacus eu. Risus posuere lectus magna sed eu dictum consequat
                velit. Vestibulum magna id est sollicitudin
              </p>
              <h6 className="self-end text-gray-400">16/06/2023</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="h-56 w-full"></div>

      {/* More about project */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-5xl font-bold">
          Want to know more about out project?
        </h1>
        <h1 className="mb-24 text-5xl font-bold text-primary">
          View the Full Project Portfolio
        </h1>
        <a
          className="flex cursor-pointer items-center rounded-xl py-3 px-6 outline outline-4 outline-primary transition-transform ease-in-out hover:scale-110"
          target="_blank"
          href="https://autuni-my.sharepoint.com/:f:/g/personal/ykx5915_autuni_ac_nz/Ev97DvZQNblGo5Bfcas3v_8BX-lc4b3cZ0hnM8Bz4bI-4g?e=AeEGg1"
        >
          <span className="text-3xl font-bold text-primary">OneDrive Link</span>
        </a>
      </div>

      <div className="h-56 w-full"></div>
    </main>
  );
};

export default App;
