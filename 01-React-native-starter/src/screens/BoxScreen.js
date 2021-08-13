import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export const BoxScreen = function () {
	return (
		<View style={styles.view}>
			<Text style={styles.text}>Child #1</Text>
			<Text style={styles.text}>Child #2</Text>
			<Text style={styles.text}>Child #3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		borderWidth: 3,
		borderColor: 'black',
		alignItems: 'flex-start',
	},
	text: {
		borderWidth: 3,
		borderColor: 'red',
	},
});

export default BoxScreen;
