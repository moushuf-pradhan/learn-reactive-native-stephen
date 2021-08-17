import React from 'react';

const BlogContext = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'add_blog_post':
			return [...state, { title: `Blog post #${state.length + 1}` }];
		default:
			return state;
	}
};

export const BlogProvider = function (props) {
	const [state, dispatch] = React.useReducer(reducer, []);

	// Add a blog post
	const addBlogPost = () => {
		dispatch({ type: 'add_blog_post' });
	};
	return (
		<BlogContext.Provider value={{ data: state, addBlogPost }}>
			{props.children}
		</BlogContext.Provider>
	);
};

export default BlogContext;
