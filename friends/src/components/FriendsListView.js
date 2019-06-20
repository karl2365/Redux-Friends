

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsList from './FriendsList';
import { getFriends } from '../actions';




class FriendsListView extends Component {

    componentDidMount() {
        this.props.getFriends()
    }


    render() {
        if(this.props.isFetching){
            return(<p>loading...</p>)
        }else{
        return (
            <div>
                <FriendsList friends={this.props.friends} />
            </div>
        )}
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    friends: state.friends
})


export default connect(mapStateToProps, { getFriends })(FriendsListView)


