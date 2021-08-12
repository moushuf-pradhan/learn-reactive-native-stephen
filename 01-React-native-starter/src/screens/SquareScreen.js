import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// Import components
import ColorCounter from '../components/ColorCounter';

const CHANGE_BY = 15;

// Reducer function
const reducer = (state, action) => {
	// state === {red: number, green: number, blue: number}
	// action === {type: 'change_red || 'change_green' || 'change_blue', payload: 15 || -15}

	switch (action.type) {
		case 'change_red':
			return state.red + action.payload > 255 ||
				state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };
		case 'change_green':
			return state.green + action.payload > 255 ||
				state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };
		case 'change_blue':
			return state.blue + action.payload > 255 ||
				state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };
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
				onIncrease={() =>
					dispatch({ type: 'change_red', payload: CHANGE_BY })
				}
				onDecrease={() =>
					dispatch({ type: 'change_red', payload: -1 * CHANGE_BY })
				}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() =>
					dispatch({ type: 'change_green', payload: CHANGE_BY })
				}
				onDecrease={() =>
					dispatch({ type: 'change_green', payload: -1 * CHANGE_BY })
				}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() =>
					dispatch({ type: 'change_blue', payload: CHANGE_BY })
				}
				onDecrease={() =>
					dispatch({ type: 'change_blue', payload: -1 * CHANGE_BY })
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
