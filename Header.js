import React from 'react';

/*
Role: UI Building Block for Card 
Responsibility: display profileImg and username
 */
function Header(props) {
  return (
    <>
      <img src={props.profileImg} />
      <h1>{props.username}</h1> 
    </>
  ); 
}

export default Header; //allow 'Header' to be imported in Card
