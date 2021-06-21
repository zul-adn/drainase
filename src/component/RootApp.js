import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { connect } from "react-redux";
import Modal from 'react-modal';
// import Sidebar from './commons/sidebar';
import {getAllDatas} from './../store/app/action';
// import SidebarBottom from './commons/sidebarbottom';
import 'leaflet/dist/leaflet.css';

const jsonPath = 'https://dinartech.com/drainase/public/file/';

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

function RootApp({ datas, filter, openModal, getAllDatas }) {
    const [modalIsOpen, setIsOpen] = useState(openModal);

    useEffect(() => {
        getAllDatas()
    }, [])


    const getDatas = () => {
        console.log(datas)
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

    return (
        <div>
            <MapContainer
                className="sidebar-map"
                center={[0.886691, 108.9576699]}
                zoom={11}
                scrollWheelZoom={true}
                // style={{ height: "100vh", width: "100vw", zIndex: openModal ? -100 : 1}}
                style={
                    openModal ? 
                        {height: "100vh", width: "100vw", zIndex: -1}
                        :
                        {height: "100vh", width: "100vw", zIndex: 1}
                }
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw`}
                    attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a> - Databse irigasi PUPR Kota Singkawang'
                />

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
                            >
                                <Popup>
                                   
                                </Popup>
                            </GeoJSON>
                        )}
                    </>
                }
            </MapContainer>
            <Modal
                isOpen={openModal}
                onRequestClose={openModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                // 
            >
               
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form> */}
            </Modal>
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
        getAllDatas : () => dispatch(getAllDatas())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);
