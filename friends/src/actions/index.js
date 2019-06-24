
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = creds => dispatch =>{
    dispatch({ type: LOGIN_START })
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
            getFriends();
        })
        
}


export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
        .get('http://localhost:5000/api/friends', {
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: err})
        })
}

