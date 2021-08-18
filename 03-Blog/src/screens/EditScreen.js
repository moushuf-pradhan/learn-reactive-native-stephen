import React from 'react';
// import { } from 'react-native';
// Import context
import { Context as BlogContext } from '../context/BlogContext';
// Import components
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen(props) {
	// ID of Selected post
	const id = props.navigation.getParam('id');
	// Destructuring context
	const { state, editBlogPost } = React.useContext(BlogContext);
	// Selected post
	const post = state.find(post => post.id === id);
	return (
		<BlogPostForm
			initialValues={{ title: post.title, content: post.content }}
			onSubmit={(title, content) => editBlogPost(id, title, content)}
		/>
	);
}
