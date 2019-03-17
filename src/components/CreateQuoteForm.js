import React from 'react';

class CreateQuoteForm extends React.Component {

  state={
    quote: ""
  }

  changeHandler = (e) =>{
    this.setState({
      quote: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createQuoteSubmitHandler(this.state.quote, this.props.person.id)
  }

  render(){
    return(
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder={"Quote"} value={this.state.quote} onChange={this.changeHandler} />
          <input type="submit" value="Submit" />
        </form>
    )
  }
}
export default CreateQuoteForm;
