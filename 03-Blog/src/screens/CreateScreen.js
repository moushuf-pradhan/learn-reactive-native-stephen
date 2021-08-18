import React from 'react';
// import {} from 'react-native';
// Import context
import { Context as BlogContext } from '../context/BlogContext';
// Import components
import BlogPostForm from '../components/BlogPostForm';

export default function CreateScreen(props) {
	// Destructuring context
	const { addBlogPost } = React.useContext(BlogContext);
	return <BlogPostForm />;
}
