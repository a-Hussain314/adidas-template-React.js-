import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import LazyLoad from 'react-lazyload';

import './App.scss';
import C1 from './C1/C1';
import C2 from './C2/C2';
import C3 from './C3/C3';
import C4 from './C4/C4';
import C5 from './C5/C5';
import C6 from './C6/C6';
import C7 from './C7/C7';
import C8 from './C8/C8';
import C9 from './C9/C9';
import api from "../services/Api";

class App extends Component {

    // these empty array to receive the data lists from an api 
    state ={
    lists:{adidas:{
        navItems:[],
        combined_drop_lists:[],
        combined_footer_lists:[]
    }}
    }
 
    //  invoke the api request function 
    componentDidMount(){
        api(this.setter);
    }

    //  this setter function puts the lists data in this componenet state
    // the api component invoke it with retrieved data, after receive response from the api
    setter = (lists)=>{
        this.setState({lists:lists});
    }

   
    render() {
       
        return (
            <>
            <BrowserRouter>

            {/* passing the data list fetched from api to this component to render as nav items and drop down menu items */}
              <C1 navItems={this.state.lists.adidas.navItems} combined_drop_lists={this.state.lists.adidas.combined_drop_lists}/>

              <C2/>
              
              <C3/>

              <LazyLoad once offset={100}  height={200}  >
                <C4 headingTextAlign={"left"}  heading1={"best"} heading2={"selling"}/>
              </LazyLoad>
             
              <LazyLoad once offset={100}  height={200}  >
                <C5/>
              </LazyLoad>

              <LazyLoad once offset={100}  height={200}  >
                <C4 headingTextAlign={"left"}  heading1={"best"} heading2={"selling"}/>
              </LazyLoad>
              
              <LazyLoad once offset={100}  height={200}  >
                <C6/>
              </LazyLoad>

              <LazyLoad once offset={100}  height={200}  >
                 <C7/>
              </LazyLoad>

              <LazyLoad once offset={100}  height={200}  >
                 <C8/>
              </LazyLoad>

            {/* passing the data list fetched from api to this component to render as  footer menu items */}
            <LazyLoad once offset={100}  height={200}  >
              <C9 combined_footer_lists={this.state.lists.adidas.combined_footer_lists} />
            </LazyLoad>    

            </BrowserRouter>  
            </>
        );
    }
}

export default App;


