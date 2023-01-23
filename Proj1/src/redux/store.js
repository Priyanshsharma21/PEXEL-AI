import { configureStore } from "@reduxjs/toolkit";

import {userApi} from "./services/userApi";
import userSlice from './features/userSlice';


export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userSlice,
  },
  middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(userApi.middleware)
});
