import React, {useState,useEffect} from 'react';

import { Label,CatePost } from '../../utils/types';

import { queryLabels } from '../../utils/service';

import "./index.css";

import Loading from '../../components/loading';

import { PostItem } from "../category/index";

interface labelsProps {}

const Labels = (props: labelsProps) => {

  const [loading,setLoading] = useState(false);

  const [isSelect,setIsSelect] = useState(false);

  const [labelPosts,setLabelPosts] = useState([] as Array<CatePost>);

  const [labels, setLabels] = useState([] as Array<Label>);

  useEffect(()=>{
    setLoading(true);
    const subscription = queryLabels().subscribe(res => {
      setLabels(res.repository.labels.nodes)
      setLoading(false);
    })
    return () => {
      subscription.unsubscribe()
      setLoading(false);
    }
  },[])


  const handleClick = (item:Label) => {
    if(item && item.issues && item.issues.nodes && item.issues.nodes.length > 0) {
      setLabelPosts(item.issues.nodes);
      setIsSelect(true)
    }else{
      setIsSelect(false)
    }
  }

  return (
    <div className="dark linght detail-container">
      {loading?(<Loading />):""}
      <div className="tag">
        {labels.map(item=>(
          <span onClick={()=>{handleClick(item)}} key={item.id} className="tag-item" style={{color:`#${item.color}`}} title={item.description}>{item.name}</span>
        ))}
      </div>

      {isSelect?(
        <div className="grid-box sub-container">
        {labelPosts.map((item) =>(
          <PostItem key={item.id} item={item} />
        ))}
      </div>
      ):""}

    </div>
  ) 
}

export default Labels;
