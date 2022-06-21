import React, {useContext, useEffect, useState} from 'react';
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import PortfolioContext from "../../context/context";
import Mobilemenu from "../MobieMenu/Mobilemenu";

function Header() {
    const { header } = useContext(PortfolioContext);
    const { title, menu, click } = header;


    const [scrollPosition, setScrollPosition] = useState(0);
    const [resize, setResize] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleResize = () => {
        setResize(window.innerWidth);
    };

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    useEffect(()=>{
        console.log(toggle);
    },[toggle]);

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
      <div id={scrollPosition < 100 ? "header" : "change-header"}>
        <nav className="header-wrapper">
          <Link className="header-wrapper-title" to="hero" smooth duration={1000}>
            { title || 'YDY portfolio' }
          </Link>
          {resize > 577 ? (
            <ul className="header-wrapper_ul">
              <div>
                {menu && menu.map((item, i) => (
                  <li className="header-wrapper_li">
                    <Link to={click[i] || '#!'} smooth duration={1000}>
                      {item}
                    </Link>
                  </li>
                    ))}
              </div>
            </ul>
            ) : (
              <div>
                <AiOutlineMenu className="mobile-icon" onClick={handleToggle} />
                {toggle ? <Mobilemenu /> : null}
              </div>
              )}
        </nav>
      </div>
    );
}

export default Header;
