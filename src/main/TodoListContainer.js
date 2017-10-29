import React from 'react';
import {TodoComponent} from './TodoComponent';
import {NewTodoInputs} from './NewTodoInputs';
import axios from 'axios';

const url = "https://api.vschool.io/aaronellis/todo/"

export class TodoListContainer extends React.Component{
  constructor(){
    super();
    this.state={
      todoList: [],
      todo: {
        title: '',
        description: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitNew = this.submitNew.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount(){
    axios.get(url).then(response=>{
      this.setState({
        todoList: response.data
      })
    })
  }
  handleChange(e){
    e.persist();
    this.setState(prevState=>{
      return {
        todo: {...prevState.todo,
        [e.target.name]: e.target.value}
      }
    })
  }
  submitNew(e){
    e.preventDefault();
    axios.post(url, this.state.todo).then(response=>{
      this.setState(prevState=>{
        return {
          todoList: [response.data, ...prevState.todoList],
          todo: {
            title:'',
            description:''
          }
        }
      })
    })
  }
  handleDelete(id){
    axios.delete(url + id).then(response=>{
      this.setState(prevState=>{
        const newArr = prevState.todoList.filter(todo=> {return todo._id !== id})
          return {
            todoList: newArr
           }
        })
      })
  }
  render(){
    return(
      <div>
        <NewTodoInputs todo={this.state.todo} submitNew={this.submitNew} handleChange={this.handleChange}/>
        {this.state.todoList.map(todo=>{
          return (
          <div key={todo._id}>
            <TodoComponent handleDelete={this.handleDelete} todo={todo} />
          </div>)
        })}
      </div>

    )
  }
}
