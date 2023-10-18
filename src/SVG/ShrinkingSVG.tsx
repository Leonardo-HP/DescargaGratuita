import {interpolate, useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React from 'react';

export const ShrinkingSVG: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0,  10], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${scale})`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
