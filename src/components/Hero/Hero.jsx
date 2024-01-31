import s from './Hero.module.scss';
import Button from "@/components/ui/Button/Button.jsx";

const Hero = () => {
  return (
    <section className={s.hero}>
      <h1 className={s.mainTitle} id="home">
        <span className={s.highlight}>Colibri Connect</span>
        : Your Bridge to Exceptional Outsourcing Solutions</h1>
      <p className={s.heroText}>
        Expert Web Design, Virtual Agent Services, and Contact Center Excellence with a Blend of South American and US
        Expertise. Tailored for the Manufacturing Sector.
      </p>
      <div className={s.buttonWrapper}>
        <Button color='blue' href="#contact">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;