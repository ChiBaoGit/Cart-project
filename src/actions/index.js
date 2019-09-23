import * as types from './../constants/ActionsType';
export const addCart=(product, quantity)=>{
    return{
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const deleteProductCart=(id)=>{
    return {
        type: types.DELETE_PRODUCT_TO_CART,
        id
    }
}
export const onChangeMessage=(message)=>{
    return{
        type: types.ON_CHANGE_MESSAGE,
        message
    }
}
export const onUpdateProduct=(id,quantity)=>{
    return{
        type: types.UPDATE_PRODUCT,
        id,
        quantity
    }
}
