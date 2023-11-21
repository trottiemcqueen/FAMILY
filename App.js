import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { Family } from './family';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Family: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> {
      return response.json();
    })
    .then(users => {
      this.setState({ Family: users });
    }) 
  }


  onSearchEvent = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { Family, searchfield } = this.state;
    const filteredFamily = Family.filter(Family =>{
      return Family.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    
    return !Family.length ? 
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1 underline light-red'>Family and Friends</h1>
          <SearchBox searchChange={ this.onSearchEvent } />
          <Scroll>
            <ErrorBoundry>
              <CardList Family={ filteredFamily } />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
} 

export default App;