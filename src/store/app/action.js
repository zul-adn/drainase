import axios from "axios"

export const storeAllDatas = (payload) => ({type: 'STORE_ALL_DATAS', datas: payload})
export const storeDatas = (payload, filter) => ({ type : 'CHANGE_DATAS', datas: payload, filter}) 
export const OpenCloseModal = () => ({ type: 'CHANGE_MODAL' })

const apiAll = 'https://dinartech.com/drainase/public/api/getpolyline';
const urlJson = "https://dinartech.com/drainase/public/file/";

export const getAllDatas = () => {
    return (dispatch) => {
        axios.get(apiAll)
        .then((response) => {
            dispatch(storeAllDatas(response.data))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}