import React from 'react';
import {AbsoluteFill} from 'remotion';

export const Dot2: React.FC = () => {
	return (
		<div
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					height: 7,
					width: 7,
					borderRadius: 14 / 2,
					backgroundColor: 'red',
				}}
			/>
		</div>
	);
};
