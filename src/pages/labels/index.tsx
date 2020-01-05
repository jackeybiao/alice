import React, {useState,useEffect} from 'react';

import { Label } from '../../utils/types';

import { queryLabels } from '../../utils/service';

import "./index.css";

interface labelsProps {}

const Labels = (props: labelsProps) => {

  const [labels, setLabels] = useState([] as Array<Label>);

  useEffect(()=>{
    const subscription = queryLabels().subscribe(res => {
      setLabels(res.repository.labels.edges)
    })
    return () => {
      subscription.unsubscribe()
    }
  },[])

  return (
    <div className="dark linght detail-container">
      <div className="tag">
        {labels.map(item=>(
          <span key={item.node.id} className="tag-item" style={{color:`#${item.node.color}`}} title={item.node.description}>{item.node.name}</span>
        ))}
      </div>
    </div>
  ) 
}

export default Labels;
