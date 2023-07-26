import { Dispatch, createSlice } from "@reduxjs/toolkit";

export interface ContributionWeek {
  contributionDays: {
    color: string;
    contributionCount: number;
    date: string;
    weekday: number;
  }[];
  firstDay: string;
}
export interface Contributions {
  user: {
    name: string;
    contributionsCollection: {
      contributionCalendar: {
        colors: string[];
        totalContributions: number;
        weeks: ContributionWeek[];
      };
    };
  };
}

interface GithubState {
  contributions: Contributions | null;
  fetching: boolean;
  success: boolean;
  error?: string;
}

const initialState: GithubState = {
  contributions: null,
  fetching: false,
  success: false,
  error: undefined,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    registerPending: (state) => {
      state.contributions = null;
      state.fetching = true;
      state.success = false;
      state.error = undefined;
    },
    registerSuccess: (state, action) => {
      state.contributions = action.payload;
      state.fetching = false;
      state.success = true;
      state.error = undefined;
    },
    registerFailed: (state) => {
      state.fetching = false;
      state.success = false;
      state.error = "There was a problem, please try again later";
    },
  },
});

// Action creators are generated for each case reducer function
const { registerPending, registerSuccess, registerFailed } =
  githubSlice.actions;

export const fetchContributions = () => async (dispatch: Dispatch) => {
  dispatch(registerPending());
  try {
    const response = await fetch("/api/github/contributions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    dispatch(registerSuccess(data?.data));
  } catch (err) {
    dispatch(registerFailed());
  }
};

export default githubSlice.reducer;
