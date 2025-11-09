import { UilMouseAlt } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'
const HomeScroll = ()=>{


    return(
        <div className="home-scroll">
            <a href="#about" className="home-scroll-button button--flex">
                <UilMouseAlt className="home-scroll-mouse" />
                <span className="home-scroll-name">Scroll Down</span>
                <UilArrowDown className="home-scroll-arrow"/>
            </a>

        </div>
    )
}

export default HomeScroll;