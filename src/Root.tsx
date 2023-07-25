import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import { MyComposition2 } from './Composition2';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition2}
				durationInFrames={2000}
				fps={60}
				width={620}
				height={400}
				
        defaultProps={{
          default: "0",
          
        }}


			/>
		</>

		
	);
};
