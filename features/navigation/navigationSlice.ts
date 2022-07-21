import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  showMobileMenu: boolean;
  showNavMenu: boolean;
}

const initialState: NavigationState = {
  showMobileMenu: false,
  showNavMenu: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu;
    },
    toggleNavMenu: (state) => {
      state.showNavMenu = !state.showNavMenu;
    },
  },
});

export const { toggleMobileMenu, toggleNavMenu } = navigationSlice.actions;

export default navigationSlice.reducer;
