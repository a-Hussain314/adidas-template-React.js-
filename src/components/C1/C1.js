import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './C1.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";

import pic_p1 from '../../images/p1.jpg';
import pi_cshoe from '../../images/shoe.jpg';
import pict_shirt from '../../images/t_shirt.jpg';

// this componentr receive data in an array as prop 
// this array is fetched from an end point
// each item in this array is an array too >> so we have an array contains multiple arrays
// thats why we using nested map() function to loop on the parent array, then loop on the child array as well
// note : the <h6> heading of every child list (array) , is within the array with index [0]   

class C1 extends Component {
    state = {
        menu_display : "none"
    }

    combined_drop_lists_render_machine = (any_combined_drop_lists) => {
        return(
            any_combined_drop_lists.map((single_list, index)=>(

                <div key={index} className="pl-xl-5 pb-sm-5 align-top text-left">
                    <h6 className="text-capitalize drop-h6 fw-700 ls-1">{single_list[0]}</h6>
                    <ul className="list-unstyled">
                        {
                        
                        single_list.slice(1).map((single_list_item, index)=>(
                            <li key={index} className="text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500">
                                <Link to="/" className="link-basic text-grey text-capitalize fs-13 my-2 ls-1 hover-text-red pointer fw-500">
                                   {single_list_item}
                                </Link>
                            </li>
                        ))
                        
                        }
                    </ul>
                </div>
                    )

                )
            )
        }

    toggleMenu = () => {
        this.state.menu_display==="none" ? this.setState({menu_display:"block"}) : this.setState({menu_display:"none"});
        }

    hideMenu = () => {
        this.setState({
            menu_display : "none"
            })
        }

    myRef1 = React.createRef();

