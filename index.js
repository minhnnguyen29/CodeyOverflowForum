import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'

/*
Role: 
Responsibility: Render the App component 
*/

createRoot(
  document.getElementById('app')
).render(<App />); 
