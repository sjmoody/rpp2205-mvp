// import React from 'react';
// import ReactDOM from 'react-dom';
// var React = require('react');
// var ReactDOM = require('react-dom');
// import data from '../../database/data'
import IntentionList from './components/intentionList.jsx'
import SuggestionItem from './components/suggestionItem.jsx'
// import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intentions: data,
      status: 'intentions',
      activeIntention: null,
      activeSuggestion: null

    }
    this.handleSelectIntention = this.handleSelectIntention.bind(this);
    this.setActiveIntention = this.setActiveIntention.bind(this);
    this.setActiveSuggestion = this.setActiveSuggestion.bind(this);
    this.handleNewSuggestion = this.handleNewSuggestion.bind(this);
    this.handleNewIntention = this.handleNewIntention.bind(this);
  }

  componentDidMount() {
    // this has not been tested
    // make get request to route defined in server
    console.log("component mounted");
    const res = new Promise((resolve, reject) => {
      return fetch('http://localhost:3001/api/intentions');
    })
    .then((data) => console.log(data))

  }
  setActiveIntention(intention){
    this.setState({
      status: 'suggestion',
      activeIntention: intention
    });
  }

  setActiveSuggestion(suggestion){
    this.setState({
      activeSuggestion: suggestion
    })


  }
  handleNewSuggestion(){
    let intention = this.state.activeIntention;
    let selected = this.state.intentions.find(i => i.title == intention)
    if(selected){
      let randomNum = Math.floor(Math.random() * selected.suggestions.length)
      let randomSuggestion = selected.suggestions[randomNum];
      this.setActiveSuggestion(randomSuggestion);
    }


  }
  handleNewIntention(){
    this.setState({
      status: 'intentions',
      activeIntention: null,
      activeSuggestion: null
    })
  }

  handleSelectIntention(intention){
    let selected = this.state.intentions.find(i => i.title == intention)
    if(selected){
      let randomNum = Math.floor(Math.random() * selected.suggestions.length)
      let randomSuggestion = selected.suggestions[randomNum];
      this.setActiveSuggestion(randomSuggestion);
      this.setActiveIntention(intention);

    }
  }




  render () {
    let intentions = this.state.intentions;
    let status = this.state.status;
    let activeIntention = this.state.activeIntention;
    let activeSuggestion = this.state.activeSuggestion;
    if (status == 'intentions'){
      return (
        <div>
          <h1>Fast Food Stanislavski</h1>
          <IntentionList onClick={this.handleSelectIntention} intentions={intentions}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>{activeIntention}</h1>
          <button onClick={this.handleNewIntention}>New Intention</button>
          <button onClick={this.handleNewSuggestion}>New Suggestion</button>
          <SuggestionItem suggestion={activeSuggestion}/>

        </div>
      )
    }

  };
}

ReactDOM.render(<App />, document.getElementById('root'));

