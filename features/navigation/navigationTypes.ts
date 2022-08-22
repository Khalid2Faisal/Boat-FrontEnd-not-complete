export interface LayoutNavigation {
  showMobileMenu: boolean;
  showNavMenu: boolean;
  showRegisterModal: boolean;
  showLoginModal: boolean;
}

// creating the shape of the navigation state
export interface NavigationState {
  layout: LayoutNavigation;
}
