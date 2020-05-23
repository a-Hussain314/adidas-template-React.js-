import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './C9.scss';

class C9 extends Component {

    componentDidMount(){
        console.log("c9 loaded");
    }

// this componentr receive data in an array as prop 
// this array is fetched from an end point
// each item in this array is an array too >> so we have an array contains multiple arrays
// thats why we using nested map() function to loop on the parent array, then loop on the child array as well
// note : the <h6> heading of every child list (array) , is within the array with index [0]   

    combined_footer_lists_render_machine = (any_combined_footer_lists) => {
        return(
            any_combined_footer_lists.map((single_list,index)=>(

                <div key={index} className="d-inline-block align-top mapped">
                    <h6 className="text-uppercase text-black mb-sm-4 mb-2 h6-resp fw-900">{single_list[0]}</h6>
                    <ul className="list-unstyled">

                        {single_list.slice(1).map((single_list_item, index)=>(
                            <li  key={index} className="text-capitalizels-1 hover-text-red pointer li-resp">
                                <Link to="/" className="link-basic text-grey text-capitalize ls-1 hover-text-red pointer">
                                    {single_list_item}
                                </Link>
                            </li>  
                        ))}
                        
                    </ul>
                </div>
                
                    )
                )
            )
        }

    render() {  
        return (
            <>
                <div className="c9">
                <div className=" w-100 bkg-white py-lg-5">
                     <div className="py-5 my-sm-5 px-lg-5 d-flex justify-content-around w-90 mx-auto">
                        {this.combined_footer_lists_render_machine(this.props.combined_footer_lists)}
                     </div>
                </div> 
                </div>
            </>
        )
    }
}

export default C9;