import React, {useState,useEffect} from 'react';
import ShowCase from '../components/showCase/index';

import { queryPosts } from '../utils/service';

import { Post } from '../utils/types';
import Loading from '../components/loading';

const Homes = () => {
  const [loading,setLoading] = useState(false)

  const [posts, setPosts] = useState([] as Array<Post>);
  // const [pageInfo,setPageInfo] = useState({} as PageInfo);

  useEffect(()=>{
    const params = {
      states: "OPEN",
      first:10
    }
    setLoading(true);
    const subscription = queryPosts(params).subscribe(res => {
      setPosts(res.repository.issues.nodes)
      // setPageInfo(res.repository.issues.pageInfo)
      setLoading(false)
    })
    return () => {
      subscription.unsubscribe()
      setLoading(false)
    }
  },[])

  return (
    <div className="dark linght container">
      <div className="row">
        {loading?(<Loading />):""}
        {posts.map(item=>(
          <ShowCase key={item.id} info={item} />
        ))}
      </div>
    </div>
  )
}


export default Homes;