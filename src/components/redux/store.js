import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { rootInitialState } from "./rootInitialState";


export const store = configureStore({
    preloadedState:rootInitialState,
    devTools:true,
    reducer:{
        contacts:contactsReducer,
        filter:filterReducer,
    }
})