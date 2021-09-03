import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
// Import from React native elements
import { Text, Input, Button } from 'react-native-elements';
// Import components
import Spacer from '../components/Spacer';
// Import context
import { Context as AuthContext } from '../context/AuthContext';

export default function AuthForm(props) {
	// Local states
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	// Destructuring Context
	const { state } = React.useContext(AuthContext);
	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3 style={styles.authHeading}>
					{props.heading}
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
			{props.errorMessage ? (
				<Text style={styles.errorMessage}>{props.errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={props.submitBtnText}
					onPress={() => props.onSubmit({ email, password })}
					loading={state.isLoading}
				/>
			</Spacer>
			<Spacer />
			<TouchableOpacity onPress={props.onHelperTextClick}>
				<Spacer>
					<Text style={styles.link}>{props.helperText}</Text>
				</Spacer>
			</TouchableOpacity>
		</View>
	);
}

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
	link: {
		color: 'blue',
	},
});
