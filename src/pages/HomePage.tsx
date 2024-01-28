import HomeInfo from "../components/Home/HomeInfo";
import HomeProfileLinks from "../components/Home/HomeProfileLinks";
import HomeImage from "../components/Home/HomeImage";
import HomeScroll from "../components/Home/HomeScroll";
const HomePage = () => {
  return( <>
  
  <section className="home section">
    
  <div className="home-container container grid">

    <div className="home-content grid">
       <HomeProfileLinks />
        <HomeImage />
        <HomeInfo />
        <HomeScroll/>

    </div>
       
        
    </div>
        
    </section>
    
        
 

  </>);
};

export default HomePage;


