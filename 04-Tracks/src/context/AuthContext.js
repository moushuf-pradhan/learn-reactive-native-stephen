import createDataContext from './createDataContext';
// Import axios instance
import trackerAxios from '../api/trackerAxios';
// Import from Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signup':
			return { ...state, token: action.payload, errorMessage: '' };
		default:
			return state;
	}
};

// Sign up
const signup =
	dispatch =>
	async ({ email, password }) => {
		try {
			const response = await trackerAxios.post('/signup', {
				email,
				password,
			});
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signup', payload: response.data.token });
		} catch (err) {
			dispatch({
				type: 'add_error',
				payload: 'Something went wrong with sign up',
			});
		}
	};

// Sign in
const signin = dispatch => {
	return ({ email, password }) => {
		// Try to sign in
		// Handle success by updating state
		// Handle failure by showing error message
	};
};

// Sign out
const signout = dispatch => {
	return () => {
		// Sign out
	};
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{ token: null, errorMessage: '' }
);
