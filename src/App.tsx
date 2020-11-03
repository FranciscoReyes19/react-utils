import React, { Component } from 'react';
import './App.css';

// function Helloworld(props:any){

//   return (
//   <div id="hello" > 
//     <h3>{props.subtitle}</h3>
//     {props.text}
//   </div>
//   );

// }

//Function by class

export interface Props {
  name: string,
  surname: string;
}

class Helloworld extends React.Component<Props> {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }


  render() {
    const { name } = this.props;

    if (this.state.show) {
      return (
        <div id="hello" >
          <h3>{this.props.name}</h3>
          {this.props.surname}
          <button onClick={ this.toggleShow } >Change state</button>
        </div>
      )
    }
    else{
      return (
      <div>
        <h1>No hay elementos</h1>
        <button onClick={ this.toggleShow } >Change state</button>
      </div>
      )
    }

  }
}

// Function by arrow
// const App = () => {
//   return (
//     <div>This is my component!: <Helloworld/></div>
//     );
//   }

// Function by arrow (option 2)  
//const App = () => <div>This is my component!: <Helloworld/></div>

// Regular sintax function
function App() {
  return (
    <div>this is my component:
      <Helloworld name="hola fran" surname="lorem ipsum" />
      <Helloworld name="hola fran" surname="lorem ipsum" />
    </div>
  );
}

export default App;