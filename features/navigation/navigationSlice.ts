import { createSlice } from "@reduxjs/toolkit";
import { NavigationState } from "./navigationTypes";

const initialState: NavigationState = {
  layout: {
    showMobileMenu: false,
    showNavMenu: false,
    rotateChevronIcon: false,
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
    toggleChevronIcon: (state) => {
      state.layout.rotateChevronIcon = !state.layout.rotateChevronIcon;
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
  toggleChevronIcon,
  toggleRegisterModal,
  toggleLoginModal,
} = navigationSlice.actions;

export default navigationSlice.reducer;
