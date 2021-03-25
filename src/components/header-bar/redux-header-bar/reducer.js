import initHeaderBardState from './init-state'
import {GET_TITLE} from './type'

const headerBarReducer = (state = initHeaderBardState, action) => {
    switch (action.type) {
        case GET_TITLE:
            console.log('get_title détécté')
            return {
                ...state,
                title: "test nouveau titre"
            }
            break
    
        default: return state
    }
}

export default headerBarReducer