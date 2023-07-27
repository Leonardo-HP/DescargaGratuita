import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {MyComposition2} from './Composition2';
import {MyTest} from './MyTest';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={2000}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="MyComp2"
				component={MyComposition2}
				durationInFrames={590}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					default: '0',
				}}
			/>

			<Composition
				id="Test"
				component={MyTest}
				durationInFrames={2000}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					empiezaX: 1000,
					empiezaY: 1000,
				}}
			/>
		</>
	);
};
