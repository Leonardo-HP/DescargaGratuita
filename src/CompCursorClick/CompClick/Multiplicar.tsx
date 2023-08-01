import React from 'react';
import {AbsoluteFill} from 'remotion';

const AMOUNT = 10;

export const Multiplicar: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<AbsoluteFill>
			{new Array(AMOUNT).fill(true).map((_, i) => {
				return (
					<AbsoluteFill
						style={{
							transform: `rotate(${(i / AMOUNT) * Math.PI * 2}rad)`,
						}}
					>
						{children}
					</AbsoluteFill>
				);
			})}
		</AbsoluteFill>
	);
};
