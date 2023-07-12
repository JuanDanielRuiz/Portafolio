import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    name: null,
    email: "",
    rol: "",
    tokenSession:""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, email, rol, tokenSession } = action.payload;
            state.name = name;
            state.email = email;
            state.rol = rol;
            state.tokenSession = tokenSession;

        },

        changeEmail: (state, action) => {
            state.email = action.payload;
        },
        
    }
   
    
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;