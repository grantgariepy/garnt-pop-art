import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import "./herosection.css"

const HeroSection = () => {
  return (
    <div className="hero">
        <div className="heroContainer">
            <div className="heroText">A PORTABLE SYNTHESIZER THAT FITS IN YOUR POCKET. REALLY</div>
            <FontAwesomeIcon icon={faCompactDisc} className="heroImg" />
        </div>
        
    </div>
  )
}

export default HeroSection