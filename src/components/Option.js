import React from 'react'

const Option = (props) => (
  <div className="card">
  <div className="float-right">
  <span
    onClick={(e) => {
    props.handleDeleteOption(props.optionText)}} className="delete">X</span>
    </div>
    {props.optionText}
  </div>
)

export default Option
