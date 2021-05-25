import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
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
      setTimeout(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
      .then(data=>data.json())
      .then(data=>{
          this.setState({robots:data})
      })
      },3000)
  };   
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return (
        robot.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) 
          ||
        robot.username
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase())
      );
    });
    return this.state.robots.length===0? <h1 className="big-title centered tc t1">Loading the robofriends...</h1>:
     (
      <div className="tc">
        <h1 className="big-title f1">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
