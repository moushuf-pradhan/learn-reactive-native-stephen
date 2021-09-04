import React from 'react';
// Import Context
import { Context as AuthContext } from '../context/AuthContext';

export default function ResolveAuthScreen() {
	const { tryLocalSignin } = React.useContext(AuthContext);
	// On component mount
	React.useEffect(() => {
		tryLocalSignin();
	}, []);
	return null;
}
