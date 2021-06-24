const initialState = {
    datas: [],
    filter: '',
    openModal: false,
    toShow: [],
    sumDatas: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_ALL_DATAS':
            return{
                ...state,
                datas : action.datas,
            }
        case 'CHANGE_DATAS':
            return{
                ...state,
                datas : action.datas,
                filter : action.filter
            }
        case 'CHANGE_MODAL':
            return{
                ...state,
                openModal: !state.openModal
            }
        case 'TO_SHOW':
            return{
                ...state,
                toShow: action.datas
            }
        case 'CHANGE_DATAS_SUM':
            return{
                ...state,
                sumDatas: action.datas
            }
        default:
            return state
        
    }
}