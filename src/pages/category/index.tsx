import React, {useState,useEffect} from 'react';

import { Milestone } from '../../utils/types';

import { queryCategory } from '../../utils/service';

import cat1 from '../../assets/category/cat1.jpg';
import cat2 from '../../assets/category/cat2.jpg';
import cat3 from '../../assets/category/cat3.jpg';
import cat4 from '../../assets/category/cat4.jpg';
import cat5 from '../../assets/category/cat5.jpg';
import cat6 from '../../assets/category/cat6.jpg';


import './index.css';

const cats = [cat1,cat2,cat3,cat4,cat5,cat6];

interface CategoryProps {}

const Category = (props: CategoryProps) => {

  const [category, setCategory] = useState([] as Array<Milestone>);

  useEffect(()=>{
    const subscription = queryCategory().subscribe(res=>{
      setCategory(res.repository.milestones.edges)
    })
    return () => {
      subscription.unsubscribe()
    }
  },[])

  return (
    <div className="dark linght detail-container">
      <div className="category">
        {category.map((item,index)=>(
          <div className="content" key={item.node.id}>
            <img className="bg" src={cats[index+1]} alt={item.node.title} />
            <div className="mate">
              <div className="info">
                <img className="avatar" src={cats[index+1]} alt={item.node.title} />
                <span>{item.node.title}</span>
              </div>
              <p>{item.node.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) 
}

export default Category;
