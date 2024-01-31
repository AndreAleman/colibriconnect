import Header from "../components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Mission from "@/components/Mission/Mission.jsx";
import Services from "@/components/Services/Services.jsx";
import Portfolio from "@/components/Portfolio/Portfolio.jsx";
import Contacts from "@/components/Contacts/Contacts.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Header/>
        <Hero/>
        <Mission/>
        <Services/>
        <Portfolio/>
        <Contacts/>
      </div>
      <Footer/>
    </>
  )
}

export default HomePage;
