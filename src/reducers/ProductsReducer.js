import { ProductsConsts } from "../consts/ProductsConsts"

const product = { name: "", price: "", owner: "" }

export const ProductsReducer = (state = [Object.assign({}, product), Object.assign({}, product)], action) => {
    switch (action.type) {
        case ProductsConsts.ADD:
            console.log(action)
            return [...state, Object.assign({}, product)]

        case ProductsConsts.REMOVE:
            console.log(action)
            return state.length === 2 ? state : state.filter((p, index) => index !== action.index)


        case ProductsConsts.CHANGE_NAME:
            console.log(action)
            return state.map((p, index) => index === action.index ? { ...p, name: action.name } : p)

        case ProductsConsts.CHANGE_OWNER:
            console.log(action)
            return state.map((p, index) => index === action.index ? { ...p, owner: action.owner } : p)

        case ProductsConsts.CHANGE_PRICE:
            console.log(action)
            return state.map((p, index) => index === action.index ? { ...p, price: action.price } : p)

        default: return state
    }
}