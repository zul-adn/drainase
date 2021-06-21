import React from 'react';
import './../style/style.css';
import { connect } from "react-redux";
import Card from './card';
import Button from './button';

import { changeDatas } from './../../store/app/action';

function Sidebar({changeDatas}) {

    const getAllDatas = (filter) => {
        changeDatas(filter)
    }

    return (
        <div className="sidebar">
            
            {/* <div class="tab">
                <button class="tablinks"  id="defaultOpen">London</button>
                <button class="tablinks" >Paris</button>
                <button class="tablinks" >Tokyo</button>
            </div> */}
            <Card
            // type="primary"
            >
                <div className="card-body">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bolder',
                        fontSize: 18
                    }}>
                        Kondisi
                    </div>
                    <div className="data-container">
                        <div class="data-item">
                            <div style={{
                                fontSize: 30
                            }}>
                                2500
                                </div>
                            <div>
                                Baik
                                </div>
                        </div>
                        <div class="data-item">
                            <div style={{
                                fontSize: 30
                            }}>
                                2352
                                </div>
                            <div>
                                Rusak
                                </div>
                        </div>
                        <div class="data-item">
                            <div style={{
                                fontSize: 30
                            }}>
                                99817
                                </div>
                            <div s>
                                Buruk
                                </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        padding: 10,
                    }}
                >
                    <Button
                        label="Tampilkan di Peta"
                        type="primary"
                        color="#6c5ce7"
                        click={() => getAllDatas("kondisi")}
                        disable={false}
                    />
                    {/* <Button
                        label="Export Excel"
                        type="primaryx"
                        color="#6c5ce7"
                        click={() => alert("a")}
                        disable={false}
                    /> */}
                </div>
            </Card>

            <Card
            // type="primary"
            >
                <div className="card-body">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: 'bolder',
                        fontSize: 18
                    }}>
                        Konstruksi
                    </div>
                    <div className="data-container">
                        <div class="data-item">
                            <div style={{
                                fontSize: 30
                            }}>
                                1250
                                </div>
                            <div>
                                Beton
                                </div>
                        </div>
                        <div class="data-item">
                            <div style={{
                                fontSize: 30
                            }}>
                                6000
                                </div>
                            <div>
                                Campuran
                                </div>
                        </div>
                        <div class="data-item">
                            <div style={{
                                fontSize: 30
                            }}>
                                200
                                </div>
                            <div s>
                                Tanah
                                </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        padding: 10,
                    }}
                >
                    <Button
                        label="Tampilkan di Peta"
                        type="primary"
                        color="#6c5ce7"
                        click={() => getAllDatas("konstruksi")}
                        disable={false}
                    />
                   
                </div>
            </Card>

        </div>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        datas: app.datas
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeDatas : (payload) => dispatch(changeDatas(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
