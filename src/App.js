import './App.css';
import CardList from './CardList'
import React from 'react';
import {robots} from './robots.js';
import SearchBox from './SearchBox.js';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      robots : robots,
      searchField : ''
    }
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
  return  (
    <div>
    <h1>Robofriends</h1>
    <SearchBox searchChange = {this.onSearchChange}   />
    <CardList robots = {filteredRobots} />
    </div>
  );
  }
}

export default App;
