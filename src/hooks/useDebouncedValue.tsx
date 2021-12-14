import { useState } from 'react';
import { useEffect } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
	const [ debounceValue, setDebounceValue ] = useState(input);

	useEffect(
		() => {
			const timeOut = setTimeout(() => {
				setDebounceValue(input);
			}, time);
			return () => {
				clearTimeout(timeOut);
			};
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ input ]
	);

	return { debounceValue };
};
