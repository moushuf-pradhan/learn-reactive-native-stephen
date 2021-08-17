import createDataContext from './createDataContext';

const reducer = (state, action) => {
	switch (action.type) {
		case 'add_blog_post':
			return [...state, { title: `Blog post #${state.length + 1}` }];
		default:
			return state;
	}
};

// Add a blog post
const addBlogPost = () => {
	dispatch({ type: 'add_blog_post' });
};

export const { Context, Provider } = createDataContext(
	reducer,
	{ addBlogPost },
	[]
);