    render() {    
        return (
            <div className="c1">
                <div className="bkg-white col px-0 px-md-3 d-md-flex justify-content-between ">

                    {/* wide screens only logo */}

                    <div className="d-none d-md-inline-block">
                        <img alt="adidas logo" src="images/logo.webp" className="logo-img"/>
                    </div>

                     {/* upper 1 */}

                    <div className="d-md-inline-block align-top w-fa">
                        <div className="text-center text-md-right mt-0 b neg-mb-2 un" >
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block mr-1 ml-md-1 font-weight-bold uni"><small className="text-secondary  font-weight-bold">aslo visit</small> <Link className="text-secondary link-basic fw-500 ml-1 hover-text-red" to="/"><span className="reebok-font text-dark mr-3 hover-text-red"> Reebok</span></Link></li>
                                {this.props.navItems.map(navItem=>(
                                    <li key={Math.random()*10000} className="d-inline-block mr-2 ml-md-1 mt-1 mt-sm-0  font-weight-bold uni"><Link to="/" className="link-basic text-grey fw-500 hover-text-red">{navItem}</Link></li>
                                        )
                                    )}
                            </ul>
                        </div>

                     {/* navbar 2 - small screen only logo -  search bar  */}

                        <div className="text-right mt-4 mt-md-0">

                                    {/* navbar 2  appears on wide screen only*/}

                                <ul  className="list-unstyled d-none  d-md-inline-block align-bottom  mt-4 mt-sm-0 mb-2 col-12 col-lg-8 text-center text-lg-right">
                                        <li className="d-sm-inline-block ml-2 mr-3 text-uppercase hover-text-red" onClick={this.toggleMenu}><small className="fw-700 pointer ls-1">men  </small> </li>
                                        <li className="d-sm-inline-block ml-2 mr-3 text-uppercase hover-text-red" onClick={this.toggleMenu}><small className="fw-700 pointer ls-1">women</small> </li>
                                        <li className="d-sm-inline-block ml-2 mr-3 text-uppercase hover-text-red" onClick={this.toggleMenu}><small className="fw-700 pointer ls-1">kids </small> </li>
                                        <li className="d-sm-inline-block ml-2 mr-3 text-uppercase text-grey hover-text-red"><small className="fw-500 pointer ls-1">sports</small></li>
                                        <li className="d-sm-inline-block ml-2 mr-3 text-uppercase text-grey hover-text-red"><small className="fw-500 pointer ls-1">brands</small></li>
                                        <li className="d-sm-inline-block ml-2 mr-3 text-uppercase text-grey hover-text-red"><small className="fw-500 pointer ls-1">release dates</small></li>
                                </ul>

                                <div className="d-inline-flex justify-content-between  justify-content-md-end pr-0 col-12 col-lg-4">

                                    {/* small screen only logo */}

                                    <div className="d-inline-block d-md-none">
                                        <img alt="adidas logo" src="images/logo.webp" className="logo-img2"/>
                                    </div>
                                   

                                     {/* drop down button  appears on small screen only*/}
                                    
                                    <i onClick={this.toggleMenu} className="fas fa-list-alt menu-icon hover-text-red pointer d-inline-block d-md-none"></i>
                                   
                                      {/* search bar */}

                                    <div className="d-inline-flex justify-content-end position-relative align-top col col-sm-8 col-md-6 col-lg-10  pr-0">
                                        <form className="position-relative d-inline-block col pr-0">
                                        <input className="input-11 w-100 border-0 fw-500 px-2 pb-1  mb-2" type="text" name="search" placeholder="Search"/>
                                        <i  onClick={()=>{this.myRef1.current.click()}} className="fas fa-search input-search-icon hover-text-red"></i>
                                        <button ref={this.myRef1} className="d-none" tybe="submit">..</button>
                                        </form>
                                        <Link className="link-basic text-dark" to="/"><i className="hover-text-red align-top mx-3 pt-2 fas fa-heart"></i></Link>
                                        <Link className="link-basic text-dark" to="/"><i className="hover-text-red align-top mx-2 pt-2 fas fa-shopping-bag"></i></Link>
                                    </div>

                                </div> 
                        </div>
                    </div>
                </div>

                <div className="text-center  border-bottom three-cont">
                    <small className="text-uppercase text-grey mx-1 mx-sm-3 mx-md-4  my-lg-0 fw-700 ls-0.5  hover-text-red pointer d-inline-block three">up to 30% off | code: savenow</small>
                    <small className="text-uppercase text-grey mx-1 mx-sm-3 mx-md-4  my-lg-0 fw-700 ls-0.5  hover-text-red pointer d-inline-block three"><img className="img-icons" alt="adidas icon" src="images/fb.jpg"/> your puechases suppourt the coveid-19 response</small>
                    <small className="text-uppercase text-grey mx-1 mx-sm-3 mx-md-4  my-lg-0 fw-700 ls-0.5  hover-text-red pointer d-inline-block three"><img className="img-icons" alt="adidas icon" src="images/fv.png"/> free shipping over $49 and free 90 day returns</small>
                </div>

                  {/* drop down menu*/}

                <div className="text-center pos-sm-rel of-hidden">
                    <img className="w-100" alt="girl" src={pic_p1} />
                
                    <div className="drop-menu w-100 bkg-white  position-absolute pt-0 pt-sm-5 text-left" onMouseLeave={this.hideMenu} style={{top:"0", left:"0",zIndex:"9999999",display:this.state.menu_display}}>
                        <i className="far fa-times-circle d-block d-sm-none text-danger text-right m-2 hover-text-red pointer" onClick={this.hideMenu}></i>
                        <div className="col-12 col-lg-7 px-lg-4 d-sm-inline-flex justify-content-between">   
                        
                            {this.combined_drop_lists_render_machine(this.props.combined_drop_lists)}
                        </div>      
                        <div className="col-12 col-lg-5 d-inline-block border-left align-top">
                            <div className=" pl-lg-4 pb-5"> 
                                <h6 className="text-capitalize text-dark fw-700 ls-1">sales</h6>
                                <ul className="list-unstyled">
                                    <li className="text-capitalize text-secondary fs-14 my-2 ls-1 hover-text-red pointer fw-500"><Link to="/" className="link-basic text-grey text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500">clothing</Link></li>
                                    <li className="text-capitalize text-secondary fs-14 my-2 ls-1 hover-text-red pointer fw-500"><Link to="/" className="link-basic text-grey text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500">accessories</Link></li>
                                    <li className="text-capitalize text-secondary fs-14 my-2 ls-1 hover-text-red pointer fw-500"><Link to="/" className="link-basic text-grey text-capitalize fs-14 my-2 ls-1 hover-text-red pointer fw-500">new arrivals <span className="text-uppercase text-danger fw-700">new</span></Link></li>
                                </ul>  
                                <div>
                                    <div className="my-3 mr-4 d-inline-block of-hidden-fixed col-4 col-sm-3 col-lg-5 img-cont"> 
                                    <img alt="shoes" src={pi_cshoe}/>
                                    </div>
                                    <div className="my-3 mr-4 d-inline-block of-hidden-fixed col-4 col-sm-3 col-lg-5 img-cont">
                                    <img alt="t-shirt" src={pict_shirt}/>
                                    </div>
                                </div>
                            </div>                           
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default C1;


