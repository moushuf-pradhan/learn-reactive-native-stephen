import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export const BoxScreen = function () {
	return (
		<View style={styles.view}>
			<Text style={styles.textOne}>Child #1</Text>
			<Text style={styles.textTwo}>Child #2</Text>
			<Text style={styles.textThree}>Child #3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		borderWidth: 3,
		borderColor: 'black',
		height: 200,
	},
	textOne: {
		borderWidth: 3,
		borderColor: 'red',
	},
	textTwo: {
		borderWidth: 3,
		borderColor: 'red',
		...StyleSheet.absoluteFillObject,
	},
	textThree: {
		borderWidth: 3,
		borderColor: 'red',
	},
});

export default BoxScreen;
