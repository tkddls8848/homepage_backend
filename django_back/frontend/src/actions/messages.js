import {CREATE_MESSAGE, GET_ERRORS} from './types'

//CREATE MESSAGE
export const createMessages = msg => {
    return{
        type: CREATE_MESSAGE,
        payload:msg
    }
}

// RETURN ERROR
export const returnErrors = (msg, status) => {
    return{
        type: GET_ERRORS,
        payload: { msg, status }
    }
}