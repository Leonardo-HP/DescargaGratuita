import {AbsoluteFill} from 'remotion';
import {CompCursorClick} from './CompCursorClick/CompCursorClick';

export const MyTest = () => {
	return (
		<div>
			<AbsoluteFill>
				<CompCursorClick
					empiezaX={500}
					empiezaY={500}
					positionX={0}
					positionY={0}
				/>
			</AbsoluteFill>
		</div>
	);
};
