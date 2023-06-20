import React from 'react';
import {comments} from './commentData'; 
import Card from './Card'

/*
  Role: Top-level component 
  Responsibility: Return interface to be rendered (Card)
*/

function App() {
  return (
    <div>
      {
        comments.map( comment => {
        <Card commentObj={comment} />
        } );
      }
    </div>
  );
}

export default App; 
