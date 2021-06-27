import React from 'react';
import { connect } from "react-redux";
import { changeFilter, searchMode } from './../../store/app/action';
import './../style/style.css';

function Legend({ changeFilter, filter, legend, sumDatas, datas, searchMode }) {

    const [dataToShow, setDataToShow] = React.useState([])

    const changeFilters = (val) => {
        console.log(val)
        changeFilter(val)
    }

    const searchData = (val, val2) => {
        searchMode(val)
        console.log(val)
        document.querySelector('.content2').style.display = "block"
        document.querySelector('.content-legend').style.height = "20%"
        const dataa = sumDatas.all.filter(item => {
            return item.nama_jaringan === val
        })
        if(val2 !== "jaringan"){
            document.querySelector('.content2').style.display = "none"
            document.querySelector('.content-legend').style.height = "67%"
        }
        console.log(dataa)
        setDataToShow(dataa)
    }

    const Content = () => {

        if (filter === "kondisi") {
            return (
                <>
                    {legend.length !== 0 ?
                        legend.kondisi.map((data, i) =>
                            <div className="legend-item hover" onClick={() => searchData(data.name, "kondisi")}>
                                <div> {data.name} </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <div style={{ width: '80%', height: 4, backgroundColor: data.color }} />
                                </div>
                            </div>
                        )
                        :
                        <span>Loading ...</span>
                    }
                </>
            )
        } else if (filter === "jaringan") {
            return (
                <>
                    {legend.length !== 0 ?
                        legend.jaringan.map((data, i) =>
                            <div className="legend-item hover" onClick={() => searchData(data.name, "jaringan")}>
                                <div> {data.name} </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <div style={{ width: '80%', height: 4, backgroundColor: data.color }} />
                                </div>
                            </div>
                        )
                        :
                        <span>Loading ...</span>
                    }
                </>
            )
        } else if (filter === "tipe_saluran") {
            return (
                <>
                    {legend.length !== 0 ?
                        legend.tipe_saluran.map((data, i) =>
                            <div className="legend-item hover" onClick={() => searchData(data.name, "tipe_saluran")}>
                                <div> {data.name} </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <div style={{ width: '80%', height: 4, backgroundColor: data.color }} />
                                </div>
                            </div>
                        )
                        :
                        <span>Loading ...</span>
                    }
                </>
            )
        } else if (filter === "konstruksi") {
            return (
                <>
                    {legend.length !== 0 ?
                        legend.konstruksi.map((data, i) =>
                            <div className="legend-item hover" onClick={() => searchData(data.name, "konstruksi")}>
                                <div> {data.name} </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <div style={{ width: '80%', height: 4, backgroundColor: data.color }} />
                                </div>
                            </div>
                        )
                        :
                        <span>Loading ...</span>
                    }
                </>
            )
        } else if (filter === "kondisi_saluran") {
            return (
                <>
                    {legend.length !== 0 ?
                        legend.kondisi_saluran.map((data, i) =>
                            <div className="legend-item hover" onClick={() => searchData(data.name, "kondisi_saluran")}>
                                <div> {data.name} </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <div style={{ width: '80%', height: 4, backgroundColor: data.color }} />
                                </div>
                            </div>
                        )
                        :
                        <span>Loading ...</span>
                    }
                </>
            )
        } else {
            return (

                <div className="legend-item">
                    <div> Drainase Kota Singkawang </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <div style={{ width: '80%', height: 4, backgroundColor: 'blue' }} />
                    </div>
                </div>

            )
        }

    }

    return (
        <div className="legend">
            <div className="header">
                <span>Legenda</span>
            </div>
            <div className="button">
                <div onClick={() => changeFilters("jaringan")}>
                    <span>Jaringan</span>
                </div>
                <div onClick={() => changeFilters("tipe_saluran")}>
                    <span>Tipe Saluran</span>
                </div>
                <div onClick={() => changeFilters("kondisi")}>
                    <span>Kondisi</span>
                </div>
                <div onClick={() => changeFilters("konstruksi")}>
                    <span>Konstruksi</span>
                </div>
                <div onClick={() => changeFilters("kondisi_saluran")}>
                    <span>Kondisi Saluran</span>
                </div>

            </div>
            <div className="content2">
                <div className="header2 animate__animated animate__bounceInLeft">
                    <span>{dataToShow.length !== 0 ? dataToShow[0]['nama_jaringan'] : ''} - {dataToShow.length !== 0 ? dataToShow[0]['panjang'] : ''} m</span>
                </div>
                
                <div className="content-detail animate__animated animate__bounceInLeft">
                    <div style={{ textAlign:'center' }}>
                        <span>Tipe Saluran (meter)</span>
                    </div>
                    {dataToShow.length !== 0 ?
                        dataToShow.map((data, i) =>
                            <div className="detail-grid">
                                {data.tipe_saluran.map((data2, i) =>
                                    <div>
                                        <div style={{ fontSize:18 }}>{data2.panjang}</div>
                                        <div style={{ fontSize:12 }}>{data2.tipe_saluran}</div>
                                    </div>
                                )}
                            </div>
                        )
                        :
                        <></>
                    }
                </div>

                <div className="content-detail animate__animated animate__bounceInLeft">
                    <div style={{ textAlign:'center' }}>
                        <span>Kondisi (meter)</span>
                    </div>
                    {dataToShow.length !== 0 ?
                        dataToShow.map((data, i) =>
                            <div className="detail-grid">
                                {data.kondisi.map((data2, i) =>
                                    <div>
                                        <div style={{ fontSize:18 }}>{data2.panjang}</div>
                                        <div style={{ fontSize:12 }}>{data2.kondisi}</div>
                                    </div>
                                )}
                            </div>
                        )
                        :
                        <></>
                    }
                </div>

                <div className="content-detail animate__animated animate__bounceInLeft">
                    <div style={{ textAlign:'center' }}>
                        <span>Konstruksi (meter)</span>
                    </div>
                    {dataToShow.length !== 0 ?
                        dataToShow.map((data, i) =>
                            <div className="detail-grid">
                                {data.konstruksi.map((data2, i) =>
                                    <div>
                                        <div style={{ fontSize:18 }}>{data2.panjang}</div>
                                        <div style={{ fontSize:12 }}>{data2.konstruksi}</div>
                                    </div>
                                )}
                            </div>
                        )
                        :
                        <></>
                    }
                </div>

                <div className="content-detail animate__animated animate__bounceInLeft">
                    <div style={{ textAlign:'center' }}>
                        <span>Kondisi Saluran (meter)</span>
                    </div>
                    {dataToShow.length !== 0 ?
                        dataToShow.map((data, i) =>
                            <div className="detail-grid">
                                {data.kondisi_saluran.map((data2, i) =>
                                    <div>
                                        <div style={{ fontSize:18 }}>{data2.panjang}</div>
                                        <div style={{ fontSize:12 }}>{data2.kondisi_saluran}</div>
                                    </div>
                                )}
                            </div>
                        )
                        :
                        <></>
                    }

                </div>

            </div>
            <div className="content-legend">
                <Content />
            </div>
            {/* <button onClick={() => changeFilters("kondisi")}>
                Kondisi
            </button>
            <button onClick={() => changeFilters("jaringan")}>
                Jaringan
            </button>
            <button onClick={() => changeFilters("konstruksi")}>
                Konstruksi
            </button>
            <button onClick={() => changeFilters("kondisi_saluran")}>
                Kondisi Saluran
            </button> */}
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        legend: app.legend,
        filter: app.filter,
        sumDatas: app.sumDatas,
        datas: app.datas
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFilter: (payload) => dispatch(changeFilter(payload)),
        searchMode: (payload) => dispatch(searchMode(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
