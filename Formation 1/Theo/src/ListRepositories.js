import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";

class ListRepositoriesComponent extends Component {
  onClick = repo => {
    console.log(repo);
  };

  render() {
    const { repositories } = this.props;
    const { user } = this.props;

    const listRepositories = repositories.map(repo => (
      <Link
        to={{
          pathname: "/repo/info",
          state: { repo: "helle" }
        }}
      >
        <ListItem
          primaryText={repo.name}
          leftIcon={<ContentInbox />}
          onClick={() => this.onClick(repo)}
        />
      </Link>
    ));

    return (
      <div>
        <List>{listRepositories}</List>
      </div>
    );
  }
}
export const ListRepositories = ListRepositoriesComponent;
