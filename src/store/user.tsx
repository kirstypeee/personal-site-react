import { Dispatch, createSlice } from "@reduxjs/toolkit";

export interface UserDetails {
  name: string;
  company: string;
}

interface UserState {
  user: UserDetails;
  submitting: boolean;
  success: boolean;
  error?: string;
}

const initialState: UserState = {
  user: { name: "", company: "" },
  submitting: false,
  success: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerPending: (state) => {
      state.user = {
        name: "",
        company: "",
      };
      state.submitting = true;
      state.success = false;
      state.error = undefined;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.submitting = false;
      state.success = true;
      state.error = undefined;
    },
    registerFailed: (state) => {
      state.submitting = false;
      state.success = false;
      state.error = "There was a problem, please try again later";
    },
  },
});

// Action creators are generated for each case reducer function
const { registerPending, registerSuccess, registerFailed } = userSlice.actions;

export const registerUser =
  (user: UserDetails) => async (dispatch: Dispatch) => {
    dispatch(registerPending());
    try {
      await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      dispatch(registerSuccess(user));
    } catch (err) {
      dispatch(registerFailed());
    }
  };

export default userSlice.reducer;
