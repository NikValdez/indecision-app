import React from 'react'
import Option from '../components/Option'

const Options = (props) => (
  <div>
    {
      props.options.map((option) => (
        <Option key={option}
         optionText={option}
         handleDeleteOption={props.handleDeleteOption} />
      ))
    }

    <button onClick={props.handleDeleteOptions} className="btn btn-danger">Delete All</button>
  </div>
)

export default Options
