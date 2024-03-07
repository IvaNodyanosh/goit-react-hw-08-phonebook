export const getContacts = state => state.contacts.items;
export const isLoadingContacts = state => state.contacts.isLoading;
export const errorContacts = state => state.contacts.error;

export const getFilter = state => state.filter;

export const isLoginUser = state => state.auth.isLogin;
export const isRefreshingUser = state => state.auth.isRefreshing;
export const username = state => state.auth.user;
export const getToken = state => state.auth.token;
