import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "user",
  initialState: [
    {
        title: 'add Task',
        desc : 'some DEsc about task'
    }

  ],
  reducers: {
    addNote(state, action) {
        state.push(action.payload);
    },
    viewNote(state,action){
        return state.users.user;   },

    removeNote(state, action) {
        state.splice(action.payload,1);
    },
    deleteNotes(state, action) {
        // state.splice(0,state.length);
        return [];
    },
  },
});

export default notesSlice.reducer;
export const {addNote,viewNote,removeNote,deleteNotes} = notesSlice.actions;
