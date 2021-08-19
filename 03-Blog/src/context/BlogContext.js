import createDataContext from './createDataContext';
// Import axios instance
import blogAxios from '../api/jsonServer';

const reducer = (state, action) => {
	switch (action.type) {
		case 'fetch_blog_posts':
			return action.payload;
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
		case 'edit_blog_post':
			return state.map(post =>
				post.id === action.payload.id ? action.payload : post
			);
		default:
			return state;
	}
};

// Fetch blog posts
const fetchBlogPosts = async dispatch => {
	const res = await blogAxios.get('/blogPosts');
	dispatch({ type: 'fetch_blog_posts', payload: res.data });
};

// Add a blog post
const addBlogPost = dispatch => {
	return (title, content, callback) => {
		dispatch({ type: 'add_blog_post', payload: { title, content } });
		if (callback) callback();
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
	return (id, title, content, callback) => {
		dispatch({ type: 'edit_blog_post', payload: { id, title, content } });
		if (callback) callback();
	};
};

export const { Context, Provider } = createDataContext(
	reducer,
	{ fetchBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
	[]
);
