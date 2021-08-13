import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export const BoxScreen = function () {
	return (
		<View style={styles.viewParent}>
			<View style={styles.viewOne} />
			<View style={styles.viewTwo} />
			<View style={styles.viewThree} />
		</View>
	);
};

const styles = StyleSheet.create({
	viewParent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	viewOne: {
		width: 80,
		height: 80,
		backgroundColor: 'red',
	},
	viewTwo: {
		width: 80,
		height: 80,
		backgroundColor: 'green',
		top: 80,
	},
	viewThree: {
		width: 80,
		height: 80,
		backgroundColor: 'blue',
	},
});

export default BoxScreen;
