import React from 'react';

const Quote = (props) => {

  return(
    <ul>
    {props.person.quotes.map(quote=>
      (<li>{quote}</li>)
    )}
    </ul>
  )


}
export default Quote;
