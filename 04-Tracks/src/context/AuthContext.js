import createDataContext from './createDataContext';

const authReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

// Sign up
const signup = dispatch => {
	return ({ email, password }) => {
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
	{ isSignedIn: false }
);
