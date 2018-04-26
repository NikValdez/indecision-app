import React, { Component } from 'react';
import './App.css';
import AddOption from './components/AddOption'
import Option from './components/Option'
import Options from './components/Options'
import Header from './components/Header'
import Action from './components/Action'
import OptionModal from './components/OptionModal'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      options: [],
      selectedOption: undefined
    }

    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this)
}

componentDidMount(){
  try {
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)

    if (options){
    this.setState(() => ({ options }))
    }
      } catch (e) {
    }
  }


componentDidUpdate(prevProps, prevState) {
  if (prevState.options.length !== this.state.options.length) {
    const json = JSON.stringify(this.state.options)
    localStorage.setItem('options', json)
  }
}


handleDeleteOptions(){
  this.setState(() => ({ options: [] }))
}

handleClearSelectedOption(){
  this.setState(() => ({ selectedOption: undefined }))
}

handleDeleteOption(optionToRemove) {
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToRemove !== option)
  }))
}

handlePick() {
  const randomNum = Math.floor(Math.random() * this.state.options.length)
  const option = this.state.options[randomNum]
  this.setState(() => ({
    selectedOption: option
  }))
}

handleAddOption(option) {
  if (!option) {
    return "Enter a valid value to add item"
  } else if (this.state.options.indexOf(option) > -1 ) {
    return 'This option already exists'
  }
  this.setState((prevState) => ({
    options: prevState.options.concat(option)
  }))
}

  render(){
    const title = "Indecison App"
    const subtitle = "make a choice without choosing"
    return(
      <div class="container">
        <Header title={title} subtitle={subtitle} />
        <div className="row">
        <div className="col-md-6">
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        </div>
        <div className="col-md-3 offset-md-8">
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        </div>
        </div>
        <div className="col-md-6 offset-md-4">
          <Action handlePick={this.handlePick} />
        </div>
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
    )
  }
}





export default App;
