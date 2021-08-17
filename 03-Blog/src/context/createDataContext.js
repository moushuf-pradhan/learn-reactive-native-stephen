import React from 'react';

export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = props => {
		const [state, dispatch] = React.useReducer(reducer, initialState);

		// state === { addBlogPost: (dispatch) => { return () => {} } }
		const boundActions = {};
		for (let key in actions) {
			boundActions[key] = actions[key](dispatch);
		}

		return (
			<Context.Provider value={{ state, ...boundActions }}>
				{props.children}
			</Context.Provider>
		);
	};
	return { Context, Provider };
};
