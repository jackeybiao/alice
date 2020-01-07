import React, { useState, useEffect } from 'react';

import { 
  useParams
} from 'react-router-dom';

import { Post } from '../../utils/types';

import { queryPostItem } from '../../utils/service';

import Loading from '../../components/loading';

import './index.scss';

interface DetailProps {
  dispatch: Function,
  posts:Array<Post>
}

const Detail = (props: DetailProps) => {

  const { id } = useParams();

  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    const detailDom: HTMLElement | null = document.getElementById("detail");

    setLoading(true)

    const subscription = queryPostItem(Number(id)).subscribe(res=>{

      if(detailDom){
        detailDom.innerHTML = res.repository.issue.bodyHTML
        setLoading(false)
      }

    })
    
    return () => {
      subscription.unsubscribe()
      setLoading(false)
    }

  },[id])

  return (
    <div className="container">
      {loading?(<Loading />):""}
      <article id="detail"></article>
    </div>
  ) 
}

export default Detail;
