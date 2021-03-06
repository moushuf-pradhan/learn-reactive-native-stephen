import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function BlogPostForm(props) {
	// Local states
	const [title, setTitle] = React.useState(props.initialValues.title);
	const [content, setContent] = React.useState(props.initialValues.content);
	return (
		<View>
			<Text style={styles.label}>Enter title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={val => setTitle(val)}
			/>
			<Text style={styles.label}>Enter content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={val => setContent(val)}
			/>
			<Button
				title="Add a blog post"
				onPress={() => props.onSubmit(title, content)}
			/>
		</View>
	);
}

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: '',
	},
};

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
