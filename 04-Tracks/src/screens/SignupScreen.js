import React from 'react';
// Import from React native
import { StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
// Import from React navigation
import { NavigationEvents } from 'react-navigation';
// Import context
import { Context as AuthContext } from '../context/AuthContext';

export default function SignupScreen(props) {
	// Destructuring AuthContext
	const { state, signup, clearErrorMessage, tryLocalSignin } =
		React.useContext(AuthContext);

	// On component mount
	React.useEffect(() => {
		tryLocalSignin();
	}, []);
	return (
		<>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				heading="Sign up for Tracker"
				errorMessage={state.errorMessage}
				submitBtnText="Sign up"
				onSubmit={signup}
				helperText="Already have an account? Sign in instead."
				onHelperTextClick={() => props.navigation.navigate('Signin')}
			/>
		</>
	);
}

// Hide screen header
SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({});
