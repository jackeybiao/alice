import React from 'react';
import { Link } from 'react-router-dom';

import testImg from "../../assets/images/59.jpg";

import { Post } from '../../utils/types';

import './index.css';

interface ShowCase {
  info: Post
}

interface Label {
    id: string
    name: string
    color: string
    description: string
}

function getReadTime(len: number) {
  return Math.floor(len / 360)
}

const ShowCase = (props:any) => {
  const { info } = props
  return (
    <div className="col-md-6 col-sm-12">
      <div className="show-case-bg">
        <div className="show-case">
          <Link to={`/post/${info.node.number}`}>
            <img src={testImg} alt="" />
            <h3>{info.node.title}</h3>
            <p>{info.node.title}</p>
            <p>发布于 {info.node.updatedAt} • {getReadTime(info.node.bodyText.length)}分钟</p>
            <div className="list-tags">
              <span>标签：</span>
              {info.node.labels.nodes.map((item:Label)=>(
                <span key={item.id} > {item.name} </span>
              ))}
              <span>类别：</span>
              <span> {info.node.milestone.title} </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ShowCase;