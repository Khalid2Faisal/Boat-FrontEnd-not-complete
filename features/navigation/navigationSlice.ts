import { createSlice } from "@reduxjs/toolkit";
import { NavigationState } from "./navigationTypes";

const initialState: NavigationState = {
  layout: {
    showMobileMenu: false,
    showNavMenu: false,
    rotateChevronIcon: false,
  },
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.layout.showMobileMenu = !state.layout.showMobileMenu;
    },
    toggleNavMenu: (state) => {
      state.layout.showNavMenu = !state.layout.showNavMenu;
    },
    toggleChevronIcon: (state) => {
      state.layout.rotateChevronIcon = !state.layout.rotateChevronIcon;
    },
  },
});

export const { toggleMobileMenu, toggleNavMenu, toggleChevronIcon } =
  navigationSlice.actions;

export default navigationSlice.reducer;
