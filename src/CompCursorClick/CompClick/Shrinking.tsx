import {interpolate, useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React from 'react';

export const Shrinking: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 5, 10], [0, 1, 0], {
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
