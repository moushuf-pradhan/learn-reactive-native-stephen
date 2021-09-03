import React from 'react';
// Import from React native
import { StyleSheet, View } from 'react-native';
// Import from React native elements
import { Text, Input, Button } from 'react-native-elements';
// Import components
import Spacer from '../components/Spacer';
// Import context
import { Context as AuthContext } from '../context/AuthContext';

export default function SignupScreen(props) {
	// Local states
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	// Destructuring AuthContext
	const { state, signup } = React.useContext(AuthContext);
	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3 style={styles.authHeading}>
					Sign up for Tracker
				</Text>
			</Spacer>
			<Input
				label="Email"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				secureTextEntry
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			{state.errorMessage ? (
				<Text style={styles.errorMessage}>{state.errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title="Sign up"
					onPress={() => signup({ email, password })}
				/>
			</Spacer>
		</View>
	);
}

// Hide screen header
SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		marginTop: 75,
		marginBottom: 150,
	},
	authHeading: {
		marginBottom: 40,
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginHorizontal: 10,
		marginBottom: 10,
	},
});
