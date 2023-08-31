import {evolvePath, translatePath} from '@remotion/paths';
import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	random,
	staticFile,
	useCurrentFrame,
} from 'remotion';
import {Svg1} from './svg1';
import {SvgSharp} from './svgSharp';
import {SvgSmooth} from './svgSmooth';
import {SvgCorchete} from './svgCorchete';
import {SvgCrossed} from './svgCrossed';
import {SvgHighlighter} from './svgHighlighter';
import { SvgCirculo } from './svgCirculo';

export const SvgTests = () => {
	const frame = useCurrentFrame();

	const entrada = interpolate(frame, [0, 100], [0, 1000], {
		easing: Easing.elastic(0.7),
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const path =
		'M 100 100 l 800 0 m 100 100 l 0 800 m -100 100 l -800 0  m -100 -100 l 0 -800 ';
	const evolution = evolvePath(0.5, path);

	const element = (
		<path
			d={path}
			strokeDasharray={evolution.strokeDasharray}
			strokeDashoffset={evolution.strokeDashoffset}
		/>
	);

	const random1 = Math.trunc(random(10));
	const random2 = Math.trunc(random(10));

	return (
		<div>
			<div
				style={{
					height: '100px',
					width: '100px',
					borderWidth: '3px 3px 5px 5px',
					borderRadius: '4% 95% 6% 95%/95% 4%',
					background: 'white',
					border: `5px solid black`,
				}}
			/>
			<div
				style={{
					height: '100px',
					width: '100px',
					background: 'white',
					borderTopLeftRadius: ' 255px 15px',
					borderTopRightRadius: '15px 225px',
					borderBottomRightRadius: ' 225px 15px',
					borderBottomLeftRadius: '15px 255px',
					border: `9px solid grey`,
				}}
			/>

			<svg width="200px" viewBox=" -100 -100 1300 1300">
				<path
					stroke="currentColor"
					stroke-width="50"
					d="M 100 100 l 800 0 m 100 100 l 0 800 m -100 100 l -800 0  m -100 -100 l 0 -800 "
				/>
			</svg>
			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-350px) translateX(350px)',
				}}
			>
				<SvgSmooth ancho={300} largo={300} />
			</div>

			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-350px) translateX(100px)',
				}}
			>
				<SvgSmooth ancho={301} largo={300} />
			</div>

			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-350px) translateX(600px)',
				}}
			>
				<SvgSharp ancho={300} largo={300} />
			</div>

			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-350px) translateX(850px)',
				}}
			>
				<SvgCorchete ancho={300} largo={300} />
			</div>

			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-20px) translateX(350px)',
				}}
			>
				<SvgCrossed ancho={304} largo={300} />
			</div>

			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-20px) translateX(100px)',
				}}
			>
				<SvgCrossed ancho={300} largo={300} />
			</div>



			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-20px) translateX(600px)',
				}}
			>
				<SvgHighlighter ancho={304} largo={300} />
			</div>
	

			<div
				style={{
					position: 'absolute',
					transform: 'translateY(-20px) translateX(900px)',
				}}
			>
				<SvgCirculo ancho={304} largo={300} />
			</div>
	
		</div>
	);
};
