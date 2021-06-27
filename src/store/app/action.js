import axios from "axios"

export const storeAllDatas = (payload) => ({type: 'STORE_ALL_DATAS', datas: payload})
export const toShow = (payload) => ({type: 'TO_SHOW', datas: payload})
export const storeDatas = (payload, filter) => ({ type : 'CHANGE_DATAS', datas: payload, filter}) 
export const storeDatasSum = (payload) => ({type : 'CHANGE_DATAS_SUM', datas: payload})
export const OpenCloseModal = () => ({ type: 'CHANGE_MODAL' })
export const storeLegend = (payload) => ({ type: 'CREATE_LEGEND', datas: payload })
export const changeFilter = (payload) => ({ type: 'CHANGE_FILTER', datas: payload })
export const searchMode = (payload) => ({ type: 'SEARCH_ENABLE', datas: payload })
export const resetSearch = () => ({ type: 'RESET' })

const data = []

const apiAll = 'https://dinartech.com/drainase/public/api/getpolyline';
const apiSum = 'https://dinartech.com/drainase/public/api/getpolylinesum';

export const getAllDatas = () => {
    return (dispatch) => {
        axios.get(apiAll)
        .then((response) => {
            dispatch(storeAllDatas(response.data))
            data = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const getSumDatas = () => {
    return (dispatch) => {
        axios.get(apiSum)
        .then((response) => {
            dispatch(storeDatasSum(response.data))
            const kondisi = [],
                konstruksi = [],
                tipe_saluran = [],
                kondisi_saluran = [],
                jaringan = []
            
            if (response.data.length !== 0) {
                response.data.kondisi.map((data, i) =>
                    kondisi.push({
                        'name': data.kondisi,
                        'color': '#'+Math.floor(Math.random() * 16777215).toString(16)
                    })
                )
                response.data.konstruksi.map((data, i) =>
                    konstruksi.push({
                        'name': data.konstruksi,
                        'color': '#'+Math.floor(Math.random() * 16777215).toString(16)
                    })
                )
                response.data.tipe_saluran.map((data, i) =>
                    tipe_saluran.push({
                        'name': data.tipe_saluran,
                        'color': '#'+Math.floor(Math.random() * 16777215).toString(16)
                    })
                )
                response.data.kondisi_saluran.map((data, i) =>
                    kondisi_saluran.push({
                        'name': data.kondisi_saluran,
                        'color': '#'+Math.floor(Math.random() * 16777215).toString(16)
                    })
                )
                response.data.jaringan.map((data, i) =>
                    jaringan.push({
                        'name': data.name,
                        'color': '#'+Math.floor(Math.random() * 16777215).toString(16)
                    })
                )

                dispatch(storeLegend({
                    "kondisi": kondisi,
                    "konstruksi": konstruksi,
                    "tipe_saluran": tipe_saluran,
                    "kondisi_saluran": kondisi_saluran,
                    "jaringan": jaringan
                }))
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
}


// export const searchDataSum = () => {
//     return (dispatch) = () => {

//     }
// }
