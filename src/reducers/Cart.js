import * as types from './../constants/ActionsType';
var Data = JSON.parse(localStorage.getItem('CART'));
var initialState = Data ? Data : [];
const Cart = (state = initialState, action) => {
    var index=null;
    switch (action.type) {
        case types.ADD_TO_CART:
            // console.log(action);
            index = findIndex(state,action.product.id);
            if(index !== -1){
                state[index].quantity += action.quantity;
            }
            else{
                var products = {
                    product: action.product,
                    quantity: action.quantity
                }
                state.push(products);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_TO_CART:
            index = findIndex(state,action.id);
            // console.log(index);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        case types.UPDATE_PRODUCT:
            index = findIndex(state,action.id);
            if(index !==-1){
                state[index].quantity = action.quantity;
            }
            return [...state];
        default: return [...state]
    }
}
var findIndex =(cart,id)=>{
        var result = -1;
        if(cart.length >0){
            cart.forEach((products,index) => {
                if(products.product.id === id){
                    result = index;
                }
            });
        }
        return result;
}
export default Cart;