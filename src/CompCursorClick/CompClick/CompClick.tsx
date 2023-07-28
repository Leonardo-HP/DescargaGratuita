import { AbsoluteFill } from 'remotion';
import {MovingOutside} from './MovingOutside';

import {Multiplicar} from './Multiplicar';
import React from 'react';

export const CompClick:  React.FC = () => {
	return (
<AbsoluteFill>
				
					<Multiplicar>

						<MovingOutside/>
					</Multiplicar>
					</AbsoluteFill>

	);
};
