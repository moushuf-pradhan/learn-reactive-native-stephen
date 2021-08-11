import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = function () {
	const friends = [
		{
			name: 'Friend #1',
		},
		{
			name: 'Friend #2',
		},
		{
			name: 'Friend #3',
		},
		{
			name: 'Friend #4',
		},
		{
			name: 'Friend #5',
		},
		{
			name: 'Friend #6',
		},
		{
			name: 'Friend #7',
		},
		{
			name: 'Friend #8',
		},
		{
			name: 'Friend #9',
		},
	];
	return (
		<FlatList
			keyExtractor={friend => friend.name}
			horizontal
			showsHorizontalScrollIndicator={false}
			data={friends}
			renderItem={({ item }) => (
				<Text style={styles.textStyle}>{item.name}</Text>
			)}
		></FlatList>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50,
	},
});

export default ListScreen;
