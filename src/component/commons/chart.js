import React from 'react';
import { connect } from "react-redux";
import { isMobile, isTablet } from "react-device-detect";

import 'animate.css';

function Chart({ sumDatas }) {


    const closeChart = () => {
        if (isTablet) {
            document.querySelector('.chart').style.display = 'none'
            document.querySelector('.close-chart').style.display = 'none'
        } else if (isMobile) {
            document.querySelector('.close-chart').style.display = 'none'
            document.querySelector('.chart').style.display = 'none'
        } else {
            document.querySelector('.chart').style.display = 'none'
            document.querySelector('.close-chart').style.display = 'none'
        }
    }

    return (
        <>
         <div className="close-chart animate__animated animate__rubberBand" onClick={closeChart}>
                X
        </div>
        <div className="chart">
            <div className="main-chart animate__animated animate__bounceInLeft">
                <div className="header">
                    <div className="main-text">
                        {sumDatas.length !== 0 ? sumDatas.total[0].total : "Loading..."}
                    </div>
                    <div className="sub-text">
                        Total panjang jaringan Kota Singkawang
                    </div>
                </div>

                <div className="category-container-2">

                    <div className="category-item-2">
                        <div className="layer">
                            <div className="header-2">Tipe Saluran</div>
                            <div className="content-2">
                                {sumDatas.length !== 0 ?
                                    sumDatas.tipe_saluran.map((data, i) =>
                                        <div>
                                            <div className="main animate__animated animate__flipInX animate__delay-1s">
                                                {data.panjang}
                                            </div>
                                            <div className="sub animate__animated animate__fadeInUp animate__delay-1s">
                                                {data.tipe_saluran}
                                            </div>
                                        </div>
                                    )
                                    :
                                    <div>Loading</div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="category-item-2">
                        <div className="layer">
                            <div className="header-2">Kondisi</div>
                            <div className="content-2">
                                {sumDatas.length !== 0 ?
                                    sumDatas.kondisi.map((data, i) =>
                                        <div>
                                            <div className="main animate__animated animate__flipInX animate__delay-1s">
                                                {data.panjang}
                                            </div>
                                            <div className="sub animate__animated animate__fadeInUp animate__delay-1s">
                                                {data.kondisi}
                                            </div>
                                        </div>
                                    )
                                    :
                                    <div>Loading</div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="category-item-2">
                        <div className="layer">
                            <div className="header-2">Konstruksi</div>
                            <div className="content-2">
                                {sumDatas.length !== 0 ?
                                    sumDatas.konstruksi.map((data, i) =>
                                        <div>
                                            <div className="main animate__animated animate__flipInX animate__delay-1s">
                                                {data.panjang}
                                            </div>
                                            <div className="sub animate__animated animate__fadeInUp animate__delay-1s">
                                                {data.konstruksi}
                                            </div>
                                        </div>
                                    )
                                    :
                                    <div>Loading</div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="category-item-2">
                        <div className="layer">
                            <div className="header-2">Kondisi Saluran</div>
                            <div className="content-2">
                                {sumDatas.length !== 0 ?
                                    sumDatas.kondisi_saluran.map((data, i) =>
                                        <div>
                                            <div className="main animate__animated animate__flipInX animate__delay-1s">
                                                {data.panjang}
                                            </div>
                                            <div className="sub animate__animated animate__fadeInUp animate__delay-1s">
                                                {data.kondisi_saluran}
                                            </div>
                                        </div>
                                    )
                                    :
                                    <div>Loading</div>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
            <div className="main-chart animate__animated animate__bounceInLeft" style={{ marginTop:50 }}>
                <div className="header">
                    <div className="main-text">
                        100298
                    </div>
                    <div className="sub-text">
                        Total panjang Sungai Kota Singkawang
                    </div>
                </div>
            </div>


            <div class="category-container animate__animated animate__fadeInUp">
                {sumDatas.length !== 0 ?
                    sumDatas.all.map((data, i) =>
                        <div class="category-item">
                            <div className="header">
                                <div className="main animate__animated animate__flipInX animate__delay-1s">
                                    {data.panjang}
                                </div>
                                <div className="sub animate__animated animate__fadeInUp animate__delay-1s">
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
                                                <div className="angka animate__animated animate__flipInX animate__delay-1s">
                                                    {tipe.panjang}
                                                </div>
                                                <div className="ket animate__animated animate__fadeInUp animate__delay-1s">
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
                                                <div className="angka animate__animated animate__flipInX animate__delay-1s">
                                                    {tipe.panjang}
                                                </div>
                                                <div className="ket animate__animated animate__fadeInUp animate__delay-1s">
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
                                                <div className="angka animate__animated animate__flipInX animate__delay-1s">
                                                    {tipe.panjang}
                                                </div>
                                                <div className="ket animate__animated animate__fadeInUp animate__delay-1s">
                                                    {tipe.konstruksi}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="content">
                                    <div className="title">
                                        Kondisi Saluran
                                    </div>
                                    <div className="content-2">
                                        {data.kondisi_saluran.map((tipe, i) =>
                                            <div className="content-3">
                                                <div className="angka animate__animated animate__flipInX animate__delay-1s">
                                                    {tipe.panjang}
                                                </div>
                                                <div className="ket animate__animated animate__fadeInUp animate__delay-1s">
                                                    {tipe.kondisi_saluran}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>

                           
                        </div>
                    )
                    :
                    <div>
                        Loading
                    </div>
                }
            </div>
        </div>
        </>
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
