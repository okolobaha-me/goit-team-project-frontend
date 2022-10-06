export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getToken = state => state.auth.token;

export const getUserId = state => state.auth.user._id;

export const getLoadingCurrent = state => state.auth.isLoading;
