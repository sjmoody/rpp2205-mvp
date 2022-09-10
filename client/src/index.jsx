import React from 'react';
import ReactDOM from 'react-dom';
// import data from '../../database/data'
import IntentionList from './components/IntentionList.jsx'
import SuggestionItem from './components/SuggestionItem.jsx'
import $ from 'jquery';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intentions: [],
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
    console.log("component mounted");
    $.get('api/intentions')
    .then(intentions => {
      console.log(`client received intentions:`)
      console.log(intentions)
      this.setState({intentions})
    })
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
          <Container>
          <h1>Fast Food Stanislavski</h1>
          <h5>Choose an intention:</h5>
          <IntentionList onClick={this.handleSelectIntention} intentions={intentions}/>
          </Container>
        </div>
      )
    } else {
      return (
        <div>
          <Card>
          <Card.Header>{activeIntention}</Card.Header>
            <Card.Body>
            <Card.Text><SuggestionItem suggestion={activeSuggestion}/></Card.Text>
            </Card.Body>
            <Card.Body>
            <Stack direction="horizontal" gap={3}>
          <Button  variant="outline-secondary " onClick={this.handleNewIntention}>New Intention</Button>
          <Button variant="outline-success" onClick={this.handleNewSuggestion}>New Suggestion</Button>
          </Stack>
          </Card.Body>
        </Card>


        </div>
      )
    }

  };
}

ReactDOM.render(<App />, document.getElementById('root'));

