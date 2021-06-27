import React from 'react';
import ReactExport from "react-export-excel";
import { connect } from "react-redux";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];


function Excel({sumDatas}) {

    React.useEffect(() => {
        console.log(sumDatas)
    })

    return (
        <ExcelFile>
            <ExcelSheet data={sumDatas.all} name="Employees">
                <ExcelColumn label="Nama Jaringan" value="nama_jaringan" />
                <ExcelColumn label="Panjang Jaringan" value="panjang" />
            </ExcelSheet>
        </ExcelFile>
    )
}

const mapStateToProps = ({ app }) => {
    return {
        sumDatas: app.sumDatas,
        datas: app.datas
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Excel);
