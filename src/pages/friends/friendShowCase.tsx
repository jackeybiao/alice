import React from 'react';
import './index.scss';

type FriendData = {
    title: string,
    subTitle:string,
    link:string,
    luckyColor:string
}

type FriendShowCaseProps = {
    item: FriendData
}

const FriendShowCase = (props: FriendShowCaseProps) => {
    const { item } = props;


    const style = {
        backgroundImage: `linear-gradient(to top right,${item.luckyColor} 30%, transparent)`
    }


    return (
        <li className="friend-showCase" style={style}>
            <a title={item.title} href={item.link} target="_block">
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
            </a>
        </li>
    )
}


export default FriendShowCase;