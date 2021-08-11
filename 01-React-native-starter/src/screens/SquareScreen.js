import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// Import components
import ColorCounter from '../components/ColorCounter';

const SquareScreen = function () {
	const [red, setRed] = React.useState(0);
	const [green, setGreen] = React.useState(0);
	const [blue, setBlue] = React.useState(0);
	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => setRed(red + 1)}
				onDecrease={() => setRed(red - 1)}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => setGreen(green + 1)}
				onDecrease={() => setGreen(green - 1)}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => setBlue(blue + 1)}
				onDecrease={() => setBlue(blue - 1)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
