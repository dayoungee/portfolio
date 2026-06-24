import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import PortfolioContext from '../../context/context';
import Mobilemenu from '../MobieMenu/Mobilemenu';

function Header() {
  const { header } = useContext(PortfolioContext);
  const { menu, click } = header;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape' || window.innerWidth > 600) {
        setToggle(false);
      }
    };

    document.body.style.overflow = toggle ? 'hidden' : '';
    window.addEventListener('keydown', closeMenu);
    window.addEventListener('resize', closeMenu);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeMenu);
      window.removeEventListener('resize', closeMenu);
    };
  }, [toggle]);

  return (
    <header className={scrollPosition > 20 ? 'site-header site-header--scrolled' : 'site-header'}>
      <nav className="header-wrapper">
        <Link className="header-wrapper-title" to="hero" smooth duration={800}>
          <span>YDY</span>
          <small>PORTFOLIO</small>
        </Link>
        <ul className="header-wrapper__menu">
          {menu && menu.map((item, i) => (
            <li key={item}>
              <Link to={click[i] || '#!'} smooth duration={800}>
                {item.replace(' ME', '')}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={toggle ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={toggle}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        {toggle ? <Mobilemenu close={() => setToggle(false)} /> : null}
      </nav>
    </header>
  );
}

export default Header;
