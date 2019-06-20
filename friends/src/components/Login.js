import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';


class Login extends Component {
    state= {
        credentials: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ credentials: {...this.state.credentials, [e.target.name]: e.target.value}})
    }

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials)
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/api/friends')
        })
    }
    render() {
        if(this.props.isLoggingIn){
            return (
                <p>logging in</p>
            )
        } 
        return (
            <div>
                <form onSubmit={this.login}>
                <input type='text' value={this.state.credentials.username} name='username' onChange={this.changeHandler} placeholder='username' />
                <input type='password' value={this.state.credentials.password} name='password' onChange={this.changeHandler}  placeholder='password' />
                <button>Log In</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
})

export default connect(mapStateToProps, {login})(Login)