import isEmpty from 'lodash/isEmpty'

const initialState = {
    isAuthenticated: false,
    user: {},
    merchant: false
}

const auth = (state = initialState, action = {}) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
        return {
           isAuthenticated: !isEmpty(action.user),
           user:action.user,
           merchant: false
        }

        default: return state;
    }
}

export default auth;