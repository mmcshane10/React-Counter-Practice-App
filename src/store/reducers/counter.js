import * as actionTypes from '../Actions';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_FIVE:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT_FIVE:
            return {
                ...state,
                counter: state.counter - action.val
            }
    }
    return state
};

export default reducer;