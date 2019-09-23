import {combineReducers} from 'redux';
import product from './product';
import Cart from './Cart';
import Message from './Message';

const appReducers = combineReducers({
    product: product,
    Cart,
    Message
})
export default appReducers;