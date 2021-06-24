import React from 'react';
import { connect } from "react-redux";
import { isMobile, isTablet } from "react-device-detect";

import 'animate.css';

function Chart({ sumDatas }) {

    React.useEffect(() => {
        console.log(sumDatas)
    })


    const closeChart = () => {
        if (isTablet) {
            document.querySelector('.sidebar').style.right = '20px'
        } else if (isMobile) {
            document.querySelector('.sidebar').style.bottom = '0'
        } else {
            document.querySelector('.chart').style.display = 'none'
        }
    }

    return (
        <div className="chart">
            <div className="close-chart" onClick={closeChart}>
                X
            </div>
            <div className="main-chart animate__animated animate__bounceInLeft">
                <div className="main-text">
                    {sumDatas.length !== 0 ? sumDatas.total[0].total : "Loading..."}
                </div>
                <div className="sub-text">
                    Total panjang jaringan Kota Singkawang
                </div>
            </div>

            <div class="category-container animate__animated animate__fadeInUp">
                {sumDatas.length !== 0 ?
                    sumDatas.all.map((data, i) =>
                        <div class="category-item">
                            <div className="header">
                                <div className="main">
                                    {data.panjang}
                                </div>
                                <div className="sub">
                                    {data.nama_jaringan}
                                </div>
                            </div>
                            <div className="content-wrapper">
                                <div className="content">
                                    <div className="title">
                                        Tipe Saluran
                                    </div>
                                    <div className="content-2">
                                        {data.tipe_saluran.map((tipe, i) =>
                                            <div className="content-3">
                                                <div className="angka">
                                                    {tipe.panjang}
                                                </div>
                                                <div className="ket">
                                                    {tipe.tipe_saluran}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="title">
                                        Kondisi
                                    </div>
                                    <div className="content-2">
                                        {data.kondisi.map((tipe, i) =>
                                            <div className="content-3">
                                                <div className="angka">
                                                    {tipe.panjang}
                                                </div>
                                                <div className="ket">
                                                    {tipe.kondisi}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="title">
                                        Konstruksi
                                    </div>
                                    <div className="content-2">
                                        {data.konstruksi.map((tipe, i) =>
                                            <div className="content-3">
                                                <div className="angka">
                                                    {tipe.panjang}
                                                </div>
                                                <div className="ket">
                                                    {tipe.konstruksi}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="content">
                                <div className="title">
                                   Kondisi Saluran
                                </div>
                                <div className="content-2">
                                    {data.kondisi_saluran.map((tipe, i) => 
                                        <div className="content-3">
                                            <div className="angka">
                                                {tipe.panjang}
                                            </div>
                                            <div className="ket">
                                                {tipe.kondisi_saluran}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div> */}
                        </div>
                    )
                    :
                    <div>
                        Loading
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        sumDatas: app.sumDatas,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
