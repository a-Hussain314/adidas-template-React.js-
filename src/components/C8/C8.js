import React, { Component } from 'react';
import './C8.scss';
import AdidasBtn from "../AdidasBtn/AdidasBtn";

import picme from '../../images/me.png';
import pic12 from '../../images/12.jpg';

class C8 extends Component {

    componentDidMount(){
        console.log("c8 loaded");
    }

    render() {
        return (
            <>
                <div className="c8 border-bottom bkg-white">
                   
                    <h1 className="text-black fw-800 text-uppercase">faster than people expect -</h1>
                    <h1 className="text-black fw-800 text-uppercase">martinus evans</h1>
                   
                    <div className="row mx-0">
                   
                        <div className="col-12 col-lg-4 px-0 order-12 order-lg-1">
                            
                            {/* whide screen only */}

                            <p className="text-black lead fw-500 word d-none d-lg-block">
                                "it's very important to<br/>
                                know: fast is about<br/>
                                what you can do, not<br/>
                                about any body."<br/>
                                <br/>
                                Martinos Evans knows<br/>
                                he might not be the<br/>
                                man to run a course<br/>
                                record in Berlin<br/>
                                Marathon.
                            </p>

                            {/* small screens only */}

                            <p className="text-black lead fw-400 word d-lg-none">
                                "it's very important to
                                know: fast is about
                                what you can do, not
                                about any body."<br/>
                                <br/>
                                Martinos Evans knows
                                he might not be the
                                man to run a course
                                record in Berlin
                                Marathon.
                            </p>
                            <div className="text-center mt-4">
                                <AdidasBtn text="learn more" className=""/>
                            </div>
                        </div>        
                       
                        <div className="col-12 col-lg-8 px-0 heros order-1 order-lg-12">
                             <img alt="marathon guys" src={picme} className="w-100" />
                        </div>   

                    </div>      
                </div>
                
                <div className="c8-2 row mx-0 bkg-white text-center justify-content-center">
                    <h1 className="text-uppercase ls-3 mb-3 d-sm-none">
                        <span className="bg-black text-white fw-700 pl-2">new </span>
                        <span className="bkg-white fw-700 pl-1 text-black"> arrival</span>
                    </h1> 
                    <div className="col-sm-6 col-12  px-0">
                        <img alt="models" src={pic12}  className="w-100" />
                    </div>
                    <div className="col-6 px-0 pt-md-5">
                        <h1 className="text-uppercase ls-3 my-5 ml-3 ml-sm-5 d-none d-sm-block">
                            <span className="bg-black text-white fw-700 pl-2">new </span>
                            <span className="bkg-white fw-700 pl-1 text-black"> arrival</span>
                        </h1> 
                        <div className="btn-box">
                        <div className="p-2">
                                    <AdidasBtn  text="shop women"/>
                            </div>
                        <div className="p-2 pl-3">
                                <AdidasBtn  text="shop men" />
                        </div>
                        </div>
                    </div>
                </div>

                <div className="yellow mt-5 py-3 py-sm-5 text-center d-block d-lg-flex justify-content-around bkg-white">
                    <h1 className="text-black text-uppercase my-md-3 d-lg-inline-block">stay in the know with adidas!</h1>
                    <div className="d-lg-inline-block  mb-md-3 mt-md-3">
                        <AdidasBtn text="sign up"/>
                    </div>
                </div>

            </>
        );
    }
}

export default C8;
