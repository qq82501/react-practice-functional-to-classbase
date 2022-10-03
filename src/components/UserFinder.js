import { Fragment, Component } from "react";

import Users from "./Users";
import styles from "./UserFinder.module.css";
import { MyContext } from "../store/my-context";
import ErrorBoundary from "./ErrorBoundary";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  static contextType = MyContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState((prevState) => {
      return { searchTerm: event.target.value };
    });
  };
  render() {
    return (
      <Fragment>
        <div className={styles.finder}>
          <input
            // onClick={() => {
            //   console.log(444);
            // }}
            type="search"
            onChange={this.searchChangeHandler}
          />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
