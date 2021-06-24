import React from 'react';
import { isMobile, isTablet } from "react-device-detect";

import Img1 from './../assets/img/pie-chart.svg';
import Img2 from './../assets/img/file.svg';
import Img3 from './../assets/img/magnifier.svg';

export default function buttoncontrol() {

    const showChart = () => {
        if(isTablet){
            document.querySelector('.sidebar').style.right = '20px'
        }else if(isMobile){
            document.querySelector('.sidebar').style.bottom = '0'
        }else{
            document.querySelector('.chart').style.display = 'block'
        }
    }
    
    return (
        <div className="btn-control">
            <div>
                <img src={Img1}  onClick={showChart} />
            </div>
            <div>
                <img src={Img2} />
            </div>
            <div>
                <img src={Img3}/>
            </div>
        </div>
    )
}
