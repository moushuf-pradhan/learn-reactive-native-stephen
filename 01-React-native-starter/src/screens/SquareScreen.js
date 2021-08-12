import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// Import components
import ColorCounter from '../components/ColorCounter';

const CHANGE_BY = 15;

// Reducer function
const reducer = (state, action) => {
	// state === {red: number, green: number, blue: number}
	// action === {colorToChange: 'red || 'green' || 'blue, amount: 15 || -15}

	switch (action.color) {
		case 'red':
			return state.red + action.amount > 255 ||
				state.red + action.amount < 0
				? state
				: { ...state, red: state.red + action.amount };
		case 'green':
			return state.green + action.amount > 255 ||
				state.green + action.amount < 0
				? state
				: { ...state, green: state.green + action.amount };
		case 'blue':
			return state.blue + action.amount > 255 ||
				state.blue + action.amount < 0
				? state
				: { ...state, blue: state.blue + action.amount };
		default:
			return state;
	}
};

const SquareScreen = function () {
	const [state, dispatch] = React.useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});

	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => dispatch({ color: 'red', amount: CHANGE_BY })}
				onDecrease={() =>
					dispatch({ color: 'red', amount: -1 * CHANGE_BY })
				}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() =>
					dispatch({ color: 'green', amount: CHANGE_BY })
				}
				onDecrease={() =>
					dispatch({ color: 'green', amount: -1 * CHANGE_BY })
				}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() =>
					dispatch({ color: 'blue', amount: CHANGE_BY })
				}
				onDecrease={() =>
					dispatch({ color: 'blue', amount: -1 * CHANGE_BY })
				}
			/>
			<View
				style={{
					width: 150,
					height: 150,
					backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
				}}
			></View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
