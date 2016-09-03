import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as toggleActions from '../actions/actions';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import Todolist from './TodoList';

/*
*
* Nu stiu...!
*
*/

class TodoContainer extends React.Component {

    render() {
        return (
          <div>
            <AddTodo />
            <Todolist
                todos={this.props.todos}
                onTodoClick={this.props.toggleTodo}
                onToggleEdit={this.props.toggleEdit}
                onUpdateTodo={this.props.updateTodo}
            />
            <Footer />
          </div>
        );
    }
}

TodoContainer.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        completed: React.PropTypes.bool.isRequired,
        text: React.PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: React.PropTypes.func.isRequired,
    toggleEdit: React.PropTypes.func.isRequired,
    updateTodo: React.PropTypes.func.isRequired
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(toggleActions, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TodoContainer);
