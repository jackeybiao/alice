import React, {useState,useEffect} from 'react';

import { Label } from '../../utils/types';

import { queryLabels } from '../../utils/service';

import "./index.css";
import Loading from '../../components/loading';

interface labelsProps {}

const Labels = (props: labelsProps) => {

  const [loading,setLoading] = useState(false);

  const [labels, setLabels] = useState([] as Array<Label>);

  useEffect(()=>{
    setLoading(true);
    const subscription = queryLabels().subscribe(res => {
      setLabels(res.repository.labels.edges)
      setLoading(false);
    })
    return () => {
      subscription.unsubscribe()
      setLoading(false);
    }
  },[])

  return (
    <div className="dark linght detail-container">
      {loading?(<Loading />):""}
      <div className="tag">
        {labels.map(item=>(
          <span key={item.id} className="tag-item" style={{color:`#${item.color}`}} title={item.description}>{item.name}</span>
        ))}
      </div>
    </div>
  ) 
}

export default Labels;
