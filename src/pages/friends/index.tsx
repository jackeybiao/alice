import React from 'react';
import { friends } from './friendData';
import FriendShowCase from './friendShowCase';

import './index.scss';

const Friend = () => {
    return (
        <div className="container">
            <ul className="friends">
                {friends.map((item, index) => <FriendShowCase key={index} item={item} />)}
            </ul>
        </div>
    )
}

export default Friend;
