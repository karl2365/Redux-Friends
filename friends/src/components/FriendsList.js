import React from 'react'
import Friend from './Friend'

export default function FriendsList(props) {
    return (
        <div>
            {props.friends.map(friend => <Friend key={friend.id} friend={friend} />)}
        </div>
    )
}
