import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData : [],
  isDark : true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
        state.userData = action.payload;
    },

    setDarkMode(state, action){
      state.isDark = action.payload;
    },
  },
});

export const { setUserData,setDarkMode } = userSlice.actions;

export default userSlice.reducer;