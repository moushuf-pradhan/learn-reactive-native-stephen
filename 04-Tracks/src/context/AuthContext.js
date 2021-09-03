import createDataContext from './createDataContext';
// Import axios instance
import trackerAxios from '../api/trackerAxios';
// Import from Navigation ref
import { navigate } from '../navigationRef';
// Import from Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'remove_error':
			return { ...state, errorMessage: '' };
		case 'signin':
			return { ...state, token: action.payload, errorMessage: '' };
		case 'set_loading':
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

// Sign up
const signup =
	dispatch =>
	async ({ email, password }) => {
		try {
			dispatch({ type: 'remove_error' });
			dispatch({ type: 'set_loading', payload: true });
			const response = await trackerAxios.post('/signup', {
				email,
				password,
			});
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signin', payload: response.data.token });
			// Navigate
			navigate('TrackList');
		} catch (err) {
			console.log(err.message);
			dispatch({
				type: 'add_error',
				payload: 'Something went wrong with sign up',
			});
		} finally {
			dispatch({ type: 'set_loading', payload: false });
		}
	};

// Sign in
const signin = dispatch => {
	return async ({ email, password }) => {
		try {
			dispatch({ type: 'set_loading', payload: true });
			const response = await trackerAxios.post('/signin', {
				email,
				password,
			});
			console.log(response.message);
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signin', payload: response.data.token });
			props.navigation.navigate('Signin');
		} catch (err) {
			dispatch({
				type: 'add_error',
				payload: 'Something went wrong while signing in',
			});
		} finally {
			dispatch({ type: 'set_loading', payload: false });
		}
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
	{ token: null, errorMessage: '', isLoading: false }
);
