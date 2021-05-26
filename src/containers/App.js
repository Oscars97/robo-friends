import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  componentDidMount() {
    const notify = () => {
      toast.dark(`Welcome, to ROBOFRIENDS.
        This app was created using React, RoboHashAPI and React-Toastify.`, {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.json())
        .then((data) => {
          this.setState({ robots: data });
          notify();
        });
    }, 3000);
  }
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return (
        robot.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        robot.username
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase())
      );
    });
    return this.state.robots.length === 0 ? (
      <h1 className="big-title centered tc t1">Loading the robofriends...</h1>
    ) : (
      <div className="tc">
        <h1 className="big-title f1">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
