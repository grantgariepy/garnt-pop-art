import "./navbar.css"
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <Link to ="hero" offset={-100}  spy={true} smooth={true} duration={500}><span className="logo">GARNT CO.</span></Link>
            <div className="navItems">
                <Link activeClass="active" to="hero" offset={-100} spy={true} smooth={true} duration={500}><button  className="navButton">HOME</button></Link>
                <Link activeClass="active" to="product" spy={true} smooth={true} duration={500}><button  className="navButton">PRODUCTS</button></Link>
                <Link activeClass="active" to="people" spy={true} smooth={true} duration={500}><button  className="navButton">PEOPLE</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar