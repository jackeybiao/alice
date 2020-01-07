import React, {useState,useEffect} from 'react';

import { Link } from "react-router-dom";
import { Milestone, CatePost } from '../../utils/types';

import { queryCategory } from '../../utils/service';

import cat1 from '../../assets/images/cat/cat1.jpg';
import cat2 from '../../assets/images/cat/cat2.jpg';
import cat3 from '../../assets/images/cat/cat3.jpg';
import cat4 from '../../assets/images/cat/cat4.jpg';
import cat5 from '../../assets/images/cat/cat5.jpg';
import cat6 from '../../assets/images/cat/cat6.jpg';

import './index.css';
import Loading from '../../components/loading';

const cats = [cat1,cat2,cat3,cat4,cat5,cat6];

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

  const handleClick = (item:Milestone) => {
    if(item && item.issues && item.issues.nodes && item.issues.nodes.length > 0) {
      setMilestonePosts(item.issues.nodes);
      setIsSelect(true)
    }else{
      setIsSelect(false)
    } 
  }

  return (
    <div className="dark linght detail-container">
      {loading?(<Loading />):(
        <>
          <div className="category">
            {category.map((item,index)=>(
              <div onClick={()=>{handleClick(item)}} className="content" key={item.id}>
                <img className="bg" src={cats[index]} alt={item.title} />
                <div className="mate">
                  <div className="info">
                    <img className="avatar" src={cats[index]} alt={item.title} />
                    <span>{item.title} （ {item.issues?.totalCount} ）</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {isSelect?(
            <div className="sub-container">
            {milestonePosts.map((item) =>(
              <PostItem key={item.id} item={item} />
            ))}
          </div>
          ):""}
          
        </>
      )}
      
    </div>
  ) 
}


interface PostItem {
  item: CatePost
}

export function PostItem(props:PostItem) {
  const { item } = props
  return (
    <div className="post-item col-md-6">
      <Link to={`/post/${item.number}`}>
        <h3 className="title">{item.title}</h3>
        <div className="meta">
          <span>{item.createdAt}</span>
          {item.labels.nodes.map(label=>(
            <span key={label.id}>
              {label.name}
            </span>
          ))}
          <span>{item.milestone.title}</span>
        </div>
      </Link>
    </div>
  )
}

export default Category;
