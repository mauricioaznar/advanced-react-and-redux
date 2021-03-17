import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'


const AddTodo = ({dispatch}) => {
  const [text, setText]  = useState('')

  const submitTodo = (text) => {
    addTodo(text)
  }

  return <form
    onSubmit={
      (e) => {
        e.preventDefault()
        dispatch(addTodo(text))
      }
    }
  >
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    >
    </input>
    <button
      type="Submit"
      onClick={() => {submitTodo()}}
    >
      Submit
    </button>
  </form>
}



export default connect()(AddTodo)