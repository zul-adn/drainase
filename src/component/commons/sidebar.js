import React from 'react';
import './../style/style.css';
import { connect } from "react-redux";
import Card from './card';
import Button from './button';


function Sidebar() {
    return (
        <div className="sidebar">
            asas
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
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
