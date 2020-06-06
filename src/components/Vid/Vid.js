import React from 'react';
import { Player, ControlBar} from 'video-react';
import './Vid.scss';
import "../../../node_modules/video-react/styles/scss/video-react.scss";
import picthumb from '../../images/thumb.webp';
import vidmp4 from '../../images/ad2.mp4';
const Vid = (props) => {
 
    return (
        <Player preload loop autoPlay muted  playsInline  poster={picthumb} src={vidmp4}  height={"85vh"} className="vid">
            <img style={{display:props.topCloudDisplay}} alt="section border" src="images/888.png" className="w-100 position-absolute clouds3"/>
            <ControlBar disableDefaultControls autoHide={false} className="cbar" />
        </Player>
    );
};

export default Vid;