import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId : number = 0;
  todos: Todo[] = [];

  constructor() { }

  // POST todo
  addTodo(todo: Todo) : TodoDataService{
    if(!todo.id){
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number) : TodoDataService{
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, value: Object = {}) : Todo {
    let todo = this.getTodoById(id);
    if(!id){
      return null;
    }
    Object.assign(todo, value);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos() : Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number) : Todo{
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updateTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updateTodo;
  }
}
