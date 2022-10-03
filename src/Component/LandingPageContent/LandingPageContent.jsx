import React from "react";
import CreateEvent from "../Button/CreateEvent";
import "./LandingPageContent.scss";

export default function LandingPageContent() {
  return (
    <div className="content_main">
      <div className="main_sub">
        <h1 className="text">
          Imagine if <br />
          <span className="snap_text">SnapChat</span> <br />
          had events.
        </h1>
      </div>
      <p>Easily host and share events with your friends across any social media.</p>
      <div className="btn_event_content">
        <CreateEvent />
      </div>
    </div>
  );
}
