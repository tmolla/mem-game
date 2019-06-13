import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends Component {
  // Set the initial state
  state = {
    images,
    clicked: [],
    message: "Start clicking buddy!"
  };

  changeGameState = (id) => {
    const clicked = this.state.clicked;
    let message = "";
    if (this.state.clicked.includes(id)) {
      message = "You lost dude! Click on any image to play again."
      clicked.length = 0;
    }else {
      clicked.push(id);
      message = this.state.clicked.length + " correct out of " + this.state.images.length;
    }

    if (clicked.length === 12) {
      message = "Congratulation, you have won! Click on any image to play again."
      clicked.length = 0
    }else{
      const images = this.state.images.sort(()=>Math.random() - 0.5);
      this.setState({images});
    }
    this.setState({message});
  }

  // Map imageCard component for each image object and render the page
  render() {
    return (
      <div>
      <Header message={this.state.message}/>
      <Wrapper>
        {this.state.images.map(image => (
          <ImageCard
            changeGameState={this.changeGameState}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
      <Footer/>
      </div>
    );
  }
}

export default App;
