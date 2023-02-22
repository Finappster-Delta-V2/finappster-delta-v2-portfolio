import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Team from "./components/Layout/Team";
import LogBooks from "./components/Layout/LogBooks";
import Home from "./components/Layout/Home";
import Meetings from "./components/Layout/Meetings";
import Poster from "./components/Layout/Poster";
import ProjectProposal from "./components/Layout/ProjectProposal";
import MidProject from "./components/Layout/MidProject";
import ClientFeedBack from "./components/Layout/ClientFeedBack";
import Documents from "./components/Layout/Documents";
import Navbar from "./components/UIElements/NavBar";

import "./index.css";

const App = () => (
  <div>
    <Navbar />
    <ReactFullpage
      navigation={true}
      sectionsColor={[
        "#111111",
        "#333333",
        "#555555",
        "#111111",
        "#333333",
        "#555555",
        "#111111",
        "#333333",
        "#555555",
      ]}
      navigationTooltips={[
        "Home",
        "The Team",
        "LogBooks",
        "MeetingMinutes",
        "ProjectProposal",
        "Poster",
        "MidProjectProposal",
        "ClientFeedBack",
        "Other Documents",
      ]}
      showActiveTooltip={true}
      onLeave={(origin, destination, direction) => {
        // console.log("onLeave event", {
        //   origin,
        //   destination,
        //   direction,
        // });
      }}
      render={({ state, fullpageApi }) => {
        // console.log("render prop change", state, fullpageApi);

        return (
          <>
            <Home />
            <Team />
            <LogBooks />
            <Meetings />
            <ProjectProposal />
            <Poster />
            <MidProject />
            <ClientFeedBack />
            <Documents />
          </>
        );
      }}
    />
  </div>
);
export default App;
