
import produce from 'immer'

const initialState = {
    userName:window.location.pathname.split('/')[1],
    userId:''
}

export default produce((state = initialState, action) => {
    switch (action.type) {
        case '[user] SET_USER_ID':
            state.userId=action.payload
        default:
            return state
    }
})