import { UsingConsts } from "../consts";

export const UsingReducer = (state = {}, action) => {
    switch (action.type) {
        
        case UsingConsts.CLEAR:
            console.log("clear")
            return {}

        case UsingConsts.INIT:
            console.log("init")
            return { ...state, [action.participant]: action.values }

        case UsingConsts.ADD_USING:
            console.log(state)
            return { ...state, [action.participant]: [...state[action.participant], ""] }

        case UsingConsts.EDIT_USING:
            console.log(action)
            return { ...state, [action.participant]: state[action.participant].map((p, index) => index === action.index ? action.product : p) }

        case UsingConsts.REMOVE_USING:
            return {
                ...state, [action.participant]: state[action.participant].length === 1 ? state[action.participant] :
                    state[action.participant].slice(0, state[action.participant].length - 1)
            }

        default: return state
    }
}