const initialState = {
    datas: [],
    filter: '',
    openModal: false
}

export default (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state
        
    }
}