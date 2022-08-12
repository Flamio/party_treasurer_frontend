import { StepConsts } from "../consts"

export const StepsActions = {
    nextStep,
    prevStep,
    setStep
}

function nextStep() {
    return {type: StepConsts.NEXT_STEP}
}

function prevStep() {
    return {type: StepConsts.PREV_STEP}
}

function setStep(step) {
    return {type: StepConsts.SET_STEP, step}
}