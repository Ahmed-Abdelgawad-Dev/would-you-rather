export const SET_AUTHED_USER = 'SET_AUTHED_USER'
// Authed User saved in the local storage by k,v pairs
export const setAuthedUser = (id) => {
	localStorage.setItem('theAuthedUser', id)
	return {type: SET_AUTHED_USER,id}
}