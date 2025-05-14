import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        Name: '',
        Email: ''
    },
    reducers: {
        updateName: (state, action) => {
            return {...state, Name: action.payload}
        },

        updateEmail: (state, action) => {
            return {...state, Email: action.payload}
        }
    }
})

export const {updateName, updateEmail} = userSlice.actions
export default userSlice.reducer