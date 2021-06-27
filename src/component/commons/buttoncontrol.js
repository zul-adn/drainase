import React from 'react';
import { isMobile, isTablet } from "react-device-detect";

import { resetSearch } from './../../store/app/action';

import Img1 from './../assets/img/pie-chart.svg';
import Img2 from './../assets/img/file.svg';
import Img3 from './../assets/img/recycle.svg';

import { connect } from "react-redux";

import DownloadExcel from './excel';

function Buttoncontrol({datas, resetSearch}) {

    React.useEffect(() => {
      
    })

    const excel = () => {
        <DownloadExcel />
    }

    const reset = () => {
        resetSearch()
    }   
    

    const showChart = () => {
        if(isTablet){
            document.querySelector('.close-chart').style.display = 'flex'
            document.querySelector('.chart').style.display = 'block'
           
        }else if(isMobile){
            document.querySelector('.close-chart').style.display = 'flex'
            document.querySelector('.chart').style.display = 'block'
        }else{
            document.querySelector('.close-chart').style.display = 'flex'
            document.querySelector('.chart').style.display = 'block'
        }
    }
    
    return (
        <div className="btn-control">
            <DownloadExcel />
            <div>
                <img src={Img1}  onClick={showChart} />
                <span>Data View</span>
            </div>
            <div>
                <img src={Img2} onClick={excel} />
                <span>Excel</span>
            </div>
            <div>
                <img src={Img3} onClick={reset}/>
                <span>Reset</span>
            </div>
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetSearch : () => dispatch(resetSearch())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttoncontrol);
