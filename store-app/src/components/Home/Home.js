import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frutas: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:8080/api/frutas')
         .then((frutas) => {
            this.setState({frutas: frutas.data})
         });
  }

  getFruits = () => {
    axios.get('http://localhost:8080/api/frutas')
    .then((frutas) => {
      this.setState({frutas: frutas.data})
    })
  }

  onDelete = (id) => {
  axios.delete(`http://localhost:8080/api/fruta/${id}`, {})
  .then(res => this.getFruits())
   
  }

  render() {
    const { frutas } = this.state;
    return <div className="gridContainer">
            {
              frutas.length > 0 && frutas.map((fruta, index) => {
                return <div className="card" key={index}>
                <button
                className="delete" onClick={()=>this.onDelete(fruta.id)}>x</button>
                  <img src={fruta.imageUrl} alt="Random" />
                  <div>
                    <span>Nombre: {fruta.name}</span>
                    <span>Precio: {fruta.price}$</span>
                  </div>
                </div>
              })
            }
          </div>;
  }
}

export default Home;