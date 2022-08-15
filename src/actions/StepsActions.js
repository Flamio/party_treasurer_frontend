import { StepConsts } from "../consts"

export const StepsActions = {
    nextStep,
    prevStep,
    setStep,
    setValidated,
    setInvalid
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

function setValidated(validated) {
    return {type: StepConsts.SET_VALIDATED, validated}
}

function setInvalid(invalid) {
    return {type: StepConsts.SET_INVALID, invalid}
}

