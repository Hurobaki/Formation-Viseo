import React, { Fragment, Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class SearchFormComponent extends Component {
  state = {
    value: ""
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value: value });
  };

  render() {
    const { value } = this.state;
    const { onUserSelect } = this.props;
    const { visible } = this.props;

    const buttonStyle = {
      "margin-bottom": "20px"
    };
    if (visible) {
      return (
        <Fragment>
          <TextField
            name="search"
            value={value}
            onChange={this.onChange}
            hintText="Username"
          />
          <p>{value}</p>
          <RaisedButton
            label="Search"
            secondary={true}
            onClick={() => onUserSelect(value)}
            style={buttonStyle}
          />
        </Fragment>
      );
    }

    return <div />;
  }
}

export const SearchForm = SearchFormComponent;
