import { ProductsConsts } from "../consts/ProductsConsts"

export const ProductsActions = {
    add,
    remove,
    changeName,
    changeOwner,
    changePrice
}

function add () {
    return {type: ProductsConsts.ADD}
}

function remove (index) {
    return {type: ProductsConsts.REMOVE, index}
}

function changeName(name, index) {
    return {type: ProductsConsts.CHANGE_NAME, name, index}
}

function changePrice(price, index) {
    return {type: ProductsConsts.CHANGE_PRICE, price, index}
}

function changeOwner(owner, index) {
    return {type: ProductsConsts.CHANGE_OWNER, owner, index}
}