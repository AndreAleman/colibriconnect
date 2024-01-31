import s from './Portfolio.module.scss'
import GreenLabel from "@/components/ui/GreenLabel/GreenLabel.jsx";

import cn from 'classnames'
import Button from "@/components/ui/Button/Button.jsx";

const Portfolio = () => {
  return (
    <section className={s.portfolio}>
      <GreenLabel>Our Work</GreenLabel>
      <h2 className={s.title} id="portfolio">Portfolio</h2>
      <ul className={s.portfolioList}>
        <li className={cn(s.portfolioItem, s.leftSideItem)}>
          <img className={s.image} src="portfolio/proj1-2.png" alt="image of project #1"/>
          <div className={s.cardContent}>
            <h3 className={s.cardTitle + ' ' + s.mt}>Spazzio Brasil</h3>
            <p className={s.cardText}>
            For Spazzio Brasil's website project, we focused on encapsulating the brand's essence of luxury and refinement. 
            <br/><br/> 
            The website design mirrors the elegance of Spazzio Brasil's high-tech spa and bathtub solutions, presenting a narrative of opulence and advanced technology. High-resolution visuals and a sophisticated color scheme highlight the products' luxurious appeal and innovative features. 
            <br/><br/> 
            The user experience is curated to reflect the brand's high standards, ensuring that each visitor not only understands the product range but also experiences the exclusivity and prestige associated with Spazzio Brasil.
            </p>
            <Button color='green' href="ziobrasil.com.br/" target="_blank" rel="noreferrer">View Project</Button>
          </div>
        </li>

        {/*card #2*/}

        <li className={cn(s.portfolioItem)}>
          <img className={s.image} src="portfolio/proj2-1.png" alt=""/>
          <div className={s.cardContent}>
            <h3 className={s.cardTitle}>Smartz</h3>
            <p className={s.cardText}>
            We designed a platform that showcases the brand's advanced home automation products with a focus on elegance and technological prowess. 
            The layout is sleek and intuitive, emphasizing ease of navigation and user engagement.<br/><br/> 
            High-quality images and detailed product descriptions highlight the functionality and sophistication of Smartz's offerings. 
            Interactive features and a streamlined shopping experience are central to the design, reflecting Smartz's commitment to innovation and modern living solutions.
            </p>
            <Button color='green' href="https://smartzstore.com.br/" target="_blank" rel="noreferrer">View Project</Button>
          </div>
        </li>

        {/*card #3*/}
        <li className={cn(s.portfolioItem, s.leftSideItem)}>
          <img className={s.image} src="portfolio/proj3-1.png" alt="image of project #3"/>
          <div className={s.cardContent}>
            <h3 className={s.cardTitle}>Inboard.Io</h3>
            <p className={s.cardText}>
            For the Inboard.io website project, we designed a platform that reflects the tool's robust functionality in task, project, and team management. 
            <br/><br/> 
            The website's layout is clean and professional, facilitating easy navigation and highlighting Inboard's key features like custom fields and efficient communication flows. 
            <br/><br/> 
            The design focuses on user engagement, emphasizing the tool’s ability to streamline workflows and enhance team collaboration. Our aim was to create a digital space that not only presents Inboard’s capabilities but also demonstrates its impact on improving organizational productivity.
            </p>
            <Button color='green' href="https://inboard.io/" target="_blank" rel="noreferrer">View Project</Button>
          </div>
        </li>

        {/*
        <li className={cn(s.portfolioItem)}>
          <img className={s.image} src="portfolio/proj-4.png" alt="image of project #4"/>
          <div className={s.cardContent}>
            <h3 className={s.cardTitle + ' ' + s.mt  }>Project nr 4 - Title</h3>
            <p className={s.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quam viverra orci sagittis eu volutpat odio.
            </p>
            <Button color='green' href="#">View Project</Button>
          </div>
        </li>

        
        <li className={cn(s.portfolioItem, s.leftSideItem)}>
          <img className={s.image} src="portfolio/proj-5.png" alt="image of project #3"/>
          <div className={s.cardContent}>
            <h3 className={s.cardTitle}>Project nr 5 - Title</h3>
            <p className={s.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Quam viverra orci sagittis eu volutpat odio.
            </p>
            <Button color='green' href="#">View Project</Button>
          </div>
        </li>*/}
      </ul>
    </section>
  );
};

export default Portfolio;
