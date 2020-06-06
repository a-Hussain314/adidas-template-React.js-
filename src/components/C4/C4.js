//  component  slider gallery for clothes 

import React, { Component } from 'react';

// a pluging to handle the horizontal slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './C4.scss';

//dynamic images for cloth 
// [beta version] ==>these images can be dynamically fetched fron an Actual endpoint 
import picg1 from '../../images/g1.jpg';
import picg2 from '../../images/g2.jpg';
import picg3 from '../../images/g3.jpg';
import picg4 from '../../images/g4.jpg';
import picg5 from '../../images/g5.jpg';
import picg6 from '../../images/g6.jpg';
import picg7 from '../../images/g7.jpg';



class C4 extends Component {
    // img and price for every item
    pics = [
        [picg1, "250"],
        [picg2, "350"],
        [picg3, "150"],
        [picg4, "450"],
        [picg5, "250"],
        [picg6, "300"],
        [picg7, "400"]
    ];
    
    // slider rendering config object 
    responsive = {
        0: {
            items: 2,
            margin:10
        },
        450: {
            items: 2,
            margin:20
        },
        600: {
            items: 3,
            margin:30
        },
        1000: {
            items: 4,
            margin:40
        },
    }
    
    componentDidMount(){
        console.log("c4 loaded");
    }

    render() {    
        return (
            <>
            <div className="c4 text-center bkg-white position-relative over-hidden">
                <h1 style={{ textAlign:this.props.headingTextAlign, paddingLeft:this.props.pl }} className="text-uppercase text-black  mx-0 mx-sm-5 mb-0 mb-sm-5">
                    <span className="mx-1 py-1 px-2 bg-black text-white fw-600">{this.props.heading1}</span>
                    <span className="mx-1  fw-800">{this.props.heading2}</span>
                </h1> 

                <OwlCarousel className="owl-theme bkg-white" loop    center dots={false} responsive={this.responsive}>

                    {this.pics.map((p,index)=>(
                        <div key={index} className="item text-left pt-5 slider-item-hover pointer">
                            <div className="position-relative w-100 mb-0 mb-sm-4">
                                <img alt="women clothes" src={p[0]}  className="faded w-100 mb-4"/>
                                <img alt="360 degree icon" src="images/360b.png" className="position-absolute w-25 icon-360"/>
                            </div>
                            <h5 className="text-capitalize mb-1">trefoil t-shirt</h5>
                            <span className="price d-block text-capitalize text-grey fw-500">women clothes</span>
                            <span className="price d-block text-grey fw-500 text-uppercase">egb {p[1]}</span> 
                        </div>
                    ))}

                </OwlCarousel>

            </div>
            <hr className="hz1 mx-5 my-0"/>
            <hr className="hz2 mb-2 w-50 mx-auto"/>
            </>
        )
    }
}

export default C4;


