import React, { Component } from 'react';
import './App.css';


import Contador from './components/Contador';

class App extends Component{

  componentWillMount(){
    //console.log("componentWillMount");
  }

  componentDidMount(){
    //console.log("componentDidMount");
  }


  // metodo que devuelve JSX (eventualmente se convierte en HTML)
  render(){
    //console.log('Render');
    return (
      <section>
        <div>
        </div>

        <Contador/>
      </section>
    )

  }
}

export default App;
