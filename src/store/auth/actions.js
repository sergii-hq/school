export const AUTH_CHANGE_EMAIL_TEXT = 'AUTH_CHANGE_EMAIL_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';

export function setEmailText(email) {
    return {
        type: AUTH_CHANGE_EMAIL_TEXT,
        payload: email
    }
}

export function setPasswordText(password) {
    return {
        type: AUTH_CHANGE_PASSWORD_TEXT,
        payload: password
    }
}
