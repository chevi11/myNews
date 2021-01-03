

import produce from 'immer'

const initialState = {
    isOpenConfigurator: true,
    thumbtack: false,
         
}

export default produce((state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_OPEN_CON':
            return { ...state, isOpenConfigurator: action.payload }
        case 'SET_THUMBTACK':
            // return { ...state, thumbtack: action.payload }
            state.thumbtack = action.payload
            return state

        
        default:
            return state
    }



})