import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  constructor() {
    super();
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;