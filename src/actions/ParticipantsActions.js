import { ParticipantsConsts } from "../consts"

export const ParticipantsActions = {
    increase,
    remove,
    setName
}

function increase() {
    return { type: ParticipantsConsts.INCREASE_PARTICIPANTS }
}

function remove(index) {
    return { type: ParticipantsConsts.DECREASE_PARTICIPANTS, index }
}

function setName(name, index) {
    console.log(name)
    console.log(index)
    return { type: ParticipantsConsts.SET_NAME, index , name}
}