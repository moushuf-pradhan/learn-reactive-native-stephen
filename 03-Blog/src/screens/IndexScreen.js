import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
// Import icons
import { Feather } from '@expo/vector-icons';

export default function IndexScreen() {
	const { state, addBlogPost } = React.useContext(BlogContext);
	return (
		<View>
			<Button title="Add post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={post => post.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<Feather style={styles.icon} name="trash" />
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray',
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 20,
	},
});
