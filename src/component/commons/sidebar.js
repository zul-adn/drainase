import React, { useEffect } from 'react';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import Slider from "react-slick";
import './../style/style.css';
import { connect } from "react-redux";
import { isMobile, isTablet } from "react-device-detect";
import Card from './card';
import Button from './button';


function Sidebar({ toShow }) {

    useEffect(() => {
        console.log(toShow)
    }, [])

    const closeSidebar = () => {

        if(isTablet){
            document.querySelector('.sidebar').style.right = '-700px'
        }else if(isMobile){
            document.querySelector('.sidebar').style.bottom = '-100vh'
        }else{
            document.querySelector('.sidebar').style.right = '-700px'
            document.querySelector('.legend').style.height = '85vh'
        }

    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="sidebar">
            <div className="close" onClick={closeSidebar} >
                X
            </div>
            <div className="cor-container">
                <Slider {...settings}>
                    <div className="cor-item">
                        <h3>1</h3>
                    </div>
                    <div className="cor-item">
                        <h3>2</h3>
                    </div>
                    <div className="cor-item">
                        <h3>3</h3>
                    </div>
                    <div className="cor-item">
                        <h3>4</h3>
                    </div>
                    <div className="cor-item">
                        <h3>5</h3>
                    </div>
                    <div className="cor-item">
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>

            <div className="toshow">
                <div>Nama Jaringan</div>
                <div>{toShow.name}</div>
            </div>
            <div className="toshow">
                <div>Tipe Saluran</div>
                <div>{toShow.tipe_saluran}</div>
            </div>
            <div className="toshow">
                <div>Panjang</div>
                <div>{toShow.panjang} m</div>
            </div>
            <div className="toshow">
                <div>Konstruksi</div>
                <div>{toShow.konstruksi}</div>
            </div>
            <div className="toshow">
                <div>Kondisi Konstruksi </div>
                <div>{toShow.kondisi}</div>
            </div>
            <div className="toshow">
                <div>Kondisi Saluran </div>
                <div>{toShow.kondisi_saluran}</div>
            </div>
            <div className="toshow">
                <div>Lebar Atas </div>
                <div>{toShow.lebar_atas} m</div>
            </div>
            <div className="toshow">
                <div>Lebar Bawah </div>
                <div>{toShow.lebar_bawah} m</div>
            </div>
            <div className="toshow">
                <div>Kedalaman </div>
                <div>{toShow.kedalaman} m</div>
            </div>
            <div className="toshow">
                <div>Catatan </div>
                <div>{toShow.catatan}</div>
            </div>

        </div >
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas,
        toShow: app.toShow
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
