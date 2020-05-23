import React, {Component} from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './C6.scss';

import AdidasBtn from "../AdidasBtn/AdidasBtn"

// for wide screen rendering with animation
import picas1 from '../../images/as1.png';
import picas2 from '../../images/as2.png';
import picas3 from '../../images/as3.png';

// for small screen sizes rendering
import picas11 from '../../images/as11.png';
import picas22 from '../../images/as22.png';
import picas33 from '../../images/as33.png';
import picm1 from '../../images/m1.jpg';

class C6 extends Component{    

    do_it1 =() => {
        this.myref1.current.classList.remove("back", "rear");
        this.myref2.current.classList.add("back", "rear");
        this.myref3.current.classList.add("back", "rear");
    }

    do_it2 =() => {
        this.myref2.current.classList.remove("back", "rear");
        this.myref1.current.classList.add("back", "rear");
        this.myref3.current.classList.add("back", "rear");
    }

    do_it3 =() => {
        this.myref3.current.classList.remove("back", "rear");
        this.myref2.current.classList.add("back", "rear");
        this.myref1.current.classList.add("back", "rear");
    }
    
    myref1 = React.createRef();
    myref2 = React.createRef();
    myref3 = React.createRef();

    componentDidMount(){
        console.log("c6 loaded");
    }

    render(){   
        return (
            <>
                <div className="c6  position-relative bkg-white">
                    <h1 className="text-center text-uppercase mb-5">
                        <span className="bg-black text-white fw-700 pl-1 pl-sm-2">new </span>
                        <span className="bkg-white fw-700 pl-1 text-black"> styles</span>
                    </h1> 

                    <div className="row mx-0 pt-sm-5 text-center d-none d-sm-inline-block">
                        <div className="img-box col-7 d-inline-block align-top text-center position-relative  dim3">
                            <img alt="fashion models" className="w-85 holder" src={picm1}/>
                            <img alt="fashion models" ref={this.myref3} className="w-85 ml-md-5 ml-3 pl-md-5 position-absolute corner" src={picas3}/>
                            <img alt="fashion models" ref={this.myref2} className="w-85 ml-md-5 ml-3 pl-md-5 position-absolute corner" src={picas2}/>
                            <img alt="fashion models" ref={this.myref1} className="w-85 ml-md-5 ml-3 pl-md-5 position-absolute corner" src={picas1}/>
                        </div>
                        <div className="col-5 pt-lg-5 d-inline-block align-top">
                            <h1 className="text-uppercase text-black  mt-sm-4 mb-4 ">
                                <span className="fw-700">ultraboost 20</span>
                            </h1> 
                            <h4 className="text-uppercase text-black fw-600">
                                more boost. more comfort.
                            </h4>
                            <div className="pt-sm-4">
                                <div  className="my-3">
                                    <AdidasBtn onme={this.do_it2} text="shop men"/>
                                </div>
                                <div  className="my-3">
                                    <AdidasBtn onme={this.do_it3} text="shop women"/>
                                </div>
                                <div  className="my-3">
                                    <AdidasBtn onme={this.do_it1} text="shop kids"/>
                                </div>
                            </div>   

                        </div>
                    </div>

                    <OwlCarousel className="owl-theme d-sm-none" loop={true} margin={20} nav={false} dots={false} items={2} center={true} startPosition={0}>
                        
                        <div className="item text-center">
                            <div>
                                <img src={picas33} alt="models" className=""/>
                                <span className="text-uppercase ultra-span1 d-block text-black fw-700">
                                    <span>ultraboost 20</span>
                                </span> 
                                <span className="text-uppercase ultra-span2 text-black fw-600">
                                    more boost. more comfort.
                                </span>
                                <div className="mt-3">
                                    <AdidasBtn text="shop women"/>
                                </div>
                            </div>
                        </div>

                        <div className="item text-center">
                            <div>
                                <img src={picas22} alt="models" className=""/>
                                <span className="text-uppercase ultra-span1 d-block text-black fw-700">
                                    <span>ultraboost 20</span>
                                </span> 
                                <span className="text-uppercase ultra-span2 text-black fw-600">
                                    more boost. more comfort.
                                </span>
                                <div className="mt-3">
                                   <AdidasBtn text="shop men"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item text-center">
                            <div>
                                <img src={picas11} alt="models" className=""/>
                                <span className="text-uppercase ultra-span1 d-block text-black fw-700">
                                    <span>ultraboost 20</span>
                                </span> 
                                <span className="text-uppercase ultra-span2 text-black fw-600">
                                    more boost. more comfort.
                                </span>
                                <div className="mt-3">
                                   <AdidasBtn text="shop kids"/>
                                </div>
                            </div>
                        </div>
                       
                    </OwlCarousel>

                </div>
            </>
        )
    }
}

export default C6;



