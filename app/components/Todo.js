import React, { PropTypes } from 'react';

/*
** inlocuire text input
** inlocuire edit ok cancel
*/

const Todo = (props) => {
    const { onClick, completed, text, onToggleEdit, onUpdateTodo } = props;
    // console.log(props);
    let renderContent;
    let input;
    if(props.isEditing) {
        renderContent = (
            <div>
                <input type="text" defaultValue={text} ref={node => {
                    input = node;
                }}/>
                <button onClick={() => onToggleEdit(props.id)}>
                    Cancel
                </button>
                <button onClick={
                    () => {
                        onUpdateTodo(input.value, props.id);
                        onToggleEdit(props.id);
                    }
                }>
                    Save
                </button>
            </div>
        );
    } else {
        if(!completed) {
            renderContent = (<div style={{opacity: '1'}}>{text}
            <button onClick = {() => onToggleEdit(props.id)}>
                Edit
            </button></div>);
        } else {
            renderContent = (<div style={{opacity: '0.2'}}>{text}
            <button onClick = {() => onToggleEdit(props.id)} disabled>
                Edit
            </button></div>);
        }
    }
    if(completed) {
        return (
            <li
                style = {{backgroundColor: '#d2d2d2'}}
            >
                <input type="checkbox" onClick = {onClick} defaultChecked/>
                {renderContent}
            </li>
        );
    } else {
        return (
            <li>
                <input type="checkbox" onClick = {onClick}/>
                {renderContent}
            </li>
        );
    }
};

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onToggleEdit: PropTypes.func.isRequired,
    onUpdateTodo: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
