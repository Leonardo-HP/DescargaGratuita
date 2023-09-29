import {evolvePath} from '@remotion/paths';
import {interpolate, random, useCurrentFrame} from 'remotion';

export const SvgCorchete: React.FC<{
	ancho: number;
	largo: number;
}> = ({ancho, largo}) => {
	const random1 = Math.trunc(random(ancho + 1) * 10) - 5 + 10;
	const random2 = Math.trunc(random(ancho + 2) * 10) - 5 + 90;
	const random3 = Math.trunc(random(ancho + 3) * 10) - 5 + 90;
	const random4 = Math.trunc(random(ancho + 4) * 10) - 5 + 10;
	const random5 = Math.trunc(random(ancho + 5) * 10) - 5 + 10;
	const random6 = Math.trunc(random(ancho + 6) * 10) - 5 + 90;

	const frame = useCurrentFrame();
	const d = ` 
		M80,10    Q80,${random1}    90,10  
							Q${random2},20    90,90  
							Q80,${random3}    80,90
              M20,10    Q20,${random4}    10,10  
              Q${random5},10    10,90  
              Q20,${random6}    20,90
		`;

	const progress = interpolate(frame, [0, 50], [0, 0.5]);
	/**
 * Spring
 * 	const progress = spring({
		fps,
		frame,
		config: {
			stiffness: 30,
		},
		durationInFrames: 200,
	});
 */
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
					opacity="0.8"
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
				}}
			>
				<p>S. Braquet</p>
			</div>
		</div>
	);
};
