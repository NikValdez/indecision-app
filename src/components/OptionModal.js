import React from 'react'
import ReactModal from 'react-modal'

const OptionModal = (props) => (
  <ReactModal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected option"
    className="react-modal"

  >
    <h3>Selected option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption} className="btn btn-primary">Okay</button>

  </ReactModal>
)



export default OptionModal
