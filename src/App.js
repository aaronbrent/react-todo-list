import React from 'react';
import {TodoListContainer} from './main/TodoListContainer';

export const App =()=>{
  const style={
    fontFamily: 'Arial',
    textAlign: 'center'
  }
  return(
    <div style={style}>
      <h1 style={{border:1, color:'green'}}>Task List</h1>
      <TodoListContainer />
    </div>
  )
}
