import React from 'react';
// Import from React native
import { StyleSheet, View } from 'react-native';
// Import from React native elements
import { Text, Input, Button } from 'react-native-elements';
// Import components
import Spacer from '../components/Spacer';

export default function SignupScreen(props) {
	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3 style={styles.authHeading}>
					Sign up for Tracker
				</Text>
			</Spacer>
			<Input label="Email" />
			<Spacer />
			<Input label="Password" />
			<Spacer>
				<Button title="Sign up" />
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
		flex: 1,
		justifyContent: 'center',
		marginBottom: 150,
	},
	authHeading: {
		marginBottom: 40,
	},
});
