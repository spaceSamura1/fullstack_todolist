import { FETCH_USER } from '../Actions/types';

/**
 * Returns the state of user authentication
 */
export default function(state = null, action) {
    console.log(action)
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;

        default:
        return state;
    }
}