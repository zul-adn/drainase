import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet';
import { connect } from "react-redux";

import Modal from 'react-modal';
import Sidebar from './commons/sidebar';
import ButtonControl from './commons/buttoncontrol';
import Chart from './commons/chart';
import Legend from './commons/legend';

import { getAllDatas, toShow, getSumDatas } from './../store/app/action';
import { isDesktop, isMobile, isTablet } from "react-device-detect";
// import SidebarBottom from './commons/sidebarbottom';
import 'leaflet/dist/leaflet.css';
import { Layer } from 'leaflet';




// Image
import citra from './assets/img/citra.PNG';
import street from './assets/img/street.PNG';
import legend from './commons/legend';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function RootApp({ datas, filter, openModal, getAllDatas, getSumDatas, toShow, sumDatas, legend }) {
    const [modalIsOpen, setIsOpen] = useState(openModal);
    const [view, setView] = useState([0.886691, 108.9576699])
    const [zoom, setZoom] = useState(11)
    const [sat, setSat] = useState(true)
    const [url, setUrl] = useState('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await getAllDatas()
        await getSumDatas()
    }

    const showSidebar = () => {
        if (isTablet) {
            document.querySelector('.sidebar').style.right = '20px'
        } else if (isMobile) {
            document.querySelector('.sidebar').style.bottom = '0'
        } else {
            document.querySelector('.sidebar').style.right = '25px'
            document.querySelector('.legend').style.height = '20vh'
        }

    }



    const styleLegend = (val) => {
        let color
        if (legend.length !== 0) {
            if (filter === 'kondisi') {
                legend.kondisi.map((data, i) => {
                    if (val.kondisi === data.name) {
                        color = data.color
                    }
                })
            } else if (filter === 'konstruksi') {
                legend.konstruksi.map((data, i) => {
                    if (val.konstruksi === data.name) {
                        color = data.color
                    }
                })
            } else if (filter === 'tipe_saluran') {
                legend.tipe_saluran.map((data, i) => {
                    if (val.tipe_saluran === data.name) {
                        color = data.color
                    }
                })
            }else if (filter === 'kondisi_saluran') {
                legend.kondisi_saluran.map((data, i) => {
                    if (val.kondisi_saluran === data.name) {
                        color = data.color
                    }
                })
            } else if (filter === 'jaringan') {
                legend.jaringan.map((data, i) => {
                    if (val.name === data.name) {
                        color = data.color
                    }
                })
            } else {
                return {
                    color: "#fdcb6e"
                }
            }
        }else{
            return {
                color: "#fdcb6e"
            }
        }

        return { color: color }
    }

    const over = (e) => {
        console.log(e)
    }

    const changeStyleMap = () => {
        setSat(!sat)
        if (sat) {
            setUrl('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw')
        } else {
            setUrl('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw')
        }
    }


    return (
        <div>
            <Sidebar />
            <Chart />
            {isDesktop ?  <Legend /> : ''}
           
            <MapContainer
                className="sidebar-map"
                center={view}
                zoom={12}
                scrollWheelZoom={true}
                // style={{ height: "100vh", width: "100vw", zIndex: openModal ? -100 : 1}}
                style={
                    openModal ?
                        { height: "100vh", width: "100vw", zIndex: -1 }
                        :
                        { height: "100vh", width: "100vw", zIndex: 1 }
                }
            >
                <LayersControl position="bottomleft" >
                    <LayersControl.BaseLayer checked={!sat} name="Sattelite">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer checked={sat} name="OpenStreetMap.BlackAndWhite">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>

                {datas.length === 0 ?
                    ""
                    :
                    <>
                        {datas.map((data, i) =>
                            <GeoJSON
                                key={i}
                                style={filter !== "" ? styleLegend(data) : {color: "blue"}}
                                data={JSON.parse(data.json).features}
                                onEachFeature={(feature, layer) => {
                                    layer.on('click', function (e) {
                                        toShow(data)
                                        showSidebar()
                                    })

                                    layer.on('mouseover', function (e) {
                                        e.target.setStyle({
                                            weight: 7
                                        })
                                    })

                                    layer.on('mouseout', function (e) {
                                        e.target.setStyle({
                                            weight: 3
                                        })
                                    })
                                }}
                            >
                            </GeoJSON>
                        )}
                    </>
                }
            </MapContainer>
            <div className="changemapstyle" onClick={changeStyleMap}>
                <img src={sat ? citra : street} />
            </div>
            <ButtonControl />
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas,
        openModal: app.openModal,
        sumDatas: app.sumDatas,
        filter: app.filter,
        legend: app.legend
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDatas: () => dispatch(getAllDatas()),
        getSumDatas: () => dispatch(getSumDatas()),
        toShow: (payload) => dispatch(toShow(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
