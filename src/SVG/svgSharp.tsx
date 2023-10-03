import {evolvePath} from '@remotion/paths';
import {
	interpolate,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const SvgSharp: React.FC<{
	ancho: number;
	largo: number;
	stroke: number;
	seed: number;
	color: string;
duracionCaja: number;
	x: number;
	y: number;
}> = ({color, ancho, largo, seed, stroke, x, y, duracionCaja}) => {
	const random1  = Math.trunc(random(seed + 1 ) * 10) - 5 + 10;
	const random2  = Math.trunc(random(seed + 2 ) * 10) - 5 + 10;
	const random3  = Math.trunc(random(seed + 3 ) * 10) - 5 + 90;
	const random4  = Math.trunc(random(seed + 4 ) * 10) - 5 + 90;
	const random5  = Math.trunc(random(seed + 5 ) * 10) - 5 + 90;
	const random6  = Math.trunc(random(seed + 6 ) * 10) - 5 + 90;
	const random7  = Math.trunc(random(seed + 7 ) * 10) - 5 + 10;
	const random8  = Math.trunc(random(seed + 8 ) * 10) - 5 + 10;
	const random9  = Math.trunc(random(seed + 9 ) * 10) - 5 + 10;
	const random10 = Math.trunc(random(seed + 10) * 10) - 5 + 10;
	const random11 = Math.trunc(random(seed + 11) * 10) - 5 + 90;
	const random12 = Math.trunc(random(seed + 12) * 10) - 5 + 90;
	const random13 = Math.trunc(random(seed + 13) * 10) - 5 + 90;
	const random14 = Math.trunc(random(seed + 14) * 10) - 5 + 90;
	const random15 = Math.trunc(random(seed + 15) * 10) - 5 + 10;
	const random16 = Math.trunc(random(seed + 16) * 10) - 5 + 10;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const d = ` 
		M10,10    Q20,${random1}          50,10     Q80,${random2}    90,10  
							Q${random3},20          90,50     Q${random4},80    90,90   
							Q80,${random5}          50,90          Q20,${random6}    10,90
							Q${random7},80          10,50          Q${random8},20    10,10
							Q20,${random9}          50,10     Q80,${random10}    90,10  
							Q${random11},20          90,50     Q${random12},80    90,90   
							Q80,${random13}          50,90          Q20,${random14}    10,90
							Q${random15},80          10,50          Q${random16},20    10,10
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
