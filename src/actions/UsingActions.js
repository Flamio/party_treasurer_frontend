import { UsingConsts } from "../consts"

export const UsingActions = {
    add,
    edit,
    remove
}

function add(participant){

    return {type: UsingConsts.ADD_USING, participant}

}

function edit(participant, index, product){

    return {type: UsingConsts.EDIT_USING, participant, index, product}

}

function remove(participant) {
    return {type: UsingConsts.REMOVE_USING, participant}
}