import React,{useEffect} from 'react';

import { 
    HashRouter as Router,
    Route, Switch,Redirect
  } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail/index';
import Labels from './pages/labels';
import Category from './pages/category';

import Header from './pages/layout/header';

const App = () => {
  useEffect(()=> {
    const oi = "color:#FFF;line-height:22px;background:#D68FE9;padding:0 15px;margin-right:15px";
    const ois = "color:#000;line-height:22px;";
    console.log("%c寒露%cwww.jackeybiao.com", oi,ois);
  },[])

  return (
      <Router>
        <Header />
        <main>
          <Switch>
              <Redirect exact from="/" to="/index" /> 
              <Route path="/index" component={Home} />
              <Route path="/post/:id" component={Detail} />
              <Route path="/labels" component={Labels} />
              <Route path="/category" component={Category} />
          </Switch>
        </main>
      </Router>
  );
}

export default App;
