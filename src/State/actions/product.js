import { SET_PRODUCTS } from '../../constants/actionType'

const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
export { setProducts }