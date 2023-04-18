import React, {useState, useContext, useEffect} from 'react';
import {Link} from "react-scroll";
import PortfolioContext from "../../context/context";

const Mobilemenu = () => {
    const { header } = useContext(PortfolioContext);
    const { menu, click } = header;

    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(()=>{
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    });

    return(
      <div className="mobile-menu">
        <ul className={scrollPosition < 100 ? "change-mobile-menu-box" : "mobile-menu-box"}>
          <div>
            {menu && menu.map((item, i) => (
              <li className="mobile-menu-li">
                <Link to={click[i] || '#!'} smooth duration={1000}>
                  {item}
                </Link>
              </li>
                ))}
          </div>
        </ul>
      </div>
    )
}

export default Mobilemenu;