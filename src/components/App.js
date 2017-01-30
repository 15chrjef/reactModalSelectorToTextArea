import React from 'react';
import Modal from './Modal'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: [],
      showModal: false,
      selected: ''
    }
  }
  showModal() {
    this.setState({
      showModal: !this.state.showModal
    })
  }
  selectRow(value) {
    this.setState({
      selected: value
    })
  }
  handleTextAreaChange(e) {
    var rows = this.state.rows
    rows[this.state.selected] = e.target.value
    this.setState({ rows })
  }
  addRowToModal() {
    var currentRows = this.state.rows
    var length = currentRows.length.toString()
    currentRows.push(length)
    this.setState({
      rows: currentRows
    })
  }
  render() {
    const { showModal } = this.state;
    var myModal = (
      <Modal
        handleTextAreaChange={this.handleTextAreaChange.bind(this)}
        rows={this.state.rows}
        selectRow={this.selectRow.bind(this)} 
        showModal={this.showModal.bind(this)}
        selected={this.state.selected}
      />
    )
    var modalButton = ( <input onClick={this.showModal.bind(this)} type='submit' value='Open'/> );
    var addRowButton = showModal === false? '' : (<input onClick={this.addRowToModal.bind(this)} type='submit' value='Add Row'/> );
    var content = showModal === false ? modalButton : myModal;
    
    return (
      <div style={styles.container}>
        {addRowButton}
        {content}
      </div>
    )
  }
}

var styles = {
  container: { 
    display: 'flex',
    flex: 1, 
    position: 'absolute', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%', 
    width: '100%'
  }
}

export default App;