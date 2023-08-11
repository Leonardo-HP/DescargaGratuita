import {
	AbsoluteFill,
	Easing,
	Img,
	Sequence,
	interpolate,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {CheckMark} from './CheckMark';
import {Fondo} from './Fondo';
import { CompCursorClick } from '../CompCursorClick/CompCursorClick';

export const ScreenShot12: React.FC<{
	scroll: number;
}> = ({scroll}) => {
	const frame = useCurrentFrame();
	const scrollTo = interpolate(frame, [0, 50,300,350], [scroll, scroll,scroll,scroll-600,], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				transform: ` translateX(364px) translateY(${scrollTo}px)`,
			}}
		>
			<Sequence>
				<Img
					src={staticFile('ScreenShot11.png')}
					style={{
						transform: `scale(3.5)`,
					}}
				/>
			</Sequence>

			<Sequence from={100}>
				<CheckMark />
			</Sequence>


		</div>
	);
};
