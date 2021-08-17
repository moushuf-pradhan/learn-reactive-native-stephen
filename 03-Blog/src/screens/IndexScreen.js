import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

export default function IndexScreen() {
	const { state, addBlogPost } = React.useContext(BlogContext);
	return (
		<View>
			<Button title="Add post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={post => post.title}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
