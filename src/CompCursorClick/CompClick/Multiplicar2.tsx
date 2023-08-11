import React from 'react';
import {AbsoluteFill} from 'remotion';

const AMOUNT = 10;

export const Multiplicar2: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<div>
			{new Array(AMOUNT).fill(true).map((_, i) => {
				return (
					<div
						style={{
							transform: `rotate(${(i / AMOUNT) * Math.PI * 2}rad)`,
						}}
					>
						{children}
					</div>
				);
			})}
		</div>
	);
};
