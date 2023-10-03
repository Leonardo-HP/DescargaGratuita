import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgLine: React.FC<{
	ancho: number;
	largo: number;
	stroke: number;
	seed: number;
	color: string;
duracionCaja: number;
	x: number;
	y: number;
}> = ({color, ancho, largo, seed, stroke, x, y, duracionCaja}) => {
	const random2 = Math.trunc(random(seed) * 10) - 5 + 10;
	const random4 = Math.trunc(random(seed) * 10) - 5 + 10;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
		M10,10    S30,${random2}          50,10     S70,${random4}    90,10  
							
		`;
	const duracion = duracionCaja / 4;
	const progress = interpolate(
		frame,
		[0, duracion, duracion * 3, duracionCaja],
		[0, 1, 1, 2],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div
			style={{
				filter: 'drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))',
				position: 'absolute',
				transform: `translateX(${x}px) translateY(${y}px)`,
			}}
		>
			<svg
				viewBox="0 0 120 120"
				preserveAspectRatio="none"
				width={ancho}
				height={largo}
			>
				<path
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					d={d}
					stroke={color}
					stroke-width={stroke}
					fill="none"
				/>
			</svg>
		</div>
	);
};
