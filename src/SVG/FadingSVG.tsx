import {interpolate, useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React from 'react';

export const FadingSVG: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [140,150], [1,0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
		opacity,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
