import React, { Component } from 'react';
import './App.css';
import PeopleContainer from './containers/PeopleContainer'
import CreatePersonForm from './components/CreatePersonForm'
import SearchForm from './components/SearchForm'

class App extends Component {

  state={
    peopleList: [],
    filteredList: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch('http://localhost:3001/people')
      .then(res=>res.json())
      .then(data => this.setState({
        peopleList: data,
        filteredList: data
      }))
  }

  createQuoteSubmitHandler = (quote, id) => {
    let list = [...this.state.peopleList]
    let person = list.find((person) => (person.id === id))
    let quotesArr = person.quotes
    let newQuotesArr = [...quotesArr, quote]
    let peopleListClone = [...this.state.peopleList]
    fetch(`http://localhost:3001/people/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        quotes: newQuotesArr
      })
    }).then(res=>res.json())
      .then(data => {
        let foundPerson = peopleListClone.find(person=>(person.id===id))
        foundPerson.quotes = data.quotes
        this.setState({
          peopleList: peopleListClone
        })
      })
  }

  createPersonSubmitHandler = (personState) => {
    fetch('http://localhost:3001/people', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: personState.name,
        image: personState.image,
        quotes: personState.quotes,
        slaps: 0,
        claps: 0
      })
    }).then(res=>res.json())
      .then(data => {
        let peopleListClone = [...this.state.peopleList, data]
        this.setState({
          peopleList: peopleListClone
        })
      })
  }

  changeHandler = (e) => {
    let newFilteredList = this.state.peopleList.filter(person => (person.name.toLocaleLowerCase().includes(e.target.value)))
    this.setState({
      searchTerm: e.target.value,
      filteredList: newFilteredList
    })
  }

  slapClickHandler = (id) => {
    let person = this.state.peopleList.find(person=>person.id===id)

    fetch(`http://localhost:3001/people/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        slaps: person.slaps + 1
      })
    }).then(res=>res.json())
      .then(data => {
        let peopleListClone = [...this.state.peopleList]
        let foundPerson = peopleListClone.find(person=>(person.id===id))
        foundPerson.slaps = data.slaps
        this.setState({
          peopleList: peopleListClone
        })
      })
  }

  clapClickHandler = (id) => {
    let person = this.state.peopleList.find(person=>person.id===id)

    fetch(`http://localhost:3001/people/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        claps: person.claps + 1
      })
    }).then(res=>res.json())
      .then(data => {
        let peopleListClone = [...this.state.peopleList]
        let foundPerson = peopleListClone.find(person=>(person.id===id))
        foundPerson.claps = data.claps
        this.setState({
          peopleList: peopleListClone
        })
      })
  }

  render() {
    return (
      <div>
        <SearchForm changeHandler={this.changeHandler}/>
        <CreatePersonForm createPersonSubmitHandler={this.createPersonSubmitHandler}/>
        <PeopleContainer createQuoteSubmitHandler={this.createQuoteSubmitHandler} peopleList={this.state.filteredList}
        slapClickHandler={this.slapClickHandler}
        clapClickHandler={this.clapClickHandler}
        />
      </div>
    );
  }
}

export default App;
