import React from 'react';
import { connect } from 'react-redux';
import MapsPage from './../component/pages/map';
import General from './../component/pages/general';

function RootApp({ isLanding }) {
    return (
        <>
            {isLanding ? <General /> : <MapsPage />}
        </>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        isLanding: app.isLanding,
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp)
