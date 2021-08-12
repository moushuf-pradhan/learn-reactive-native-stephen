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
		switch (color) {
			case 'red':
				red + changeBy > 255 || red + changeBy < 0
					? null
					: setRed(red + changeBy);
				break;
			case 'green':
				green + changeBy > 255 || green + changeBy < 0
					? null
					: setGreen(green + changeBy);
				break;
			case 'blue':
				blue + changeBy > 255 || blue + changeBy < 0
					? null
					: setBlue(blue + changeBy);
				break;
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
				onIncrease={() => setColor('green', CHANGE_BY)}
				onDecrease={() => setColor('green', -1 * CHANGE_BY)}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => setColor('blue', CHANGE_BY)}
				onDecrease={() => setColor('blue', -1 * CHANGE_BY)}
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
