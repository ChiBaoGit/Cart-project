import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from './../components/Cart';
import PropTypes from 'prop-types';
import *as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from '../components/CartResult';
import * as actions from './../actions/index';
class CartContainer extends Component {
    render() {
        var {cart} = this.props;
        return (
            <Cart>{this.showCart(cart)}{this.showTotalAmount(cart)}</Cart>
        );
    }
    showCart=(cart)=>{
        var result = <tr><th>{Message.MSG_CART_EMPTY}</th></tr>;
        if(cart.length > 0){
            result = cart.map((item,index)=>{
                return (<CartItem item={item} key ={index} 
                    onDeleteProductInCart={this.props.onDeleteProduct} 
                    onChangeMessage={this.onChangeMessage}
                    onUpdateProductInCart={this.props.onUpdateProduct}
                    />);
            })
        }
        return result;
    }
    showTotalAmount=(cart)=>{
        var result = null;
        if(cart.length >0){
            return <CartResult cart={cart}/>
        }
        return result;
    }
    // onDeleteProduct=(id)=>{
    //     this.props.onDeleteProduct(id);
    // }
    onChangeMessage=(message)=>{
        console.log(message);
        this.props.onChangeMessage(message);
    }
}
CartContainer.propTypes = {
   cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id : PropTypes.number.isRequired,
                name:PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                inventory:PropTypes.number.isRequired,
                rating:PropTypes.number.isRequired
    
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })

    ).isRequired,
    onDeleteProduct:PropTypes.func.isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onUpdateProduct:PropTypes.func.isRequired
}
const mapStaeToProps=(state)=>{
    return{
        cart: state.Cart
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onDeleteProduct:(id)=>{
            dispatch(actions.deleteProductCart(id))
        },
        onChangeMessage:(message)=>{
            dispatch(actions.onChangeMessage(message))
        },
        onUpdateProduct:(id,quantity)=>{
            dispatch(actions.onUpdateProduct(id,quantity))
        }
    }
}
export default connect(mapStaeToProps,mapDispatchToProps)(CartContainer);
