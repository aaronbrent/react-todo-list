import React from 'react';

export const TodoComponent =(props)=>{
  const styles ={
    border: 'none',
    borderRadius: 5
  }
  return(
    <div>
      <h2>{props.todo.title}</h2>
      <p>{props.todo.description}</p>
      <button style={styles}
        onClick={()=>props.handleDelete(props.todo._id)}>Delete</button>
      <hr></hr>
    </div>
  )
}
