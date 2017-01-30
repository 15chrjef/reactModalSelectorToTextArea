import React from 'react'
import ModalSelector from './ModalSelector'
import ModalTextArea from './ModalTextArea'

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  renderSelectors() {
    var myArray = this.props.rows
    return myArray.map((row, i) => {
     return ( 
       <ModalSelector 
        selectRow={this.props.selectRow.bind(this, i) }
        key={i} 
        title={i}
        selected={this.props.selected} 
      />
     )
    })
  }
  render() {
		const { rows, selected } = this.props
    return(
      <div style={styles.modalStyle}>
        <div style={{width: '20%', display:'flex', flexDirection: 'column', height: '100%'}}>
          {this.renderSelectors()}
        </div>
        <div style={{width: '80%'}}>
					<ModalTextArea 
            rows={rows} 
            selected={selected}
            handleTextAreaChange={this.props.handleTextAreaChange.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const styles =   {
	modalStyle: {
    display: 'flex', 
    justifyContent: 'center', 
    allignItems: 'center', 
    border: '1px solid black',
    boxShadow: '1px 1px', 
    height: '80%', 
    width: '60%',
    flexDirection: 'row'
  }
}