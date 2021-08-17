import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

export default function IndexScreen() {
	const blogPosts = React.useContext(BlogContext);
	return (
		<View>
			<FlatList
				data={blogPosts}
				keyExtractor={post => post.title}
				renderItem={({ item }) => <Text>{item.title}</Text>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
