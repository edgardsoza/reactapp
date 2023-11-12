import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar';

function App() {
  return (
    <div>
     <NavBar />
     <h1>Hello People!</h1>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
