import React from 'react';
import { Link } from 'react-router-dom';

import { randomColor } from '../../../utils/index';

import { CatePost } from '../../../utils/types';

interface PostItem {
  item: CatePost
}

export function PostItem(props:PostItem) {
  const { item } = props

  const style = {
    borderImage: `radial-gradient(circle at center,${randomColor()},${randomColor()}) 1`
  }
  return (
    <div className="post-item" style={style}>
      <Link to={`/post/${item.number}`}>
        <h3 className="title">{item.title}</h3>
        <div className="meta">
          <span>{item.createdAt}</span>
          {item.labels.nodes.map(label=>(
            <span key={label.id}>
              {label.name}
            </span>
          ))}
          <span>{item.milestone.title}</span>
        </div>
      </Link>
    </div>
  )
}

export default PostItem;