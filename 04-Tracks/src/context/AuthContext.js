import createDataContext from './createDataContext';
// Import axios instance
import trackerAxios from '../api/trackerAxios';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};

// Sign up
const signup = dispatch => {
	return async ({ email, password }) => {
		try {
			const response = await trackerAxios.post('/signup', {
				email,
				password,
			});
			console.log(response.data);
		} catch (err) {
			dispatch({
				type: 'add_error',
				payload: 'Something went wrong with sign up',
			});
		}
		// Make API request to signup using the email and password
		// If we signup, modify our state and say that we are authenticated
		// If signup fails, reflect an error message somewhere
	};
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
	{ isSignedIn: false, errorMessage: '' }
);
