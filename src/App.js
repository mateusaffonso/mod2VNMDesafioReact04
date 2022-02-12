//Crie um component de class


// Crie uma arrow function que receba uma mensagem e exiba na tela


// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React, { Component } from "react"

class App extends Component {

  state = {

  }

  showMessage = (mensagem) => {

    return mensagem
  }

  doubleNumber = (num) => {

    return (num*2)
  }

  render() {

    return (

      <div>
        <h1>Bem vindo à prática React 04 - Arrow Function</h1>
        <h2>{this.showMessage("Meus primeiros passos em React através do Vai na Web")}</h2>
        <h3>O dobro do número 297 é {this.doubleNumber(297)}</h3>

      </div>
    )
  }
}

export default App

