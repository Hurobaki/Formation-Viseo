import React from "react";
import { withRouter } from "react-router";

const PureAbout = ({ history }) => (
  <div>
    <h2>About</h2>
    <button>
      <a onClick={() => history.push("/")}>Back</a>
    </button>
  </div>
);

export const About = withRouter(PureAbout);
