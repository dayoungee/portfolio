import React, {useContext} from 'react';
import {Link} from "react-scroll";
import PortfolioContext from "../../context/context";

const Mobilemenu = () => {
    const { header } = useContext(PortfolioContext);
    const { menu, click } = header;
    return(
      <div className="mobile-menu">
        <ul className="mobile-menu-box">
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