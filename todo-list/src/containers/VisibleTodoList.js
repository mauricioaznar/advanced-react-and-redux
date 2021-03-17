import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions/index'
import {VisibilityFilters} from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => { return !todo.completed })
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => { return todo.completed})
    default:
      throw new Error('VisibililtyFilter is not set')
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: (todo) => { dispatch(toggleTodo(todo.id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

