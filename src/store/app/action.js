
import T1 from './assets/1.json'; 
import T2 from './assets/2.json';
import T3 from './assets/3.json';
import T4 from './assets/4.json';
import T5 from './assets/5.json';
import T6 from './assets/6.json';
import T7 from './assets/7.json';
import T8 from './assets/8.json';
import T9 from './assets/9.json';
import T10 from './assets/10.json';
import T11 from './assets/11.json';
import T12 from './assets/12.json';
import T13 from './assets/13.json';
import T14 from './assets/14.json';
import T15 from './assets/15.json';
import T16 from './assets/16.json';
import T17 from './assets/17.json';
import T18 from './assets/18.json';
import T19 from './assets/19.json';
import T20 from './assets/20.json';
import T21 from './assets/21.json';
import T22 from './assets/22.json';
import T23 from './assets/23.json';
import T24 from './assets/24.json';
import T25 from './assets/25.json';
import T26 from './assets/26.json';
import T27 from './assets/27.json';
import T28 from './assets/28.json';
import T29 from './assets/29.json';
import T30 from './assets/30.json';


const dummy = [
    {
        data: T1,
        kondisi: "Sangat Baik",
        konstruksi: "Batu"
    },
    {
        data: T2,
        kondisi: "Sangat Baik",
        konstruksi: "Campuran"
    },
    {
        data: T3,
        kondisi: "Rusak",
        konstruksi: "Tanah"
    },
    {
        data: T4,
        kondisi: "Baik",
        konstruksi: "Batu Campuran"
    },
    {
        data: T5,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T5,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T6,
        kondisi: "Sangat Baik",
        konstruksi: "Campuran"
    },
    {
        data: T7,
        kondisi: "Rusak",
        konstruksi: "Tanah"
    },
    {
        data: T8,
        kondisi: "Baik",
        konstruksi: "Batu Campuran"
    },
    {
        data: T9,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T10,
        kondisi: "Sangat Baik",
        konstruksi: "Batu"
    },
    {
        data: T11,
        kondisi: "Sangat Baik",
        konstruksi: "Campuran"
    },
    {
        data: T12,
        kondisi: "Rusak",
        konstruksi: "Tanah"
    },
    {
        data: T13,
        kondisi: "Cukup Baik",
        konstruksi: "Batu Campuran"
    },
    {
        data: T14,
        kondisi: "Baik",
        konstruksi: "Tanah"
    },
    {
        data: T15,
        kondisi: "Rusak",
        konstruksi: "Batu Campuran"
    },
    {
        data: T16,
        kondisi: "Baik",
        konstruksi: "Tanah"
    },
    {
        data: T17,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T18,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T19,
        kondisi: "Rusak",
        konstruksi: "Batu"
    },
    {
        data: T20,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T21,
        kondisi: "Baik",
        konstruksi: "Batu Campuran"
    },
    {
        data: T22,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T23,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T24,
        kondisi: "Baik",
        konstruksi: "Tanah"
    },
    {
        data: T25,
        kondisi: "Baik",
        konstruksi: "Batu"
    },
    {
        data: T26,
        kondisi: "Baik",
        konstruksi: "Tanah"
    },
    {
        data: T27,
        kondisi: "Baik",
        konstruksi: "Tanah"
    },
    {
        data: T28,
        kondisi: "Baik",
        konstruksi: "Tanah"
    },
    {
        data: T29,
        kondisi: "Baik",
        konstruksi: "Campuran"
    },
    {
        data: T30,
        kondisi: "Baik",
        konstruksi: "Beton"
    },
]

export const storeDatas = (payload, filter) => ({ type : 'CHANGE_DATAS', datas: payload, filter}) 
export const OpenCloseModal = () => ({ type: 'CHANGE_MODAL' })

export const changeDatas = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch(storeDatas([...dummy], payload))
    }
}