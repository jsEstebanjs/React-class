import './App.css';
import React from 'react';
import Card from './components/Card.js';
import Oprimeme from './components/Oprimeme';
import ModalRight from './components/ModalRight';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      modalRight: false,
    };
    /*
    para poder pasar funciones como props
    this.nombreFuncion = this.nombreFuncion.bind(this)
    */
    this.handleModal = this.handleModal.bind(this)
  }
  componentDidMount() {
    this.fetchCharacterRickAndMory()
  }
  fetchCharacterRickAndMory() {
    fetch("https://rickandmortyapi.com/api/character", {
      methods: "GET",
    })
      .then((response) => response.json())
      .then((date) => {
        this.setState({
          cards: date.results
        })
      })
  }
  handleModal(value) {
    if(value){
      this.setState({
        modalRight: value
      })
      document.body.style.overflow = "hidden";
    }else{
      this.setState({
        modalRight: value
      })
      document.body.style.overflow = "auto";

    }
  }
  render() {
    return (
      <div>
        <ModalRight handleModal={this.handleModal} visible={this.state.modalRight} />
        <Oprimeme handleModal={this.handleModal} />
        {this.state.cards.map((item) => (
          <Card name={item.name} image={item.image} key={item.id} />
        ))}
      </div>
    )
  }
}

export default App;
