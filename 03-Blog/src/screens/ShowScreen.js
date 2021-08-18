import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

export default function ShowScreen(props) {
	const { state } = React.useContext(BlogContext);
	// Selected blog post
	const post = state.find(
		post => post.id === props.navigation.getParam('id')
	);
	return (
		<View>
			<Text>{post.title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
