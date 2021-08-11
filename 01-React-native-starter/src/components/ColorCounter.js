import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = function (props) {
	return (
		<View>
			<Text>{props.color}</Text>
			<Button title={`Increase ${props.color}`} />
			<Button title={`Decrease ${props.color}`} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorCounter;
