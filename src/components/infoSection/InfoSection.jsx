import './infosection.css'
import arrow from '../../images/Arrow.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from '@fortawesome/free-solid-svg-icons'

const InfoSection = () => {
  return (
    <div className="infoSection">
        
        <div className="infoSectionContainer">
            
            <div className="leftInfo">
                <img src={arrow} alt="" className="infoArrow" />
                <button className="infoButton">BUY NOW</button>
                <span className="infoText">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
            </div>
            
            <div className="rightInfo">
                <div className="newsLeft">
                    <div className="newsLeftHeader">
                        <h3 className='newsLeftHeaderText'>NEWS</h3>
                    </div>
                    <div className="newsLeftBody">
                        <div className="time">
                          <FontAwesomeIcon icon={faClock} className="clockImg" />
                            <p>06/21/22</p>  
                        </div>
                        <div className='newsLeftBodyText'>
                            <p>RELEASES IN 2022</p>
                            <p>BUY NOW</p>
                            <p>learn more</p>
                        </div>
                    </div>
                </div>
                <div className="newsRight">
                    <div className="newsRightHeader">
                        <h3 className='newsRightHeaderText'>NEWS</h3>
                    </div>
                    <div className="newsRightBody">
                        <div className="time">
                          <FontAwesomeIcon icon={faClock} className="clockImg" />
                            <p>06/21/22</p>  
                        </div>
                        <div className='newsRightBodyText'>
                            <p>RELEASES IN 2022</p>
                            <p>BUY NOW</p>
                            <p>learn more</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoSection