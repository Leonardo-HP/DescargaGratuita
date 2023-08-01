import {AbsoluteFill} from 'remotion';
import {MovingOutside} from './MovingOutside';

import {Multiplicar} from './Multiplicar';
import React from 'react';
import {Dot} from './Dot';
import {Shrinking} from './Shrinking';

export const CompClick: React.FC = () => {
	return (
		<Multiplicar>
			<MovingOutside>
				<Shrinking>
					<Dot />
				</Shrinking>
			</MovingOutside>
		</Multiplicar>
	);
};
