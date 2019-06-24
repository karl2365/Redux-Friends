import { SUCCESS, FETCHING, FAILURE, LOGIN_START, LOGIN_SUCCESS } from "../actions";

const initialState = {
    friends: [],
    isFetching: false,
    err: '',
    isLoggingIn: false
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case FETCHING:
            return {
                ...state,
                isFetching: true,
            }
        case SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }
        case FAILURE:
            return {
                ...state, 
                err: true,
                isFetching: false
            }
        case LOGIN_START:
            return {
                ...state, 
                isLoggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false
            }

        default: 
            return state;
    }
}

export default reducer;


