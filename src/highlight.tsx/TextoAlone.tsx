import {loadFont} from '@remotion/google-fonts/Oswald';

import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from 'remotion';

const {fontFamily} = loadFont();

export const TextAlone: React.FC = () => {
	const frame = useCurrentFrame();

	const move = interpolate(frame, [0, 100, 200, 250], [0, 0, 0,100], {
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				
			}}
		>
			<AbsoluteFill
				style={{
          overflow: 'hidden',

					justifyContent: 'center',
					alignItems: 'center',
					background: 'white',

          clipPath: `inset(0 0 0 ${move}%)`,
				}}
			>
				<div
					style={{
						color: '#CC1E2C',
						fontFamily,
						fontSize: 60,
					}}
				>
					¿Cómo descargar facturas de manera masiva?
				</div>
			</AbsoluteFill>
		</div>
	);
};
