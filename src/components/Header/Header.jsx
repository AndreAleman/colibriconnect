import s from './Header.module.scss'
import logo from '@/assets/logo.svg'
import menuBtn from '@/assets/menu.svg'
import {useState} from "react";

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="logo"/>

      <ul className={s.menu}>
        <li className={s.menuActive}>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className={s.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(true)}><img src={menuBtn}
                                                                                         alt="menu button"/></button>


      {
        isMobileMenuOpen && <div className={s.mobileMenu}>
          <button onClick={()=>setIsMobileMenuOpen(false)}>
            <svg className={s.closeBtn} xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
          </button>

          <ul className={s.mobileMenuList}>
            <li className={s.menuActive}>
              <a onClick={()=>setIsMobileMenuOpen(false)} href="#home">Home</a>
            </li>
            <li>
              <a onClick={()=>setIsMobileMenuOpen(false)} href="#services">Services</a>
            </li>
            <li>
              <a onClick={()=>setIsMobileMenuOpen(false)} href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a onClick={()=>setIsMobileMenuOpen(false)} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      }
    </header>
  );
};

export default Header;
