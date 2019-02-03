import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';




// COMPONENTS 
import Header from './componente/Header/header';
import Home from './components/Home/Home';
import AddFruit from './components/AddFruit/AddFruit';
// 

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      titulo:'Mis frutitas',
      showMe:true
    }    
  }

  ocultar(newState){
    this.setState({
      showMe: newState
    })
  }

  mostrar(newState){
    this.setState({
      showMe: newState
    })
  }

  onSubmit = (fruit) => {
axios.post('http://localhost:8080/api/fruta', fruit)
.then(res => {console.log(res.data)})
}


  render() {
    return (
      <div className="App">
        <Header silencio = {this.ocultar.bind(this)} ruido={this.mostrar.bind(this)}/>
    <div className="contenedor">
        {
          this.state.showMe?
        <AddFruit
        agregar={this.onSubmit}/>
        :null
        }

      
        </div>
        <main>
        <h2>{this.state.titulo}</h2>
        <Home />
        </main>
      </div>

    );
  }
}

export default App;
