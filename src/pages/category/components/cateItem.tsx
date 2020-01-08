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

  const { item, index, getnodes } = props;

  const handleClick = (item:Milestone) => {
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
    <div onClick={()=>{handleClick(item)}} className="cate-item" key={item.id}>
      <div className="bg" style={style}></div>
      <div className="mate">
        <div className="info">
          <div className="avatar"></div>
          <span>{item.title} （ {item.issues?.totalCount} ）</span>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  )
}


export default CateItem;