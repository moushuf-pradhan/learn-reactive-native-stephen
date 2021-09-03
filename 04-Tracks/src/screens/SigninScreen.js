import React from 'react';
import { StyleSheet } from 'react-native';
// Import from React navigation
import { NavigationEvents } from 'react-navigation';
// Import components
import AuthForm from '../components/AuthForm';
// Import context
import { Context as AuthContext } from '../context/AuthContext';

export default function SigninScreen(props) {
	// Destructuring Context
	const { state, signin, clearErrorMessage } = React.useContext(AuthContext);
	return (
		<>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				heading="Sign in to your account"
				errorMessage={state.errorMessage}
				submitBtnText="Sign in"
				onSubmit={signin}
				helperText="Don't have an account? Sign up instead."
				onHelperTextClick={() => props.navigation.navigate('Signup')}
			/>
		</>
	);
}

// Hide screen header
SigninScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({});
