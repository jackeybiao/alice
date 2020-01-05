import React, { useEffect } from 'react';

import { 
  useParams
} from 'react-router-dom';

import { Post } from '../../utils/types';

import { queryPostItem } from '../../utils/service';

import './index.css';

interface DetailProps {
  dispatch: Function,
  posts:Array<Post>
}

const Detail = (props: DetailProps) => {

  const { id } = useParams();

  useEffect(()=>{
    const detailDom: HTMLElement | null = document.getElementById("detail");

    const subscription = queryPostItem(Number(id)).subscribe(res=>{

      if(detailDom){
        detailDom.innerHTML = res.repository.issue.bodyHTML
      }

    })
    
    return () => {
      subscription.unsubscribe()
    }

  },[id])

  return (
    <div className="dark linght detail-container">
      <div id="detail"></div>
    </div>
  ) 
}

export default Detail;
