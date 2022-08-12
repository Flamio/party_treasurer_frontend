import { StepConsts } from "../consts"

const initState = {
    names: ["Участники", "Продукты", "Использование",
        "Подсчет"], current: 0
}

export const StepReducer = (state = initState, action) => {

    switch (action.type) {

        case StepConsts.NEXT_STEP:
            console.log("set step" + state.current)
            return { ...state, current: state.current === state.names.length - 1 ? state.current : state.current + 1 }

        case StepConsts.PREV_STEP:
            console.log("set step" + state.current)
            return { ...state, current: state.current === 0 ? state.current : state.current - 1 }

        case StepConsts.SET_STEP:
            console.log("set step" + action.step)
            return { ...state, current: Number(action.step) }

        default:
            return state
    }

}