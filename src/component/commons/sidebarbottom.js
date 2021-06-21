import React from 'react';
import './../style/style.css';
import { connect } from "react-redux";
import Card from './card';
import Button from './button';

import { changeDatas, filter, OpenCloseModal } from './../../store/app/action';

function Sidebar({ changeDatas, filter, OpenCloseModal }) {

    const getAllDatas = (filter) => {
        changeDatas(filter)
    }

    return (
        <div className="sidebar-bottom">
            LEGENDA
            <div>
                {filter === "kondisi" ? "Pewarnaan berdasarkan kondisi" : "Pewarnaan berdasarkan konstruksi"}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '10px 0px 10px 0px'
                }}>
                {filter === 'kondisi' ?
                    <>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '10px 0px 10px 0px'
                            }} >
                            <div style={{ width: '60%' }}>
                                Sangat Baik
                    </div>
                            <div style={{ width: '30%' }}>
                                <hr
                                    style={{ color: 'red', borderWidth: 3, backgroundColor: '#4cd137', borderColor: '#4cd137' }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '10px 0px 10px 0px'
                            }} >
                            <div style={{ width: '60%' }}>
                                Cukup Baik
                    </div>
                            <div style={{ width: '30%' }}>
                                <hr
                                    style={{ color: 'red', borderWidth: 3, backgroundColor: '#0097e6', borderColor: '#0097e6' }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '10px 0px 10px 0px'
                            }} >
                            <div style={{ width: '60%' }}>
                                Baik
                    </div>
                            <div style={{ width: '30%' }}>
                                <hr
                                    style={{ color: 'red', borderWidth: 3, backgroundColor: '#8c7ae6', borderColor: '#8c7ae6' }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '10px 0px 10px 0px'
                            }} >
                            <div style={{ width: '60%' }}>
                                Rusak
                    </div>
                            <div style={{ width: '30%' }}>
                                <hr
                                    style={{ color: 'red', borderWidth: 3, backgroundColor: '#e84118', borderColor: '#e84118' }}
                                />
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '10px 0px 10px 0px'
                            }} >
                            <div style={{ width: '60%' }}>
                                Beton
                    </div>
                            <div style={{ width: '30%' }}>
                                <hr
                                    style={{ color: 'red', borderWidth: 3, backgroundColor: '#4cd137', borderColor: '#4cd137' }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '10px 0px 10px 0px'
                            }} >
                            <div style={{ width: '60%' }}>
                                Campuran
                    </div>
                            <div style={{ width: '30%' }}>
                                <hr
                                    style={{ color: 'red', borderWidth: 3, backgroundColor: '#0097e6', borderColor: '#0097e6' }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                margin: '10px 0px 10px 0px'
                            }} >
                            <div style={{ width: '60%' }}>
                                Tanah
                    </div>
                            <div style={{ width: '30%' }}>
                                <hr
                                    style={{ color: 'red', borderWidth: 3, backgroundColor: '#8c7ae6', borderColor: '#8c7ae6' }}
                                />
                            </div>
                        </div>
                    </>

                }
            </div>
            <Button
                label="Lihat Data"
                type="primaryx"
                color="#6c5ce7"
                click={() => OpenCloseModal()}
                disable={false}
            />
        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas,
        filter: app.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDatas: (payload) => dispatch(changeDatas(payload)),
        OpenCloseModal: () => dispatch(OpenCloseModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
