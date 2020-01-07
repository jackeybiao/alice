import React, {useState,useEffect} from 'react';

import { Milestone, CatePost } from '../../utils/types';

import { queryCategory } from '../../utils/service';


import Loading from '../../components/loading';
import CateItem from './components/cateItem';
import PostItem from './components/postItem';

import './index.scss';

interface CategoryProps {}

const Category = (props: CategoryProps) => {

  const [milestonePosts,setMilestonePosts] = useState([] as Array<CatePost>);

  const [isSelect,setIsSelect] = useState(false);

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
      setLoading(false)
    }
  },[])

  const handleClick = (nodes:Array<CatePost>) => {
    if(nodes.length > 0) {
      setMilestonePosts(nodes);
      setIsSelect(true)
    }else{
      setIsSelect(false)
    } 
  }

  return (
    <div className="container">
      {loading?(<Loading />):(
        <>
            {category.map((item,index)=>(
              <CateItem key={item.id} index={index} item={item} getnodes={(nodes:Array<CatePost>)=>{handleClick(nodes)}} />
            ))}
            {isSelect?(
              <>
                {milestonePosts.map((item) =>(
                  <PostItem key={item.id} item={item} />
                ))}
              </>
            ):""}
        </>
      )}
    </div>
  )
}
export default Category;
