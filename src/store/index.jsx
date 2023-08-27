import { configureStore } from "@reduxjs/toolkit";
import notesSlice  from "./slices/UserSlice";


const store= configureStore({
    reducer: {
        users: notesSlice
    }
})

export default store; 