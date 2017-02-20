import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Hola Mundo!!!</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('contenido'));
