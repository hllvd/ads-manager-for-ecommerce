import { IFormData } from "../models/FormData"
export const clearNullProperties = (json: Object) => {
    return Object.fromEntries(Object.entries(json).filter(e => Boolean(e[1])))
}

export const formStateSuiter = (json: Object, { submit, formEl }: any): IFormData => {
    const action: string = formEl && formEl.action
    return { values: json, submit, action }
}
