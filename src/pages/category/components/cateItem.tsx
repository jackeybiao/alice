import React from 'react';
import { Milestone } from '../../../utils/types';

import "./index.scss";

import { randomColor } from '../../../utils';

interface ShowItemProps {
  item: Milestone,
  index: number,
  getnodes: Function,
}

const CateItem = (props: ShowItemProps) => {

  const { item, getnodes } = props;

  const handleClick = (item: Milestone) => {
    if(item && item.issues && item.issues.nodes && item.issues.nodes.length > 0) {
      getnodes(item.issues.nodes);
    }else {
      return getnodes([]);
    }
  }

  const style = {
    backgroundImage: `linear-gradient(to bottom right,${randomColor()} 30%, ${randomColor()})`
  }

  return (
    <div onClick={()=>{handleClick(item)}} className="cate-item">
      <div className="bg" style={style}></div>
      <div className="mate">
        <div className="info">
          <span>{item.title} &#40; {item.issues?.totalCount} &#41;</span> <span>{item.description}</span>
        </div>
      </div>
    </div>
  )
}


export default CateItem;