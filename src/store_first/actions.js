import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME} from '../index'

export function actionChangeFirstName(newFirstName) {
    return {
        type: ACTION_CHANGE_FIRST_NAME,
        payload: newFirstName
    }
}

export function actionChangeSecondName(newSecondName) {
    return {
        type: ACTION_CHANGE_SECOND_NAME,
        payload: newSecondName
    }
}
