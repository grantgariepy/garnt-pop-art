import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">GRANT CO.</span>
            <div className="navItems">
                <button className="navButton">HOME</button>
                <button className="navButton">PRODUCTS</button>
                <button className="navButton">PEOPLE</button>
                <button className="navButton">CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar