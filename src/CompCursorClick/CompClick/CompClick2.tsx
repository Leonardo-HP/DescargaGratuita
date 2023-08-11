import {AbsoluteFill} from 'remotion';
import {MovingOutside} from './MovingOutside';

import {Multiplicar} from './Multiplicar';
import React from 'react';
import {Dot} from './Dot';
import {Shrinking} from './Shrinking';
import { Multiplicar2 } from './Multiplicar2';
import { Dot2 } from './Dot2';

export const CompClick2: React.FC = () => {
	return (
		<Multiplicar2>
			<MovingOutside>
				<Shrinking>
					<Dot2 />
				</Shrinking>
			</MovingOutside>
		</Multiplicar2>
	);
};
