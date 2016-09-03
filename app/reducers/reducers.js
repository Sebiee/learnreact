import clone from 'lodash.clonedeep';
import {
    ADD_TODO,
    UPDATE_TODO,
    TOGGLE_TODO,
    TOGGLE_EDIT,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;

function todos(state = [], action) {
    let newState;
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.payload.text,
                    id: action.payload.id,
                    completed: false,
                    isEditing: false
                }
            ];
        case TOGGLE_TODO:
            // console.log(action);
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        case TOGGLE_EDIT:
            newState = clone(state);
            newState.forEach((el, ind) => {
                if(el.id === action.payload.id) {
                    newState[ind].isEditing = !el.isEditing;
                    return;
                }
            });
            return newState;
        case UPDATE_TODO:
            newState = clone(state);
            newState.forEach((el, ind) => {
                if(el.id === action.payload.id) {
                    newState[ind].text = action.payload.text;
                    return;
                }
            });
            return newState;
        default:
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    };
}
