import React from 'react'


const Action = (props) => (
  <div>
    <button onClick={props.handlePick} className="btn btn-info">
    What should I do?
    </button>
  </div>
)


export default Action
