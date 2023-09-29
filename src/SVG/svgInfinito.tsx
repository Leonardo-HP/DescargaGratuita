import {evolvePath} from '@remotion/paths';
import {interpolate, random, useCurrentFrame} from 'remotion';

export const SvgInfinito: React.FC<{
	ancho: number;
	largo: number;
}> = ({ancho, largo}) => {
	const random1 = Math.trunc(random(ancho + 1) * 3) - 5 + 10;
	const random2 = Math.trunc(random(ancho + 2) * 3) - 5 + 10;
	const random3 = Math.trunc(random(ancho + 3) * 3) - 5 + 10;

	const random4 = Math.trunc(random(ancho + 4) * 3) - 5 + 90;
	const random5 = Math.trunc(random(ancho + 5) * 3) - 5 + 90;
	const random6 = Math.trunc(random(ancho + 6) * 3) - 5 + 90;

	const random7 = Math.trunc(random(ancho + 7) * 3) - 5 + 90;
	const random8 = Math.trunc(random(ancho + 8) * 3) - 5 + 90;
	const random9 = Math.trunc(random(ancho + 9) * 3) - 5 + 90;

	const random10 = Math.trunc(random(ancho + 10) * 3) - 5 + 10;
	const random11 = Math.trunc(random(ancho + 11) * 3) - 5 + 10;
	const random12 = Math.trunc(random(ancho + 12) * 3) - 5 + 10;

	const frame = useCurrentFrame();
	const d = ` 
		M10,50    C${random1},${random4} ${random7},${random10} ${random4},50   C90,${random7} 10,${random10} ${random1},50
              C${random2},${random5} ${random8},${random11} ${random5},50   C90,${random8} 10,${random11} ${random2},50
              C${random3},${random6} ${random9},${random12} ${random6},50   C90,${random9} 10,${random12} ${random3},50
		`;

	const progress = interpolate(frame, [0, 50], [0, 0.5]);

	const {strokeDasharray, strokeDashoffset} = evolvePath(progress, d);

	return (
		<div>
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
					stroke="red"
					stroke-width="2"
					fill="none"
					opacity={0.7}
				/>
			</svg>
			<div
				style={{
					transform: ' translateY(-100px)',
					position: 'absolute',
					width: '300px',
					height: '100px',
					fontSize: '50px',
					color: 'black',
					overflow: 'hidden',
				}}
			>
				<p
					style={{
						transform: 'translateX(40px)',
					}}
				>
					Circle
				</p>
			</div>
		</div>
	);
};
