import {configureStore} from '@reduxjs/toolkit'
import { ParticipantReducer, ProductsReducer, StepReducer, UsingReducer } from './reducers'

export const Store = configureStore({
    reducer: {
        participants: ParticipantReducer,
        steps: StepReducer,
        products: ProductsReducer,
        usings: UsingReducer
}})

export default Store
