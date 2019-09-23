import * as types from './../constants/ActionsType';
import * as MSG from './../constants/Message';
var initialState =MSG.MSG_WELLCOME;
const Message = (state = initialState, action) => {
    switch (action.type) {
        case types.ON_CHANGE_MESSAGE:
            return action.message;
        default: return state
    }
}
export default Message;