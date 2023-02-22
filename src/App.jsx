import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Team from "./components/Team";
import LogBook from "./components/LogBooks";
import Home from "./components/Home";
import Meetings from "./components/Meetings";
import Poster from "./components/Poster";
import ProjectProposal from "./components/ProjectProposal";
import MidProject from "./components/MidProject";
import ClientFeedBack from "./components/ClientFeedBack";
import Documents from "./components/Documents";
import Navbar from "./components/NavBar";

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
        console.log("onLeave event", {
          origin,
          destination,
          direction,
        });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi);

        return (
          <div>
            <Home />
            <Team />
            <LogBook />
            <Meetings />
            <ProjectProposal />
            <Poster />
            <MidProject />
            <ClientFeedBack />
            <Documents />
          </div>
        );
      }}
    />
  </div>
);
export default App;
