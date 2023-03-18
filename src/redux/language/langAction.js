import {LANG_CHANGE} from './langTypes'

export const languageChange=language=>{
    return{
        type:LANG_CHANGE,
        payload:language
    }
}