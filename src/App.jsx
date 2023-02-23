import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Team from "./pages/Team";
import LogBooks from "./pages/LogBooks";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Poster from "./pages/Poster";
import ProjectProposal from "./pages/ProjectProposal";
import MidProject from "./pages/MidProject";
import ClientFeedBack from "./pages/ClientFeedBack";
import Documents from "./pages/Documents";

import Navbar from "./components/UIElements/NavBar";

import "./index.css";

const App = () => (
  <div>
    <Navbar />
    <ReactFullpage
      navigation={true}
      sectionsColor={[
        "#111111",
        "#323232",
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
      scrollingSpeed={500}
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
