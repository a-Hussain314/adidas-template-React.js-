import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './C5.scss';


// dynamic images for stores 
// [beta version] ==> in real application these images would be dynamically loaded fron an Actual endpoint 

import pics1 from '../../images/s1.jpg';
import pics2 from '../../images/s2.jpg';
import pics3 from '../../images/s3.jpg';


class C5 extends Component {
    state = {
        pics:[[pics1, "madinaty"], [pics2, "city star"], [pics3, "arab mall"]],
        responsive:{
            0: {
                items: 1,
                loop:true,
                dots:false,
                nav:true,
                margin:40,
                center:true
            },
            576: {
                items: 2,
                loop:true,
                dots:false,
                nav:false,
                margin:40,
                center:true
            },
            767: {
                items: 4,
                loop:true,
                dots:false,
                nav:false,
                margin:40,
                center:true
            },
            991: {
                items: 4,
                loop:true,
                dots:false,
                nav:false,
                margin:40,
                center:true
            },
            1199: {
                items: 4,
                loop:true,
                dots:false,
                nav:false,
                margin:40,
                center:true
            }
        }
    }

    render() {    
        return (
            <>
                <div  className="c5 py-5 position-relative bg-black">
                    <img alt="section border" src="images/80.png"  className="clouds2"/>
                    <div className="my-0 py-0 my-sm-5 py-sm-5">.</div>
                    <img alt="360 degree icon" src="images/360w.png" className="position-absolute icon-360"/>
                    <h1 className="text-uppercase ml-0 ml-sm-5 mb-0 mb-sm-5 pl-5">
                        <span className="mx-1 py-1 px-2 bkg-white fw-600"> real shopping</span>
                        <span className="d-block m-2 bg-black text-white fw-800">experience </span>
                    </h1> 
                    <OwlCarousel className="owl-theme bg-black mt-3 mb-5"   responsive={this.state.responsive}>
                        {this.state.pics.map((p,index)=>(
                            <div key={index}>
                                <div className="item position-relative over-hidden text-left pt-5 slider-item-hover2">
                                    <img alt="women clothes" src={p[0]}  className="w-100 mb-4"/>
                                    <span className="location-span">{p[1]}</span>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                    <div className=" px-sm-5 py-sm-5 text-left">
                        <hr style={{border:"0.75px solid grey"}} className="mx-5 my-0"/>
                        <hr style={{border:"1px solid white", marginTop:"-2px"}} className="mb-2 w-50"/>
                    </div>
                </div>

            </>
        )
    }
}

export default C5;


