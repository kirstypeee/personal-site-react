import { configureStore } from "@reduxjs/toolkit";
import github from "./github";
import user from "./user";

const store = configureStore({
  reducer: { user, github },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
