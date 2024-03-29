import {AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT} from "./actions";

const initialState = {
    email: '',
    password: ''
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_CHANGE_EMAIL_TEXT:
            return {...state, email: action.payload};

        case AUTH_CHANGE_PASSWORD_TEXT:
            return {...state, password: action.payload};
    }
    return state;
}
