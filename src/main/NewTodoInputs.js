import React from 'react';

export const NewTodoInputs =(props)=>{
  const styles ={
    border: 'none',
    borderRadius: 5
  }
  return (
    <div>
      <form onSubmit={props.submitNew}>
        <input value={props.todo.title} onChange={props.handleChange} type='text' name='title' placeholder='Title' />
        <input value={props.todo.description} onChange={props.handleChange} type='text' name='description' placeholder='Description' />
        <button style={styles} type='submit'>Add Todo</button>
      </form>
    </div>
  )
}
