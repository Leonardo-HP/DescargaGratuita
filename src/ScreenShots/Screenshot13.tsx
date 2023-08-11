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

export const ScreenShot13: React.FC<{
	scroll: number;
}> = ({scroll}) => {
	const frame = useCurrentFrame();
	const scrollTo = interpolate(frame, [0, 50,70,120], [scroll, 300, 300,300 ], {
		easing: Easing.elastic(1),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

  

	return (
		<div
			style={{
				transform: ` translateX(377px) translateY(${scrollTo}px)`,
			}}
		>
			<Sequence>
				<Img
					src={staticFile('ScreenShot13.png')}
					style={{
						transform: `scale(3.7)`,
					}}
				/>
			</Sequence>


		</div>
	);
};
