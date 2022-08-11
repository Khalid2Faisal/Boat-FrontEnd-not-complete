export interface LayoutNavigation {
  showMobileMenu: boolean;
  showNavMenu: boolean;
  rotateChevronIcon: boolean;
  showRegisterModal: boolean;
  showLoginModal: boolean;
}

export interface NavigationState {
  layout: LayoutNavigation;
}
