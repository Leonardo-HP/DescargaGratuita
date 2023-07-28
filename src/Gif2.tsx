import {Sequence} from 'remotion';

import {CompClick} from './CompCursorClick/CompClick/CompClick';
import {Shrinking} from './CompCursorClick/CompClick/Shrinking';

export const Gif2 = () => {
	return (
		<div>
			<Shrinking>
				<CompClick />
			</Shrinking>
		</div>
	);
};
