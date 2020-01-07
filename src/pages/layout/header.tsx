import React from "react";
import { Link } from 'react-router-dom';

import "./index.scss";

const Header = () => {
  return (
    <header>
      <nav>
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
  )
}

export default Header;