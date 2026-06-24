import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Mobilemenu = ({ close }) => {
  const { header } = useContext(PortfolioContext);
  const { menu, click } = header;

  return (
    <>
      <button
        className="mobile-menu-backdrop"
        type="button"
        aria-label="메뉴 닫기"
        onClick={close}
      />
      <div className="mobile-menu">
        <ul className="mobile-menu-box">
          {menu && menu.map((item, i) => (
            <li className="mobile-menu-li" key={item}>
              <Link to={click[i] || '#!'} smooth duration={800} onClick={close}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Mobilemenu.propTypes = {
  close: PropTypes.func.isRequired,
};

export default Mobilemenu;
