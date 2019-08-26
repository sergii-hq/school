export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT';
export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT';
export const REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT = 'REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT';

export function setEmailText(email) {
    return {
        type: REGISTRATION_CHANGE_EMAIL_TEXT,
        payload: email
    }
}

export function setPasswordText(password) {
    return {
        type: REGISTRATION_CHANGE_PASSWORD_TEXT,
        payload: password
    }
}

export function setRepeatPasswordText(repeatPassword) {
    return {
        type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
        payload: repeatPassword
    }
}
