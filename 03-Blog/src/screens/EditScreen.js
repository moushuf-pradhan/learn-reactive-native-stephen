import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
// Import context
import { Context as BlogContext } from '../context/BlogContext';

export default function EditScreen(props) {
	// Destructuring context
	const { state } = React.useContext(BlogContext);
	// Selected post
	const post = state.find(
		post => post.id === props.navigation.getParam('id')
	);
	// Local states
	const [title, setTitle] = React.useState(post.title);
	const [content, setContent] = React.useState(post.content);
	return (
		<View>
			<Text style={styles.label}>Edit title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={val => setTitle(val)}
			/>
			<Text style={styles.label}>Edit content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={val => setContent(val)}
			/>
			<Button
				title="Save"
				// onPress={() => {
				// 	addBlogPost(title, content, function () {
				// 		props.navigation.navigate('Index');
				// 	});
				// }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		margin: 5,
		marginBottom: 15,
		padding: 5,
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginLeft: 5,
	},
});
