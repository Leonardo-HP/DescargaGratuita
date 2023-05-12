import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={2000}
				fps={60}
				width={1280}
				height={720}
			/>
		</>

		
	);
};
