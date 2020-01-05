import React, {useState,useEffect} from 'react';
import ShowCase from '../components/showCase/index';

import { queryPosts } from '../utils/service';

import { Post,PageInfo } from '../utils/types';

const Homes = () => {

  const [posts, setPosts] = useState([] as Array<Post>);
  const [pageInfo,setPageInfo] = useState({} as PageInfo);

  useEffect(()=>{
    const params = {
      states: "OPEN",
      first:10
    }
    const subscription = queryPosts(params).subscribe(res => {
      setPosts(res.repository.issues.edges)
      setPageInfo(res.repository.issues.pageInfo)
    })
    return () => {
      subscription.unsubscribe()
    }
  },[])

  return (
    <div className="dark linght container">
      <div className="row">
        {posts.map(item=>(
          <ShowCase key={item.node.id} info={item} />
        ))}
      </div>
    </div>
  )
}


export default Homes;