import React, {useState,useEffect} from 'react';

import { Milestone, CatePost } from '../../utils/types';

import { queryCategory } from '../../utils/service';


import Loading from '../../components/loading';
import CateItem from './components/cateItem';
import PostItem from './components/postItem';

import './index.scss';


const Category = () => {

  const [milestonePosts,setMilestonePosts] = useState([] as Array<CatePost>);

  const [isSelected,setIsSelected] = useState(false);

  const [loading,setLoading] = useState(false);

  const [category, setCategory] = useState([] as Array<Milestone>);

  useEffect(()=>{
    setLoading(true)
    const subscription = queryCategory().subscribe(res=>{
      setCategory(res.repository.milestones.nodes)
      setLoading(false)
    })
    return () => {
      subscription.unsubscribe()
    }
  },[])

  const handleClick = (nodes:Array<CatePost>) => {
    if(nodes.length > 0) {
      setMilestonePosts(nodes);
      setIsSelected(true)
    }else{
      setIsSelected(false)
    } 
  }

  return (
    <div className="container">
      {loading?(<Loading />):(
        <>
            {isSelected?(
              <>
                <div className="cate-title">分类：<span onClick={()=>{setIsSelected(false)}}>{milestonePosts[0].milestone.title}</span></div>
                {milestonePosts.map((item) =>(
                  <PostItem key={item.id} item={item} />
                ))}
              </>
            ):(
              <>
                {category.map((item,index)=>(
                  <CateItem key={item.id} index={index} item={item} getnodes={(nodes:Array<CatePost>)=>{handleClick(nodes)}} />
                ))}
              </>
            )}
        </>
      )}
    </div>
  )
}
export default Category;
