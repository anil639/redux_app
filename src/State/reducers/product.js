import { SET_PRODUCTS } from '../../constants/actionType'

const INIT_STATE = []

const productReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return [...action.payload]
        default:
            return state
    }
}

export default productReducer