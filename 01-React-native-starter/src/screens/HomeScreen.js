import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = props => {
	console.log(props.navigation);
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => props.navigation.navigate('Components')}
			/>
			<TouchableOpacity onPress={() => console.log('List pressed')}>
				<Text>Go to List Demo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;
