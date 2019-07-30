import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import Search from './components/search-box/search';

class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    this.fetchMonsters();
  }

  fetchMonsters = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState({ monsters: data });
  };

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  
  handeleDelete = (id, e) => {
    let arry = [...this.state.monsters.id];
    this.setState(prevState => ({
        arry: prevState.monsters.filter(el => {
          // el !== id
          // console.log(el !== id)
          console.log(e.target.id)
        })
    }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonstres = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonstres}  handeleDelete={this.handeleDelete}/>
      </div>
    );
  }
}

export default App;
