import React from 'react';
// import { } from 'react-native';
// Import context
import { Context as BlogContext } from '../context/BlogContext';
// Import components
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen(props) {
	// Destructuring context
	const { state } = React.useContext(BlogContext);
	// Selected post
	const post = state.find(
		post => post.id === props.navigation.getParam('id')
	);
	return <BlogPostForm />;
}
