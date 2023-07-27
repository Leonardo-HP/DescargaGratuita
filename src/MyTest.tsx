import {AbsoluteFill} from 'remotion';
import {CompCursorClick} from './CompCursorClick/CompCursorClick';

export const MyTest = () => {
	return (
		<div>
			<AbsoluteFill>
				<CompCursorClick
					empiezaX={-1000}
					empiezaY={-1000}
					positionX={0}
					positionY={0}
				/>
			</AbsoluteFill>
		</div>
	);
};
