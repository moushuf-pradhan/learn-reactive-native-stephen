import createDataContext from './createDataContext';

const reducer = (state, action) => {
	switch (action.type) {
		case 'add_blog_post':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: `Blog post #${state.length + 1}`,
				},
			];
		case 'delete_blog_post':
			return state.filter(blog => blog.id !== action.payload);
		default:
			return state;
	}
};

// Add a blog post
const addBlogPost = dispatch => {
	return () => {
		dispatch({ type: 'add_blog_post' });
	};
};

// Delete a blog post
const deleteBlogPost = dispatch => {
	return id => {
		dispatch({ type: 'delete_blog_post', payload: id });
	};
};

export const { Context, Provider } = createDataContext(
	reducer,
	{ addBlogPost, deleteBlogPost },
	[]
);
