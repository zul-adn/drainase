const initialState = {
    datas: [],
    filter: '',
    openModal: false,
    toShow: [],
    sumDatas: [],
    legend: [],
    searchMode: false,
    searchData: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_ALL_DATAS':
            return {
                ...state,
                datas: action.datas,
            }
        case 'CHANGE_DATAS':
            return {
                ...state,
                datas: action.datas,
                filter: action.filter
            }
        case 'CHANGE_MODAL':
            return {
                ...state,
                openModal: !state.openModal
            }
        case 'TO_SHOW':
            return {
                ...state,
                toShow: action.datas
            }
        case 'CHANGE_DATAS_SUM':
            return {
                ...state,
                sumDatas: action.datas
            }
        case 'CREATE_LEGEND':
            return {
                ...state,
                legend: action.datas
            }
        case 'CHANGE_FILTER':
            return {
                ...state,
                filter: action.datas
            }
        case 'SEARCH_ENABLE':
            return{
                ...state,
                searchData: action.datas,
                searchMode: true,
            }
        case 'RESET':
            return{
                ...state,
                searchMode: false,
            }
        default:
            return state

    }
}