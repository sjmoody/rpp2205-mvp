import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


  const IntentionList = (props) => {
    return (
      <div>

        {/* {props.intentions.length > 0 &&
        <h2>You have {props.intentions.length} Intentions to choose from </h2>
        } */}
        <ListGroup>
        {props.intentions.map((intention, index) => {
          return <ListGroup.Item key={index} onClick={() => props.onClick(intention.title)}> {intention.title}</ListGroup.Item>
        })}
        </ListGroup>
      </div>
    )
  };


export default IntentionList;


