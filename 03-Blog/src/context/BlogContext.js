import createDataContext from './createDataContext';

const reducer = (state, action) => {
	switch (action.type) {
		case 'add_blog_post':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: action.payload.title,
					content: action.payload.content,
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
	return (title, content, callback) => {
		dispatch({ type: 'add_blog_post', payload: { title, content } });
		callback();
	};
};

// Delete a blog post
const deleteBlogPost = dispatch => {
	return id => {
		dispatch({ type: 'delete_blog_post', payload: id });
	};
};

// Edit a blog post
const editBlogPost = dispatch => {
	return (id, title, content) => {
		dispatch({ type: 'edit_blog_post', payload: { id, title, content } });
	};
};

export const { Context, Provider } = createDataContext(
	reducer,
	{ addBlogPost, deleteBlogPost, editBlogPost },
	[{ title: 'Test post', content: 'Blah Blah Blah', id: 1 }]
);
