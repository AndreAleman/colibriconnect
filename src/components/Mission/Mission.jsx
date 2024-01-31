import s from './Mission.module.scss'
import GreenLabel from "@/components/ui/GreenLabel/GreenLabel.jsx";

const Mission = () => {
  return (
    <section className={s.mission}>
      <GreenLabel className='align-left'>
        About Us
      </GreenLabel>
      <div className={s.description}>
        <div className={s.header}>
          Our mission is to deliver exceptional tech and outsourcing solutions to our clients.
        </div>
        <div className={s.text}>
          <p className={s.missionText}>
            We are an international outsourcing agency offering web design, virtual agents, contact center services using South American and US based employees.
            <br/><br/>
             We provide our clients with the tools and resources they need to grow and succeed in their respective industries
          with an emphasis on post project customer support. 
          </p>
          <p className={s.missionText}>
     
          </p>
        </div>
      </div>
      {/*<ul className={s.numberList}>
        <li className={s.numberListItem}>
          <div className={s.number}>400+</div>
          <div className={s.numberLabel}>Projects completed</div>
        </li>
        <li className={s.numberListItem}>
          <div className={s.number}>600%</div>
          <div className={s.numberLabel}>Return on investment</div>
        </li>
        <li className={s.numberListItem}>
          <div className={s.number}>10k</div>
          <div className={s.numberLabel}>Global downloads</div>
        </li>
      </ul>/*/}

    </section>
  );
};

export default Mission;
