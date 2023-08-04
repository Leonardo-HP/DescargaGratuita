import {interpolateColors, useCurrentFrame} from 'remotion';
import React from 'react';
import {loadFont} from '@remotion/google-fonts/Montserrat';

export const Letra: React.FC<{
	inicio: number;
	children: React.ReactNode;
}> = ({inicio, children}) => {
	const frame = useCurrentFrame();
	const {fontFamily} = loadFont();

	return (
		<div
			style={{
				fontFamily,
				fontSize: '19px',
				background: `white`,
				color: interpolateColors(
					frame,
					[inicio, inicio + 1],
					['white', 'black']
				),
			}}
		>
			{children}
		</div>
	);
};
