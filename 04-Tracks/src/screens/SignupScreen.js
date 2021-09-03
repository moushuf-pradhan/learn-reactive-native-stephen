import React from 'react';
// Import from React native
import { StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
// Import context
import { Context as AuthContext } from '../context/AuthContext';

export default function SignupScreen(props) {
	// Destructuring AuthContext
	const { state, signup } = React.useContext(AuthContext);
	return (
		<AuthForm
			heading="Sign up for Tracker"
			errorMessage={state.errorMessage}
			submitBtnText="Sign up"
			onSubmit={signup}
			helperText="Already have an account? Sign in instead."
			onHelperTextClick={() => props.navigation.navigate('Signin')}
		/>
	);
}

// Hide screen header
SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({});
