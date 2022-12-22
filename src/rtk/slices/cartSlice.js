import { createSlice } from "@reduxjs/toolkit";
export const cartproducts=createSlice({
    name:"cartproducts",
    initialState:[],
    reducers:{
        addcart: (state,action) => {
            const searchpro=state.find((product)=>product.id===action.payload.id)
            if(searchpro){
                searchpro.quantity += 1
            }else{
                const copiedproduct = {...action.payload,quantity:1}
                state.push(copiedproduct)
            }
        },
        deletecart:(state,action)=>{
            console.log(action.payload)
            if(action.payload.quantity>1){
                const product={...action.payload}
                delete product.quantity
                console.log('wwwwwwwwwwwwwwwwwwwww',product)
                //const copiedproduct= {...state , product.quantity-=1}
                //const data1 = JSON.parse(state);
                //const data2 = JSON.parse({...product,quantity:action.payload.quantity-1});

                //data = JSON.stringify({data: [...data1.display, ...data2.display]})
                  //  console.log(data)
                return([...state.filter((product)=> product.id !==action.payload.id) ,
                     {...product,quantity:action.payload.quantity-1}].sort((a, b) => a.id - b.id))
                
            }else{
                return(state.filter((product)=> product.id !==action.payload.id).sort((a, b) => a.id - b.id))

            }
        },
        clearcart:(state,action)=>{
            return([])
        }
    }
})
export const {addcart,deletecart,clearcart}=cartproducts.actions
export default cartproducts.reducer