import { configureStore } from '@reduxjs/toolkit'
import product_slice from './slices/products-slice'
import cartproducts from './slices/cartSlice'

export const store=configureStore({
    reducer:{
        products:product_slice,
        cart:cartproducts
    }
})