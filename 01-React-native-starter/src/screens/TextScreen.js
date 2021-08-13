import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const PASSWORD_LENGTH = 5;

export const TextScreen = function () {
	const [password, setPassword] = React.useState('');
	return (
		<View>
			<Text>Enter password:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={val => setPassword(val)}
			/>
			{password.length <= PASSWORD_LENGTH && (
				<Text>
					Password must be longer than {PASSWORD_LENGTH} characters
				</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
});

export default TextScreen;
