import React from 'react';

  const IntentionList = (props) => {
    return (
      <div>
        {props.intentions.length > 0 &&
        <h2>You have {props.intentions.length} Intentions to choose from </h2>
        }
        {props.intentions.map((intention, index) => {
          return <div key={index} onClick={() => props.onClick(intention.title)}> {intention.title}</div>
        })}
      </div>
    )
  };


export default IntentionList;


