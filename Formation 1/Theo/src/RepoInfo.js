import React, { Component } from "react";

class RepoInfoComponent extends Component {
  state = {
    repoName: ""
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log("ok");
    this.setState({
      repoName: nextProps
    });
  }

  render() {
    const repo = this.props.location.state.repo;
    return (
      <div>
        <h1> {this.state.repoName} </h1>
        <h1> Repo info </h1>
      </div>
    );
  }
}

export const RepoInfo = RepoInfoComponent;
