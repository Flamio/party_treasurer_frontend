import {configureStore} from '@reduxjs/toolkit'
import { ParticipantReducer, ProductsReducer, StepReducer } from './reducers'

export const Store = configureStore({
    reducer: {
        participants: ParticipantReducer,
        steps: StepReducer,
        products: ProductsReducer
}})

export default Store
