import "./productsection.css"
import  arrow  from "../../images/arrow2.png"
import syn1 from "../../images/syn1.png"
import syn2 from "../../images/syn2.png"
import syn3 from "../../images/syn3.png"
import syn4 from "../../images/syn4.png"
import syn5 from "../../images/syn5.png"
import syn6 from "../../images/syn6.png"
import syn7 from "../../images/syn7.png"



const ProductSection = () => {
  return (
    <div className="productSection" id="product">
        <div className="productSectionContainer">
            <div className="productTitle">
               <h1 className="productHeader">PO-28 robot</h1>
                <img src={arrow} alt="" className="productArrow" /> 
            </div>
            <div className="productImgs">
                <img src={syn1} alt="" className="productImg" />
                <ul className="productList">
                    <li>real 8-bit synthesizer engines </li>
                    <li>15 sounds + micro drum</li>
                    <li>live play + sequencer combo</li>
                    <li>128 pattern chaining</li>
                    <li>step multiplier</li>
                    <button className="productButton">View in Store</button>
                </ul>
            </div>
            <div className="productImgs">
                <img src={syn2} alt="" className="productImg" />
                <img src={syn3} alt="" className="productImg" />
            </div>
            <div className="productTitle">
               <h1 className="productHeader">PO-14 sub</h1>
                <img src={arrow} alt="" className="productArrow" /> 
            </div>
            <div className="productImgs">
                <img src={syn4} alt="" className="productImg" />
                <ul className="productList">
                    <li>multiple real synthesizer engines</li>
                    <li>15 sounds + micro drum</li>
                    <li>16 punch-in effects</li>
                    <li>16 punch-in bass oriented play styles</li>
                    <li>16 pattern chaining</li>
                    <button className="productButtonBlue">View in Store</button>
                </ul>
            </div>
            <div className="productImgs">
                <img src={syn2} alt="" className="productImg" />
                <img src={syn5} alt="" className="productImg" />
            </div>
            <div className="productTitle">
               <h1 className="productHeader">PO-24 office</h1>
                <img src={arrow} alt="" className="productArrow" /> 
            </div>
            <div className="productImgs">
                <img src={syn7} alt="" className="productImg" />
                <ul className="productList">
                    <li>sampled vintage hardware</li>
                    <li>solo control</li>
                    <li>128 pattern chaining</li>
                    <li>16 sounds</li>
                    <li>step multiplier</li>
                    <button className="productButtonYellow">View in Store</button>
                </ul>
            </div>
            <div className="productImgs">
                <img src={syn2} alt="" className="productImg" />
                <img src={syn6} alt="" className="productImg" />
            </div>
        </div>
    </div>
  )
}

export default ProductSection