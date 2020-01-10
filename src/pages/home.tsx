import React, {useState,useEffect} from 'react';
import ShowCase from '../components/showCase/index';

import { queryPosts } from '../utils/service';

import { Post, PageInfo } from '../utils/types';
import Loading from '../components/loading';

const Homes = () => {
  const [loading,setLoading] = useState(false)

  const [posts, setPosts] = useState([] as Array<Post>);
  const [pageInfo,setPageInfo] = useState({} as PageInfo);

  useEffect(()=>{
    const params = `
      orderBy: {
        field: CREATED_AT
        direction: DESC
      }
      states: OPEN
      first:10
    `
    setLoading(true);
    const subscription = queryPosts(params).subscribe(res => {
      setPosts(res.repository.issues.nodes)
      setPageInfo(res.repository.issues.pageInfo)
      setLoading(false)
    })
    return () => {
      subscription.unsubscribe()
      setLoading(false)
    }
  },[])

  const handlePrePage = (before: string) => {
    const params = `
      orderBy: {
        field: CREATED_AT
        direction: DESC
      }
      states: OPEN
      last:10
      before:"${before}"
    `
    setLoading(true);
    queryPosts(params).subscribe(res => {
      setPosts(res.repository.issues.nodes)
      setPageInfo(res.repository.issues.pageInfo)
      setLoading(false)
    })

  }
  const handleNextPage = (after: string) => {
    const params = `
      orderBy: {
        field: CREATED_AT
        direction: DESC
      }
      states: OPEN
      first:10
      after:"${after}"
    `
    setLoading(true);
    queryPosts(params).subscribe(res => {
      setPosts(res.repository.issues.nodes)
      setPageInfo(res.repository.issues.pageInfo)
      setLoading(false)
    })
  }

  return (
    <div className="grid-container">
      {loading?(<Loading />):(
        <>
          {posts.map(item=>(
            <ShowCase key={item.id} info={item} />
          ))}

          {(pageInfo.hasPreviousPage || pageInfo.hasNextPage)?(
            <>
              <div className="pageInfo">
                {pageInfo.hasPreviousPage?(<div className="page-pre" onClick={()=>{handlePrePage(pageInfo.startCursor)}}>上一页</div>):""}
                {pageInfo.hasNextPage?(<div className="page-next" onClick={()=>{handleNextPage(pageInfo.endCursor)}}>下一页</div>):""}
              </div>
            </>
          ):""}
        </>
      )}
      
    </div>
  )
}

export default Homes;
