import React, { createContext, useState } from 'react';

export const TypeContext = createContext();

export function TypeProvider({ children }) {
	const [type, setType] = useState('Frontend');
	const changeType = e => setType(e.target.value);
	return (
		<TypeContext.Provider value={{ type, changeType }}>
			{children}
		</TypeContext.Provider>
	);
}
