import { ParticipantsConsts } from "../consts";

export const ParticipantReducer = (state = ["", ""], action) => {
    switch (action.type) {
        case ParticipantsConsts.INCREASE_PARTICIPANTS:
            return [...state, ""]

        case ParticipantsConsts.DECREASE_PARTICIPANTS:            
            console.log(action.index)
            return state.length > 2 ? state.filter((v, index) => index !== action.index) : state

        case ParticipantsConsts.SET_NAME:
            return state.map((p,index) => index === action.index ? action.name : p)

        default: return state
    }
}