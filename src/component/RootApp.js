import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet';
import { connect } from "react-redux";
import Modal from 'react-modal';
import Sidebar from './commons/sidebar';
import ButtonControl from './commons/buttoncontrol';
import { getAllDatas, toShow } from './../store/app/action';
import { isMobile, isTablet } from "react-device-detect";
// import SidebarBottom from './commons/sidebarbottom';
import 'leaflet/dist/leaflet.css';
import { Layer } from 'leaflet';

// Image
import citra from './assets/img/citra.PNG';
import street from './assets/img/street.PNG';

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

function RootApp({ datas, filter, openModal, getAllDatas, toShow }) {
    const [modalIsOpen, setIsOpen] = useState(openModal);
    const [view, setView] = useState([0.886691, 108.9576699])
    const [zoom, setZoom] = useState(11)
    const [sat, setSat] = useState(true)
    const [url, setUrl] = useState('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw')

    useEffect(() => {
        getAllDatas()
    }, [])


    const getDatas = () => {
        console.log(datas)
    }

    const showSidebar = () => {
       if(isTablet){
            document.querySelector('.sidebar').style.right = '20px'
        }else if(isMobile){
            document.querySelector('.sidebar').style.bottom = '0'
        }else{
            document.querySelector('.sidebar').style.right = '20px'
        }
       
    }

    const styleKondisi = (kondisi) => {
        if (kondisi === "Sangat Baik") {
            return {
                color: '#4cd137'
            }
        } else if (kondisi === "Cukup Baik") {
            return {
                color: '#0097e6'
            }
        } else if (kondisi === "Baik") {
            return {
                color: '#8c7ae6'
            }
        } else {
            return {
                color: '#e84118'
            }
        }
    }

    const styleKonstruksi = (konstruksi) => {
        if (konstruksi === "Beton") {
            return {
                color: '#4cd137'
            }
        } else if (konstruksi === "Campuran") {
            return {
                color: '#0097e6'
            }
        } else {
            return {
                color: '#e84118'
            }
        }
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
                {/* <TileLayer
                    url={url}
                    attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a> - Databse irigasi PUPR Kota Singkawang'
                /> */}
                    <LayersControl position="bottomleft" >
                        <LayersControl.BaseLayer checked={sat} name="Sattelite">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw"
                            />
                        </LayersControl.BaseLayer>
                        <LayersControl.BaseLayer checked={!sat} name="OpenStreetMap.BlackAndWhite">
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
                                style={
                                    filter === 'kondisi' ? styleKondisi(data.kondisi) : styleKonstruksi(data.konstruksi)
                                }
                                data={JSON.parse(data.json).features}
                                onEachFeature={(feature, layer) => {
                                    layer.on('click', function (e) {
                                        toShow(data)
                                        showSidebar()
                                        // setView(e.latlng)
                                        // setZoom(2)
                                        // e.target.setStyle({
                                        //     weight: 10
                                        // })
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
                <img src={sat ? street : citra} />
            </div>
            <ButtonControl />
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas,
        openModal: app.openModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllDatas: () => dispatch(getAllDatas()),
        toShow: (payload) => dispatch(toShow(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
