import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onToggleEdit, onUpdateTodo }) => (
    <ul className="todolist">
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                onToggleEdit={onToggleEdit}
                onUpdateTodo={onUpdateTodo}
            />
        )}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
    onUpdateTodo: PropTypes.func.isRequired
};

export default TodoList;
