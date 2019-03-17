import React from 'react';
import Quote from './Quote';
import CreateQuoteForm from './CreateQuoteForm';

class PersonCard extends React.Component {

  state={
    clicked: false
  }

  clickHandler = () => {
    let click = this.state.clicked
    this.setState({
      clicked: !click
    })
  }



  render(){
    return(
      <div className={'personCard'}>
      <h1>{this.props.person.name}</h1>
      <figure>
      <img src={this.props.person.image} className={'image'} alt="" onClick={this.clickHandler}/>
      <button onClick={()=>this.props.slapClickHandler(this.props.person.id)}>{this.props.person.slaps} Slaps <span role="img">👋</span></button>
      <button onClick={()=>this.props.clapClickHandler(this.props.person.id)}>{this.props.person.claps} Claps <span role="img">❤️</span></button>
      </figure>
      {this.state.clicked ? (<React.Fragment><CreateQuoteForm
        createQuoteSubmitHandler={this.props.createQuoteSubmitHandler} person={this.props.person} key={this.props.person.id}/> <Quote person={this.props.person} key={this.props.person.id}/></React.Fragment>) : null}
      </div>
    )
  }


}
export default PersonCard;
