import s from './Footer.module.scss';

import logo from '@/assets/footer/logo-footer.svg'
import bigLogo from '@/assets/footer/big-picture-footer.svg'
import Socials from "@/components/ui/Socials/Socials.jsx";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.topFooter}>
        <div>
          <div>
            <img className={s.logo} src={logo} alt="logo"/>
          </div>
          <div className={s.footerText}>
            Design amazing digital experiences that create more happy in the world.
          </div>
          <ul className={s.footerLinks}>
            <li>
              <a className={s.footerLink} href="#">
                Overview
              </a>
            </li>
            <li>
              <a className={s.footerLink} href="#">
                Features
              </a>
            </li>
            <li>
              <a className={s.footerLink} href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className={s.footerLink} href="#">
                Careers
              </a>
            </li>
            <li>
              <a className={s.footerLink} href="#">
                Help
              </a>
            </li>
            <li>
              <a className={s.footerLink} href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <img className={s.bigLogo} src={bigLogo} alt="big logo"/>
      </div>
      <div className={s.bottomFooter}>
        <div>
          © 2027 ColibriConnect.io All Rights Reserved
        </div>
        {/*<Socials/>*/}
      </div>
    </footer>
  );
};

export default Footer;
