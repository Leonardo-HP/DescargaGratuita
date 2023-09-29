import {evolvePath} from '@remotion/paths';
import {
	Easing,
	interpolate,
	random,
	useCurrentFrame,
} from 'remotion';
import {SvgSharp} from './svgSharp';
import {SvgCorchete} from './svgCorchete';
import {SvgCrossed} from './svgCrossed';
import {SvgHighlighter} from './svgHighlighter';
import {SvgCirculo} from './svgCirculo';
import { SvgSmooth } from '../../svgSmooth';

export const SvgTests = () => {
	const frame = useCurrentFrame();





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
					transform: 'translateY(-20px) translateX(900px)',
				}}
			>
				<SvgCirculo ancho={304} largo={300} seed={0} stroke={2}  />
			</div>


	<SvgCirculo ancho={500} largo={500} seed={0} stroke={2}/>

			</div>
	);
};
