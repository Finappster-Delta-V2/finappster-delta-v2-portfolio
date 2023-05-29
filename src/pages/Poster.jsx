import React from "react";

function Poster() {
  const openFile = () => {
    // Replace 'your_file_url.pdf' with the actual file URL you want to link to
    window.open("https://google.com", "_blank");
  };

  return (
    <div className="section" data-anchor="page6" style={{ overflow: "hidden" }}>
      <div
        className="flex h-full flex-col content-center items-center justify-center"
        onClick={openFile}
        style={{ cursor: "pointer" }}
      >
        <img
          src="https://images.unsplash.com/photo-1684827844157-5a9085408044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="Poster"
          style={{ width: "25%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Poster;
