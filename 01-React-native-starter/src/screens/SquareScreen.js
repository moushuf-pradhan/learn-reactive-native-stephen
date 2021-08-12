import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// Import components
import ColorCounter from '../components/ColorCounter';

const CHANGE_BY = 15;

const SquareScreen = function () {
	const [red, setRed] = React.useState(0);
	const [green, setGreen] = React.useState(0);
	const [blue, setBlue] = React.useState(0);

	// Set color
	const setColor = (color, changeBy) => {
		if (color === 'red') {
			if (red + changeBy > 255 || red + changeBy < 0) return;
			setRed(red + changeBy);
		}
	};
	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => setColor('red', CHANGE_BY)}
				onDecrease={() => setColor('red', -1 * CHANGE_BY)}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => setGreen(green + changeBY)}
				onDecrease={() => setGreen(green - changeBY)}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => setBlue(blue + changeBY)}
				onDecrease={() => setBlue(blue - changeBY)}
			/>
			<View
				style={{
					width: 150,
					height: 150,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				}}
			></View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
