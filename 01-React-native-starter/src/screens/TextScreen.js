import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export const TextScreen = function () {
	return (
		<View>
			<TextInput style={styles.input} />
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
