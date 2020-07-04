import React from 'react';
import { friends } from './friendData';
import FriendShowCase from './friendShowCase';

import './index.scss';

const Friend = () => {
    return (
        <div className="container">
            <div className="remark">
                <blockquote>
                    备注：友链添加方式，请联系博主！<a href="mailto: hanbiao4079@qq.com">邮箱</a>
                    <div>报备格式：例子</div>
                    <ul>
                        <li>标题: ...</li>
                        <li>副标题: ...</li>
                        <li>链接: ...</li>
                        <li>幸运色: hsl(0, 100%, 50%)</li>
                    </ul>
                </blockquote>
            </div>
            <div className="friends">
                <ul>
                    {friends.map((item, index) => <FriendShowCase key={index} item={item} />)}
                </ul>
            </div>
        </div>
    )
}

export default Friend;
