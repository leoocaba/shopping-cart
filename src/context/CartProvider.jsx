import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = []

const buysReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CART] Agregar compra':
            return [...state, action.payload]

        case '[CART] Incrementar cantidad compra':

            break;

        case '[CART] Disminuir cantidad compra':

            break;

        case '[CART] Eliminar compra':
            return state.filter(buys => buys.id !== action.payload)

        default:
            return state
    }
}

export const CartProvider = ({ children }) => {

    const [buysList, dispatch] = useReducer(buysReducer, initialState)

    const addBuys = (buys) => {
        const action = {
            type: '[CART] Agregar compra',
            payload: buys
        }
        dispatch(action)
    }
    const increaseBuys = (id) => {
        const action = {
            type: '[CART] Incrementar cantidad compra',
            payload: id
        }
        dispatch(action)
    }
    const decreaseBuys = (id) => {
        const action = {
            type: '[CART] Disminuir cantidad compra',
            payload: id
        }
        dispatch(action)
    }
    const deleteBuys = (id) => {
        const action = {
            type: '[CART] Eliminar compra',
            payload: id
        }
        dispatch(action)
    }


    return (
        <CartContext.Provider value={{ buysList, addBuys, increaseBuys, decreaseBuys, deleteBuys }}>
            {children}
        </CartContext.Provider>
    )

}