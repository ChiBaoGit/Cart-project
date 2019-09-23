import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';
class MessageContainer extends Component {
    render() {
        var {message} = this.props;
        return (
            <Message message={message}/>
        );
    }
}
MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}
const mapStaeToProps=(state)=>{
    return{
        message: state.Message
    }
}
export default connect(mapStaeToProps,null)(MessageContainer);
