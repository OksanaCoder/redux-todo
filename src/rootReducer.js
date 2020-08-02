import { FETCH_POSTS, NEW_POST } from './actions'
import initialState from './store'

export default function(state={}, action ){
    switch (action.type) {
        case 'FETCH_POSTS': 
                return {
                ...state,
                items: action.payload

        };
        case 'NEW_POST': 
        console.log([...state.tasks, action.payload])
              return {
              ...state,
              tasks: [...state.tasks, action.payload]

        };
        default:
            return state;
    }
}

