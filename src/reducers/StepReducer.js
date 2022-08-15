import { StepConsts } from "../consts"

const initState = {
    names: ["Участники", "Продукты", "Использование",
        "Подсчет"], current: 0, validated: false, invalid: false
}

export const StepReducer = (state = initState, action) => {

    switch (action.type) {

        case StepConsts.NEXT_STEP:
            console.log("set step" + state.current)
            return { ...state, validated: false, current: state.current === state.names.length - 1 ? state.current : state.current + 1 }

        case StepConsts.PREV_STEP:
            console.log("set step" + state.current)
            return { ...state, validated: false, current: state.current === 0 ? state.current : state.current - 1 }

        case StepConsts.SET_STEP:
            console.log("set step" + action.step)
            return { ...state, validated: false, current: Number(action.step) }

        case StepConsts.SET_VALIDATED:
            console.log("set validated " + action)
            return { ...state, validated: action.validated }

        case StepConsts.SET_INVALID:
            console.log("set invalid " + action)
            return { ...state, invalid: action.invalid }

        default:
            return state
    }

}