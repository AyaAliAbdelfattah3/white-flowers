import React from 'react'
import "./Section11.css";
// import { HashLink } from 'react-router-hash-link';


const Section11 = () => {
  return (
    <div className='container' >

      <>
        <div className='row' >

          <div className='hha'>
            <img src='website1\img39.jpg' />
          </div>
          <div className='hhb'>
            <img src="website1\img40.jpg" />

          </div>
          <div className='hhc'>
            <div >
              <img src="website1\img38.png" className='hhca' />

              <img src="website1\img41.png" className='hhcb' />


            </div>
            <div className='all_text' id='latest'>
              <h5>WHERE TO FIND US</h5>
              <h1>Visit Our Shop</h1>
              <div className='second'>
                <div >
                  <ul>
                    <li>Rossa Flowe Shop</li>
                    <li> 123 Main St</li>
                    <li> Anytown, USA</li>
                    <li>   123-456-7890</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li> 123 Main St</li>
                    <li> Anytown, USA</li>
                    <li>   123-456-7890</li>
                  </ul>
                </div> 
              </div>
              <div className='third'>
                 <div>
                  <p>Mon-sat:7.00am-8.00pm</p>
                  <p>Sunday:8.00am-6.00pm</p>
                 </div>
                 <div>
                 <button>VIEW MAP</button>
                 </div>
              </div>
             









            </div>
          </div>



        </div>



      </>
    </div>
  )
}

export default Section11