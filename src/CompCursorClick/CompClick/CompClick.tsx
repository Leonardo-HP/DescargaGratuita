import {MovingOutside} from './MovingOutside';
import {Shrinking} from './Shrinking';

import {Multiplicar} from './Multiplicar';
import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Dot} from './Dot';

export const CompClick:  React.FC = () => {
	return (
		<AbsoluteFill>
				<Shrinking>
					<Multiplicar><Dot/> </Multiplicar>
				</Shrinking>
		</AbsoluteFill>
	);
};
