import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";

function Header() {
    const { header } = useContext(PortfolioContext);
    const { title, menu, click } = header;

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return(
      <div id={scrollPosition < 100 ? "header" : "change-header"}>
        <nav className="header-wrapper">
          <Link className="header-wrapper-title" to="hero" smooth duration={1000}>
            { title || 'YDY portfolio' }
          </Link>

          <ul className="header-wrapper_ul">
            <div>
              {menu && menu.map( (item, i) => (
                <li className="header-wrapper_li">
                  <Link to={click[i] || '#!'} smooth duration={1000}>
                    {item}
                  </Link>
                </li>
                    ))}
            </div>
          </ul>

        </nav>
      </div>
    );
}

export default Header;
