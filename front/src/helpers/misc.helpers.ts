import { IFormDate } from "../models/FormData"
export const clearNullProperties = (json: Object) => {
    return Object.fromEntries(Object.entries(json).filter(e => Boolean(e[1])))
}

export const formStateSuiter = (json: Object, toBeSent: boolean = false) => {
    return { data: json, submit: true }
}
export const adaptFormToBeSent = (json: Object) => {
    let form: IFormDate;
    form = { values: json, submit: true }
    return form
}