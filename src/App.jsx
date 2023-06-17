import { ArtifactSection } from "./components/ArtifactSection";

// Images
import Dv2Logo from "./assets/dv2-logo.svg";
import TeamPhoto from "./assets/image/team-photo.png";

import TauVideo from "./assets/video/Tau.gif";
import ZetaVideo from "./assets/video/Zeta.gif";
import FinappsterArchitectureDiagram from "./assets/documents/Finappster_Research_Architecture_Diagram.png";

import Poster from "./assets/documents/poster_v3.1.png";

import PeterPhoto from "./assets/image/peter.jpg";
import ChrisPhoto from "./assets/image/chris.jpg";
import RenjoPhoto from "./assets/image/renjo.jpg";
import JamesonPhoto from "./assets/image/jameson.jpg";

const App = () => {
  return (
    <main className="mx-4 text-white md:mx-24 lg:mx-32 xl:mx-56">
      {/* Logo */}
      <img
        src={Dv2Logo}
        alt="finappster Delta v2 logo"
        className="absolute top-6 left-4 w-16 md:top-8 md:left-12 md:w-32"
      />

      {/* Intro Section */}
      <div className="mt-4 flex h-screen flex-col-reverse items-center justify-center gap-2 md:mt-0 md:flex-row md:justify-between md:gap-0">
        <div className="w-full md:w-1/3 lg:w-1/2">
          <h1 className="mb-2 text-3xl font-bold">finappster</h1>
          <h1 className="text-7xl font-bold">Delta v2</h1>
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
          className="w-full md:w-1/2 lg:w-1/2"
          src={TeamPhoto}
          alt="Delta v2 team photo"
        />
      </div>

      <div className="h-12 w-full" />

      {/* Artifacts */}
      <div>
        <h1 className="mb-8 text-5xl font-bold">Artifacts</h1>
        <p className="text-lg lg:w-1/2">
          We integrated the following two features in the finappster main
          application and additionally created internal technical documentation.
        </p>

        <div className="mt-56 flex flex-col gap-56">
          <ArtifactSection
            title="Tau Admin Panel"
            imageUrl={TauVideo}
            imageAlt="Tau Admin Panel"
          >
            Enables companies to create customized questionnaires, visualize
            data through graphs, and easily search and retrieve customer data
            from multiple companies.
          </ArtifactSection>

          <ArtifactSection
            title="Zeta Form Builder"
            imageUrl={ZetaVideo}
            imageAlt="Zeta Form Builder"
            side="right"
          >
            Create customized questionnaires using the form builders feature.
            Easy searching and retrieval of previous customer data entries from
            multiple companies.
          </ArtifactSection>

          <ArtifactSection
            title="Finappster Architecture"
            imageUrl={FinappsterArchitectureDiagram}
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
        <img className="mb-8" src={Poster} alt="Finappster Delta v2 Poster" />
      </div>

      <div className="h-56 w-full"></div>

      {/* Meet the Team */}
      <div>
        <h1 className="mb-24 w-full text-center text-5xl font-bold">
          Meet the Team
        </h1>

        <div className="flex flex-col items-center py-10 md:px-10">
          <div className="relative grid w-full grid-cols-1 grid-rows-3 gap-x-20 text-black xl:grid-cols-2">
            <div className="invisible absolute left-1/2 h-full w-2 -translate-x-1/2 transform bg-white xl:visible"></div>

            {/* Peter */}
            <div className="relative row-start-1 mb-24 flex w-full flex-col items-center bg-white p-10 lg:p-14 xl:col-start-1 xl:w-[30rem] xl:justify-self-end">
              <div className="overflow-hidden rounded-full object-cover">
                <img className="w-56" src={PeterPhoto} alt="Peter An" />
              </div>
              <div className="my-5">
                <h1 className="text-4xl font-bold">Peter An</h1>
                <h3 className="text-md text-center font-light tracking-widest text-primary">
                  S T U D E N T
                </h3>
              </div>
              <p>
                I am a software development student with a passion for exploring
                with the latest bleeding edge technologies. My favorite language
                is Go, and I enjoy working with the T3 Stack. During my free
                time, I find inspiration from Primeagen and Theo's (T3) YouTube
                videos, as I am deeply enthusiastic about coding. Currently, my
                focus is on learning about interpreters and compilers in Go,
                with the intention of contributing to the Turbopack bundler, an
                open source software developed by Vercel.
              </p>
              <h6 className="mt-4 self-end text-gray-400">16/06/2023</h6>
            </div>

            {/* Christopher */}
            <div className="relative row-start-2 mb-24 flex w-full flex-col items-center bg-white p-10 lg:p-14 xl:col-start-2 xl:w-[30rem]">
              <div className="overflow-hidden rounded-full object-cover">
                <img className="w-56" src={ChrisPhoto} alt="Christopher Li" />
              </div>
              <div className="my-5">
                <h1 className="text-4xl font-bold">Christopher Li</h1>
                <h3 className="text-md text-center font-light tracking-widest text-primary">
                  S T U D E N T
                </h3>
              </div>
              <p>
                As an AUT computer science student majoring in software
                development, I find immense joy in coding and staying up-to-date
                with the latest tech news and tools. While I have a particular
                affinity for front-end development, I am continuously expanding
                my skills in backend development as well. Currently, I am
                proficient in Angular and actively learning React to broaden my
                knowledge and expertise. With a passion for programming and a
                thirst for learning, I am excited to embark on a journey of
                continuous growth and exploration in the dynamic world of
                software development.
              </p>
              <h6 className="mt-4 self-end text-gray-400">17/06/2023</h6>
            </div>

            {/* Renjo */}
            <div className="relative row-start-3 mb-24 flex w-full flex-col items-center bg-white p-10 lg:p-14 xl:col-start-1 xl:w-[30rem] xl:justify-self-end">
              <div className="overflow-hidden  rounded-full object-cover">
                <img className="w-56" src={RenjoPhoto} alt="Renjo Angeles" />
              </div>
              <div className="my-5">
                <h1 className="text-4xl font-bold">Renjo Angeles</h1>
                <h3 className="text-md text-center font-light tracking-widest text-primary">
                  S T U D E N T
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed amet mauris arcu in.
                Nam nisl porttitor id diam id dolor mauris cursus faucibus. Enim
                bibendum lacinia cursus lacus mauris neque consequat facilisi.
                Luctus integer felis lacinia diam rutrum egestas phasellus elit.
                Nec tristique facilisis aliquam penatibus consequat fermentum
                lacus eu. Risus posuere lectus magna sed eu dictum consequat
                velit. Vestibulum magna id est sollicitudin
              </p>
              <h6 className="mt-4 self-end text-gray-400">16/06/2023</h6>
            </div>

            {/* Jameson */}
            <div className="relative row-start-4 mb-24 flex w-full flex-col items-center bg-white p-10 lg:p-14 xl:col-start-2 xl:w-[30rem]">
              <div className="overflow-hidden  rounded-full object-cover">
                <img className="w-56" src={JamesonPhoto} alt="Jameson Yeo" />
              </div>
              <div className="my-5">
                <h1 className="text-4xl font-bold">Jameson Yeo</h1>
                <h3 className="text-md text-center font-light tracking-widest text-primary">
                  S T U D E N T
                </h3>
              </div>
              <p>
                I am a passionate and lifelong learner who enjoys exploring and
                experimenting with different coding languages. I am always
                up-to-date with the latest developments in the tech industry and
                I am always looking for new and innovative ways to solve
                problems. I am open to collaboration and excited to work on new
                projects with other programmers. I am particularly interested in
                creating unique and user-friendly software solutions that make
                people's lives easier and more enjoyable. I am committed to
                using my skills to make a positive impact on the world.
              </p>
              <h6 className="mt-4 self-end text-gray-400">17/06/2023</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="h-56 w-full"></div>

      {/* More about project */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-5xl font-bold">
          Want to know more about our project?
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
