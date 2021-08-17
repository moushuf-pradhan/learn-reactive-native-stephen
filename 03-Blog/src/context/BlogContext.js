import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = function (props) {
	// Posts
	const blogPosts = [
		{
			title: 'Blog post #1',
		},
		{
			title: 'Blog post #2',
		},
		{
			title: 'Blog post #3',
		},
	];
	return (
		<BlogContext.Provider value={blogPosts}>
			{props.children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
