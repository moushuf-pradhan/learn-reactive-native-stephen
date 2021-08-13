import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
	if (action.type === 'change_counter')
		return { ...state, count: state.count + action.payload };
};

const CounterScreen = function () {
	const [state, dispatch] = React.useReducer(reducer, { count: 0 });
	return (
		<View>
			<Button
				title="Increase"
				onPress={() => dispatch({ type: 'change_counter', payload: 1 })}
			/>
			<Button
				title="Decrease"
				onPress={() =>
					dispatch({ type: 'change_counter', payload: -1 })
				}
			/>
			<Text>Current count: {state.count}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
