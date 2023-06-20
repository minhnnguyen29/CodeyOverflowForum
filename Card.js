import React from 'react';
import Header from './Header' 
import Body from './Body'

function Card(props) {
  return (
     <>
      <Header 
        profileImg = {props.commentObj.profileImg}
        username = {props.commentObj.username} /> 
      <Body 
        comment = {props.commentObj.comment} />
     </>
  );
}

export default Card; //allows Card to be imported in App 
