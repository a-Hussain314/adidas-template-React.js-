import React from 'react';
import {Link} from 'react-router-dom';

import './C2.scss';



//dynamic images for cloth 
// [beta version] ==> in real application these images would be dynamically loaded fron an Actual endpoint 

import pic105 from '../../images/105.jpg';
import pic106 from '../../images/106.jpg';
import pic107 from '../../images/107.jpg';
import pic108 from '../../images/108.jpg';


const C2 =()=> {
        return (
            <div className="c2 bg-black text-center position-relative over-hidden">

                <h1 className="text-uppercase ">
                    <span className="resp-h1 mx-1 py-1 px-2 bkg-white fw-600"> browse by </span>
                    <span className="resp-h1 mx-1 text-white fw-800"> category </span>
                </h1> 

                <ul className="list-unstyled my-4">
                    <li className="c2-li text-capitalize text-white d-inline-block lead pointer mx-2 mx-sm-5 pb-0 pb-sm-2 fw-200 opacity-66">men</li>
                    <li className="c2-li text-capitalize text-white d-inline-block lead pointer mx-2 mx-sm-5 pb-0 pb-sm-2 fw-200 opacity-66">women</li>
                    <li className="c2-li text-capitalize text-white d-inline-block lead pointer mx-2 mx-sm-5 pb-0 pb-sm-2 fw-200 opacity-66">kids</li>
                </ul>




                <div className="text-center px-1 px-sm-2 px-md-5">

                    <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4">
                        <img alt="shoes" src={pic105}  className="w-100 "/>
                        <span className="position-absolute text-capitalize w-fa">shoes</span>
                        <Link to="/" className="position-absolute text-uppercase">explore</Link>
                    </div>

                    <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4">
                        <img alt="clothes" src={pic106}   className="w-100 "/>
                        <span className="position-absolute text-capitalize w-fa">clothes</span>
                        <Link to="/" className="position-absolute text-uppercase">explore</Link>
                    </div>

                    <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4">
                         <img alt="accessories" src={pic107}  className="w-100 "/>
                         <span className="position-absolute text-capitalize w-fa">accessories</span>
                         <Link to="/" className="position-absolute text-uppercase">explore</Link>
                    </div>

                    <div className="position-relative d-inline-block align-bottom w-17 mb-2 mb-md-0 img-con  mx-1 mx-md-4 last">
                        <img alt="sport bra" src={pic108}  className="w-100 " />
                        <span className="position-absolute text-capitalize w-fa">sports bras</span>
                        <Link to="/" className="position-absolute text-uppercase">explore</Link>
                    </div>
             
                </div>
                <img alt="section border" src="images/79.png"  className="clouds1 rc"/>
            </div>
        )
    }

export default C2;


