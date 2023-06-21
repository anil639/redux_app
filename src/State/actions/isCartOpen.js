import { OPEN_CART, CLOSE_CART } from '../../constants/actionType'

const openCart = () => {
    return {
        type: OPEN_CART
    }
}
const closeCart = () => {
    return {
        type: CLOSE_CART
    }
}
export { openCart, closeCart }