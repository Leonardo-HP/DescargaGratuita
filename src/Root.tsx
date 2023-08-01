import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {GifLogin1} from './GifLogin1';
import {MyTest} from './MyTest';
import { Gif1 } from './Gif1';
import { Gif2 } from './Gif2';
import { Gif3 } from './Gif3';
import { Gif4 } from './Gif4';
import { Gif5 } from './Gif5';
import { Gif6 } from './Gif6';

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
				id="GifLogin1"
				component={GifLogin1}
				durationInFrames={590}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					default: '0',
				}}
			/>

<Composition
				id="Gif1"
				component={Gif1}
				durationInFrames={600}
				fps={30}
				width={620}
				height={400}

			/>

<Composition
				id="Gif2"
				component={Gif2}
				durationInFrames={590}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					default: '0',
				}}
			/>


<Composition
				id="Gif3"
				component={Gif3}
				durationInFrames={590}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					default: '0',
				}}
			/>

<Composition
				id="Gif4"
				component={Gif4}
				durationInFrames={590}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					default: '0',
				}}
			/>

<Composition
				id="Gif5"
				component={Gif5}
				durationInFrames={590}
				fps={60}
				width={620}
				height={400}
				defaultProps={{
					default: '0',
				}}
			/>

<Composition
				id="Gif6"
				component={Gif6}
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
