import React from 'react';
import PersonCard from '../components/PersonCard'

class PeopleContainer extends React.Component {



  render(){
    return(
      <div>
        {this.props.peopleList.map(person => (
          <PersonCard
          createQuoteSubmitHandler={this.props.createQuoteSubmitHandler}
          key={person.id}
          person={person}
          slapClickHandler={this.props.slapClickHandler}
          clapClickHandler={this.props.clapClickHandler}
          />
        ))}
      </div>
    )
  }



}
export default PeopleContainer;
