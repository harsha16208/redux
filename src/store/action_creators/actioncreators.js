import { ACTIONTYPES } from "../action_types/actiontypes"

export function getProducts(products)
{
    return {
        type:ACTIONTYPES.GET_PRODUCTS,
        payload:products
    }
}

export function setProduct(product)
{
    return {
        type:ACTIONTYPES.SET_PRODUCT,
        payload:product
    }
}

export function removeSelectedProduct()
{
    return{
        type:ACTIONTYPES.CLEAR_PRODUCT
    }
}