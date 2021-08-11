import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// Import components
import ColorCounter from '../components/ColorCounter';

const changeBY = 15;

const SquareScreen = function () {
	const [red, setRed] = React.useState(0);
	const [green, setGreen] = React.useState(0);
	const [blue, setBlue] = React.useState(0);
	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => setRed(red + changeBY)}
				onDecrease={() => setRed(red - changeBY)}
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
