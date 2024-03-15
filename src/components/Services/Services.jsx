import s from './Services.module.scss'
import GreenLabel from "@/components/ui/GreenLabel/GreenLabel.jsx";
import Button from "@/components/ui/Button/Button.jsx";
import serviceImg1 from '@/assets/services/image1.png'
import serviceImg2 from '@/assets/services/image2.png'
import serviceImg3 from '@/assets/services/image3.png'

const Services = () => {
  return (
    <section className={s.services}>
      <GreenLabel>About Us</GreenLabel>
      <h2 className={s.sectionTitle} id="services">Services We Offer</h2>
      <ul className={s.servicesList}>
        <li className={s.serviceCard}>
          <h3 className={s.cardTitle}>Web Design</h3>
          <div className={s.cardContent}>
            <img className={s.image} src={serviceImg1} alt="service image"/>
            <p className={s.cardText}>Transform your digital presence with our bespoke web design services, where
              creativity meets functionality. Our expert team combines modern aesthetics with user-friendly interfaces,
              specifically tailored to elevate your brand in the manufacturing industry.</p>
          </div>
          <div className={s.btnWrapper}>
          <Button color='blue' href="#contact">
          Get Started
        </Button>
          </div>
        </li>
        <li className={s.serviceCard}>
          <h3 className={s.cardTitle}>Virtual Agents</h3>
          <div className={s.cardContent}>
            <img className={s.image} src={serviceImg2} alt="service image"/>
            <p className={s.cardText}>
              Enhance customer interactions with our sophisticated virtual agents, designed to offer seamless, 24/7
              support. Leveraging cutting-edge technology, our agents provide efficient and personalized assistance,
              ensuring exceptional service tailored to the manufacturing sector's needs
            </p>
          </div>
          <div className={s.btnWrapper}>
          <Button color='blue' href="#contact">
          Get Started
        </Button>
          </div>
        </li>
        <li className={s.serviceCard}>
          <h3 className={s.cardTitle}>Contact Center Services</h3>
          <div className={s.cardContent}>
            <img className={s.image} src={serviceImg3} alt="service image"/>
            <p className={s.cardText}>
              Elevate your customer experience with our comprehensive contact center services, tailored to meet the
              unique demands of the manufacturing industry. Our skilled team, based in South America and the US,
              delivers exceptional support, ensuring timely and effective communication with your clients.
            </p>
          </div>
          <div className={s.btnWrapper}>
          <Button color='blue' href="#contact">
          Get Started
        </Button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Services;
