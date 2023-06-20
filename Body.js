import React from 'react';

/*
Role: UI Building Block for Card    
Responsibility: display comments that users have written 

*/
function Body(props) {
  return (
    <> 
      <p>{props.comment}</p>
    </>
  );
}

export default Body; //allow 'Body' to be imported in Card
