import React from 'react';
import {Link} from 'react-router-dom';
import './C3.scss';


//dynamic images for cloth 
// [beta version] ==> these images could be dynamically fetched from an endpoint 

import pic104 from '../../images/104.jpg';
import pic103 from '../../images/103.jpg';
import pic102 from '../../images/102.jpg';


const C3 = () => {    
        return (
            <div className="c3 text-center bkg-white position-relative over-hidden">
                <h1 className="text-uppercase mb-5">
                    <span className="c2-h1 mx-1 py-1 px-2 bg-black text-white fw-600"> who are you</span>
                    <span className="c2-h1 mx-1 fw-800">shopping for? </span>
                </h1> 
                
                <div className="px-lg-5 w-85 mx-auto  d-flex justify-content-center">

                    <div className="position-relative  my-4 my-sm-0 img-con2 mx-1 mx-sm-3">
                        <img alt="shoes" src={pic104}  className="w-100 "/>
                        <Link to="/" className="position-absolute text-uppercase">women</Link>
                        <span className="position-absolute text-uppercase w-fa">all on for #mygirl</span>
                    </div>

                    <div className="position-relative  my-4 my-sm-0 img-con2 mx-1 mx-sm-3">
                        <img alt="clothes" src={pic103}  className="w-100 "/>
                        <Link to="/" className="position-absolute text-uppercase">men</Link>
                        <span className="position-absolute text-uppercase w-fa">yes my #runway</span>
                    </div>

                    <div className="position-relative  my-4 my-sm-0 img-con2 mx-1 mx-sm-3">
                         <img alt="accessories" src={pic102} className="w-100 "/>
                         <Link to="/" className="position-absolute text-uppercase">kids</Link>
                         <span className="position-absolute text-uppercase w-fa">all on for #mygirl</span>
                    </div>
                </div>
            </div>
        )
    }

export default C3;


