import { createSlice } from "@reduxjs/toolkit";
import { NavigationState } from "./navigationTypes";

/* Defining the initial state of the reducer. */
const initialState: NavigationState = {
  layout: {
    showMobileMenu: false,
    showNavMenu: false,
    showRegisterModal: false,
    showLoginModal: false,
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
    closeNavMenu: (state) => {
      state.layout.showNavMenu = false;
    },
    toggleRegisterModal: (state) => {
      state.layout.showRegisterModal = !state.layout.showRegisterModal;
      state.layout.showLoginModal = false;
    },
    toggleLoginModal: (state) => {
      state.layout.showLoginModal = !state.layout.showLoginModal;
      state.layout.showRegisterModal = false;
    },
  },
});

export const {
  toggleMobileMenu,
  toggleNavMenu,
  closeNavMenu,
  toggleRegisterModal,
  toggleLoginModal,
} = navigationSlice.actions;

export default navigationSlice.reducer;
