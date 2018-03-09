import React, { Component, Fragment } from "react";
import { ListRepositories } from "./ListRepositories";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";

class RepositoriesComponent extends Component {
  state = {
    hasError: false,
    repositoriesList: [],
    userInfos: []
  };

  async getUserRepositories(nextProps) {
    try {
      const query = await fetch(
        `https://api.github.com/users/${nextProps.user}/repos`
      );
      const result = await query.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUserInfos(nextProps) {
    try {
      const query = await fetch(
        `https://api.github.com/users/${nextProps.user}`
      );
      const result = await query.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async componentWillReceiveProps(nextProps) {
    this.setState({
      hasError: false
    });
    try {
      const repositories = await this.getUserRepositories(nextProps);

      this.setState({
        repositoriesList: repositories
      });

      const infos = await this.getUserInfos(nextProps);

      if (infos.message === "Not Found") {
        this.setState({
          hasError: true
        });
      } else {
        this.setState({
          userInfos: infos
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { user } = this.props;
    const errorStyle = {
      color: "red"
    };

    const ChipStyle = {
      "margin-top": "20px"
    };

    if (this.state.hasError) {
      return (
        <div>
          <h1 style={errorStyle}>{user} not found</h1>
        </div>
      );
    }
    if (user !== "") {
      return (
        <Fragment>
          <Chip style={ChipStyle}>
            <Avatar src={this.state.userInfos.avatar_url} />
            {user}
          </Chip>
          <ListRepositories
            repositories={this.state.repositoriesList}
            user={user}
          />
        </Fragment>
      );
    }
    return <div />;
  }
}

export const Repositories = RepositoriesComponent;
