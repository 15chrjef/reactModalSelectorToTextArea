import React from 'react'

class ModalTextArea extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { rows, selected } = this.props;
    var selectedText = rows[selected];
    return(
      <textarea 
        value={selectedText} 
        onChange={this.props.handleTextAreaChange.bind(this)} 
        style={{width: '99.3%', height: '99.3%', fontSize: '20px'}}
      />
    )
  }
}

export default ModalTextArea