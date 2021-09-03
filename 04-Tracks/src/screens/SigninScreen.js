import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Import components
import AuthForm from '../components/AuthForm';
// Import context
import { Context as AuthContext } from '../context/AuthContext';

export default function SigninScreen(props) {
	// Destructuring Context
	const { state, signin } = React.useContext(AuthContext);
	return (
		<AuthForm
			heading="Sign in to your account"
			errorMessage={state.errorMessage}
			submitBtnText="Sign in"
			onSubmit={signin}
			helperText="Don't have an account? Sign up instead."
			onHelperTextClick={() => props.navigation.navigate('Signup')}
		/>
	);
}

// Hide screen header
SigninScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({});
