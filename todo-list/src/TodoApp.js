import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterLink from './containers/FilterLink'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import AddTodo from './containers/AddTodo'
import Hello from './components/Hello'
import logHoc from './components/logHoc'

const LogHello = logHoc(Hello)

function TodoApp() {
  return (<Router>
      <div className="App">
        <div  style={{
          "flexbox": 'justify-content'
        }}>
          <Link to="/addTodo">App</Link>
          <Link to="/visibleTodoList">Visible todo list</Link>
        </div>
        <LogHello />
        <Switch>
          <Route path="/addTodo" component={AddTodo} />
          <Route path="/visibleTodoList" component={VisibleTodoList} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default TodoApp;
