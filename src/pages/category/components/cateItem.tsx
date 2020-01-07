import React from 'react';
import { Milestone } from '../../../utils/types';

import cat1 from '../../../assets/images/cat/cat1.jpg';
import cat2 from '../../../assets/images/cat/cat2.jpg';
import cat3 from '../../../assets/images/cat/cat3.jpg';
import cat4 from '../../../assets/images/cat/cat4.jpg';
import cat5 from '../../../assets/images/cat/cat5.jpg';
import cat6 from '../../../assets/images/cat/cat6.jpg';


import "./index.scss";

const cats = [cat1,cat2,cat3,cat4,cat5,cat6];


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

  return (
    <div onClick={()=>{handleClick(item)}} className="cate-item" key={item.id}>
      <img className="bg" src={cats[index]} alt={item.title} />
      <div className="mate">
        <div className="info">
          <img className="avatar" src={cats[index]} alt={item.title} />
          <span>{item.title} （ {item.issues?.totalCount} ）</span>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  )
}


export default CateItem;