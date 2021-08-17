import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = function (props) {
	return (
		<BlogContext.Provider value={5}>{props.children}</BlogContext.Provider>
	);
};

export default BlogContext;
