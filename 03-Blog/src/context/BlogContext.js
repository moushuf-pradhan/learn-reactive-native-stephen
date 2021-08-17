import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = function (props) {
	// Local states
	const [blogPosts, setBlogPosts] = React.useState([]);

	// Add blog post
	const addBlogPost = () => {
		setBlogPosts([
			...blogPosts,
			{ title: `Blog post #${blogPosts.length + 1}` },
		]);
	};
	return (
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
			{props.children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
