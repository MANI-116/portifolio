import HomeInfo from "../components/Home/HomeInfo";
import HomeProfileLinks from "../components/Home/HomeProfileLinks";
import HomeImage from "../components/Home/HomeImage";
import HomeScroll from "../components/Home/HomeScroll";
const HomePage = () => {
  return( 
  
  <section className="home section" id="home">
    
  <div className="home__container container grid">
    <div className="home__content grid">
       <HomeProfileLinks />
        <HomeImage />
        <HomeInfo />
        
    </div>
    <HomeScroll/>
    </div>    
    </section>
    );
};

export default HomePage;


