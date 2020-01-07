import React,{useEffect} from 'react';

import { 
    HashRouter as Router,
    Route, Switch, Link
  } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail/index';
import Labels from './pages/labels';
import Category from './pages/category';

import './App.css';

const App = (props: any) => {

  useEffect(()=>{
    const oi = "color:#FFF;line-height:22px;background:#D68FE9;padding:0 15px;margin-right:15px";
    const ois = "color:#000;line-height:22px;";
    console.log("%c寒露%cwww.jackeybiao.com", oi,ois);
  },[])
  return (
      <Router>
        <header>
          <nav className="detail-container">
            <ul>
              <li>
                <Link to="/">首页</Link>
              </li>
              <li>
                <Link to="/category">分类</Link>
              </li>
              <li>
                <Link to="/labels">标签</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="dark linght">
          <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post/:id" component={Detail} />
                <Route path="/labels" component={Labels} />
                <Route path="/category" component={Category} />
            </Switch>
          </main>
        </div>
      </Router>
  );
}

export default App;
