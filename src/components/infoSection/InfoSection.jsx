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
                <p className="infoText">live synthesizer and sequencer, with parameter locks, 
                glide control and punch-in effects. pocket operators are small, ultra portable music devices. 
                each model can be used individually, together or with other compatible gear.</p>
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