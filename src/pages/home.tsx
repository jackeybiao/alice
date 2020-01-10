import React, {useState,useEffect} from 'react';
import ShowCase from '../components/showCase/index';

import { queryPosts } from '../utils/service';


import config from '../config';

import { Post, PageInfo } from '../utils/types';
import Loading from '../components/loading';


const setPage = (action="",cursor:string) => {
  let result = "";
  switch (action) {
    case "before":
      result = `last:${config.pageSize} ${action}:"${cursor}"`;
      break;
    case "after":
      result = `first:${config.pageSize} ${action}:"${cursor}"`;
      break;
    default:
      result = `first:${config.pageSize}`;
      break;
  }
  return result;
}


const Homes = () => {
  const [loading,setLoading] = useState(false)

  const [posts, setPosts] = useState([] as Array<Post>);
  const [pageInfo,setPageInfo] = useState({} as PageInfo);

  //分页
  const [action,setAction] = useState("");
  const [cursor,setCursor] = useState("");

  useEffect(()=>{
    const params = `
      orderBy: {
        field: CREATED_AT
        direction: DESC
      }
      states: OPEN
      ${setPage(action,cursor)}
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
  },[action, cursor])

  const handlePrePage = (cursor: string) => {
    setAction("before");
    setCursor(cursor);
  }
  const handleNextPage = (cursor: string) => {
    setAction("after");
    setCursor(cursor);
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
