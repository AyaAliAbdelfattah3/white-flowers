import React from 'react'
import "./Navbar.css";
// import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

  return (
    <div>
      <>
        <nav>
          <div className='navv'>
            <img src='./website1\WhatsApp Image 2024-06-06 at 02.46.14_5488d0c5.jpg' alt='' />
            <button className='btn1'>Buy Now</button>

          </div>

          <div className='divv'>
            <p>Save $10 on Mother's Day Flower with flex Delivery <span>Order now </span></p>

          </div>


          <div className="all-nav">
            <div className="left_nav">
              {/* <i>9</i> */}
              <p>search</p>
            </div>
            <img src="website1\img02.svg" alt="" />
            <div className="right-nav">
              <p>my Account</p>
              {/* <i>5</i>
              <i>7</i> */}
            </div>

          </div>
          <div className="all_links">
                <a href="#" className="first_l">HOME</a>
                <a href="#">SHOP</a>
                <a href="#">PAGES</a>
                <a href="#">BLOG</a>
                <a href="Section11">CONTACT</a>
                {/* <HashLink to="/#latest">CONTACT</HashLink> */}
          </div>
        </nav>

        










      </>








    </div>
  )
}

export default Navbar