import React from 'react'

const ModalSelector = (props) => {
  var background;
    if(props.selected === props.title) {
       background = { backgroundColor: 'blue', color: 'white' }
    } else {
      background = {}
    }
    return (
       <div 
         style={{fontSize: '30px', cursor: 'pointer', border: '1px solid black', ...background}}
         onClick={()=> {
          props.selectRow(props.value)
         } }
       >
        Row {props.title}
      </div>
    )
  }

	export default ModalSelector;