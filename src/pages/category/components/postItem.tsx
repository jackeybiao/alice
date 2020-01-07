import React from 'react';
import { Link } from 'react-router-dom';
import { CatePost } from '../../../utils/types';

interface PostItem {
  item: CatePost
}

export function PostItem(props:PostItem) {
  const { item } = props
  return (
    <div className="post-item">
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