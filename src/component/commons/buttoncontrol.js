import React from 'react';
import { isMobile, isTablet } from "react-device-detect";

import Img1 from './../assets/img/pie-chart.svg';
import Img2 from './../assets/img/file.svg';
import Img3 from './../assets/img/magnifier.svg';

import { connect } from "react-redux";

import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Buttoncontrol({datas}) {

    React.useEffect(() => {
      
    })

    const excel = () => {
      alert("HELLO")
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
            <div>
                <img src={Img1}  onClick={showChart} />
            </div>
            <div>
                <img src={Img2} onClick={excel} />
            </div>
            <div>
                <img src={Img3}/>
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttoncontrol);
