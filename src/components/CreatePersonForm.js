import React from 'react';


class CreatePersonForm extends React.Component{

  state={
    name: "",
    image: "",
    quotes: [],
    slaps: 0,
    claps: 0
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createPersonSubmitHandler(this.state)
  }

  render(){
    return(
      <form className="searchbar" onSubmit={this.submitHandler}>
        <label>Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
        <label>Image URL:</label>
        <input type="text" name="image" value={this.state.image} onChange={this.changeHandler}/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
export default CreatePersonForm;
