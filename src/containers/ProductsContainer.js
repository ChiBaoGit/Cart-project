import React, { Component } from 'react';
import Products from './../components/Products';
import {connect} from 'react-redux';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import *as actions from './../actions/index';
class ProductsContainer extends Component {
    render() {
        var {products} = this.props;
        return (
            <Products >{this.showProducts(products)}</Products>
        );
    }
    showProducts(products){
        var result = null;
        if(products.length>0){
          result = products.map((product,index)=>{
              return <Product key={index} product={product} onAddToCart={this.addToCart} onChangeMessage={this.onAddToCartSuccess}/>
          })
        }
          return result;
     }
    addToCart=(product)=>{
        this.props.addToCart(product);
    }
    onAddToCartSuccess=(message)=>{
        this.props.onAddToCartSuccess(message)
    }
}
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired

        })
    ).isRequired,
    onAddToCartSuccess : PropTypes.func.isRequired,
    addToCart : PropTypes.func.isRequired
}
const mapStaeToProps=(state)=>{
    return{
        products: state.product,
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        addToCart:(product)=>{
            dispatch(actions.addCart(product,1))
        },
        onAddToCartSuccess:(message)=>{
            dispatch(actions.onChangeMessage(message)) 
        }
    }
}
export default connect(mapStaeToProps,mapDispatchToProps)(ProductsContainer);
