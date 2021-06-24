import React from 'react';
import Img1 from './../assets/img/pie-chart.svg';
import Img2 from './../assets/img/file.svg';
import Img3 from './../assets/img/magnifier.svg';

export default function buttoncontrol() {
    return (
        <div className="btn-control">
            <div>
                <img src={Img1} />
            </div>
            <div>
                <img src={Img2} />
            </div>
            <div>
                <img src={Img3} />
            </div>
        </div>
    )
}
