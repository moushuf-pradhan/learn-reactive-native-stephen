import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export const TextScreen = function () {
	const [name, setName] = React.useState('');
	return (
		<View>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={name}
				onChangeText={val => setName(val)}
			/>
			<Text>My name is "{name}"</Text>
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
