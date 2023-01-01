import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";


 export const fetchProduct= createAsyncThunk("product_slice/fetchProduct",async () => {
    const res=await fetch("https://fakestoreapi.com/products")
    const data= await res.json()
    return data
  })

const product_slice=createSlice({
    initialState:{loading:false,books:[]},
    name:"product_slice",
    reducers:{},
    extraReducers:(builder)=>{
        
        builder.addCase(fetchProduct.pending,(state,action)=>{
            console.log(action.payload)
            state.loading=true
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.books= action.payload
        })
    }

})
export const{}=product_slice.actions
export default product_slice.reducer;