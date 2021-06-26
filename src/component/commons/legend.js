import React from 'react';
import { connect } from "react-redux";
import { changeFilter } from './../../store/app/action';
import './../style/style.css';

function Legend({ changeFilter, filter, legend }) {

    const changeFilters = (val) => {
        console.log(val)
        changeFilter(val)
    }

    const Content = () => {

        if (filter === "kondisi") {
            return (
                <>
                    {legend.length !== 0 ?
                        legend.kondisi.map((data, i) =>
                            <div className="legend-item">
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
                            <div className="legend-item">
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
                            <div className="legend-item">
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
                            <div className="legend-item">
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
                            <div className="legend-item">
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
            <div className="content">
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
        filter: app.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeFilter: (payload) => dispatch(changeFilter(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
