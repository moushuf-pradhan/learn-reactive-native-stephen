import React from 'react';

export default (reducer, actions, initialState) => {
	const Context = React.createContext();

	const Provider = props => {
		const [state, dispatch] = React.useReducer(reducer, initialState);

		return (
			<Context.Provider value={{ state }}>
				{props.children}
			</Context.Provider>
		);
	};
	return { Context, Provider };
};
