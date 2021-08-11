import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// Import components
import ColorCounter from '../components/ColorCounter';

const SquareScreen = function () {
	return (
		<View>
			<ColorCounter color="Red" />
			<ColorCounter color="Green" />
			<ColorCounter color="Blue" />
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
